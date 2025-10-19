import { NextRequest, NextResponse } from "next/server";

import { env } from "@/config/env";
import { NextPathParams } from "@/app/api/utils/types";
import { PostOutput } from "@/schemas/output/posts";

export const GET = async (_: NextRequest, path: NextPathParams) => {
  const { id } = await path.params;
  const url = new URL(`${env.baseUrl}/posts/id/${id}`);

  const response = await fetch(url.toString());

  if (!response.ok) {
    return NextResponse.json(
      { message: "Resource not found" },
      { status: 404 },
    );
  }

  const post = PostOutput.parse(await response.json());

  return NextResponse.json(post, { status: 200 });
};
