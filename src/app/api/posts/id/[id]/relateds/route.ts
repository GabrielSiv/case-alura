import { NextRequest, NextResponse } from "next/server";

import { env } from "@/config/env";

import { NextPathParams } from "@/app/api/utils/types";
import { RelatedPostsBody } from "@/schemas/input/posts";
import { Post, PostsOutput } from "@/schemas/output/posts";

function buildTagUrl(base: string, tag: string) {
  const url = new URL(`${base}/posts/tags/${encodeURIComponent(tag)}`);
  url.searchParams.set("page", "1");
  url.searchParams.set("limit", "3");
  return url.toString();
}

async function fetchPostsForTag(
  base: string,
  tag: string,
): Promise<Post[] | null> {
  const res = await fetch(buildTagUrl(base, tag));
  if (!res.ok) {
    console.warn(`Upstream for tag "${tag}" returned ${res.status}`);
    return null;
  }

  const parsed = PostsOutput.safeParse(await res.json());
  if (!parsed.success) {
    console.warn(`Invalid posts payload for tag "${tag}"`);
    return null;
  }

  return parsed.data.posts;
}

function mergeAndDedupe(results: Array<Post[] | null>, excludeId: string) {
  const added = new Set<string>();
  const relateds: Post[] = [];

  for (const posts of results) {
    if (!posts || posts.length === 0) continue;
    for (const p of posts) {
      if (!p || !p.id) {
        continue;
      }

      if (p.id === excludeId) {
        continue;
      }

      if (added.has(p.id)) {
        continue;
      }

      added.add(p.id);
      relateds.push(p);

      if (relateds.length >= 3) {
        return relateds;
      }
    }
  }

  return relateds;
}

export const POST = async (request: NextRequest, path: NextPathParams) => {
  const body = RelatedPostsBody.safeParse(await request.json());
  if (!body.success) {
    return NextResponse.json({ message: body.error }, { status: 400 });
  }
  const { tags } = body.data;

  const params = await path.params;
  if (!params) {
    return NextResponse.json(
      { message: "Path param id is required" },
      { status: 400 },
    );
  }

  const postId = params.id;
  const tagsToCall = tags.slice(0, 10);

  const promises = tagsToCall.map((t) => fetchPostsForTag(env.baseUrl!, t));
  const results = await Promise.all(promises);

  const relateds = mergeAndDedupe(results, postId);

  return NextResponse.json({ relateds });
};
