import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

import { env } from "@/config/env";
import { PostsOutput } from "@/schemas/output/posts";
import { defaultResult } from "../utils/requests";

export const GET = async (request: NextRequest) => {
  try {
    const params = request.nextUrl.searchParams;
    const page = params.get("page");
    const limit = params.get("limit");

    if (!page || !limit) {
      return NextResponse.json(
        { message: "Page and limit query params are required" },
        { status: 400 },
      );
    }

    const url = new URL(`${env.baseUrl}/posts`);

    url.searchParams.set("page", page);
    url.searchParams.set("limit", limit);

    const response = await fetch(url.toString());

    if (!response.ok) {
      console.error(await response.json());

      return NextResponse.json(defaultResult, { status: 200 });
    }

    const posts = PostsOutput.parse(await response.json());

    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.error(err);

    if (err instanceof ZodError) {
      return NextResponse.json(
        { message: "Error mapping response" },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Unexpected Error" }, { status: 500 });
  }
};
