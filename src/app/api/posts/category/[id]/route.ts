import { NextRequest, NextResponse } from "next/server";

import { env } from "@/config/env";
import { NextPathParams } from "@/app/api/utils/types";
import { defaultResult } from "@/app/api/utils/requests";

export const GET = async (request: NextRequest, path: NextPathParams) => {
  const query = request.nextUrl.searchParams;
  const page = query.get("page");
  const limit = query.get("limit");

  if (!page || !limit) {
    return NextResponse.json(
      { message: "Page and limit query params are required" },
      { status: 400 },
    );
  }

  const category = await path.params;

  const url = new URL(`${env.baseUrl}/posts/category/${category.id}`);
  const response = await fetch(url.toString());

  if (!response.ok) {
    console.error(await response.json());
    return NextResponse.json(defaultResult, { status: 200 });
  }

  return NextResponse.json(await response.json(), { status: 200 });
};
