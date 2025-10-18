import { Post } from "../interfaces";
import { headers as Headers } from "next/headers";
import { getFilteredPosts } from "../template";

export async function GET() {
  const headers = Headers();
  const tags: string[] = JSON.parse(headers.get("tags") ?? "[]");
  const posts: Post[] = await getFilteredPosts(tags, "tags");

  return new Response(JSON.stringify({ posts, qty: posts.length }));
}
