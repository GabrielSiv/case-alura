import { Post } from "../interfaces";
import { headers as Headers } from "next/headers";
import { getFilteredPosts } from "../template";

export async function GET(request: Request) {
  const headers = Headers();
  const categories: string[] = JSON.parse(headers.get("categories") ?? "[]");
  const posts: Post[] = await getFilteredPosts(categories, "id");

  return new Response(JSON.stringify({ posts, qty: posts.length }));
}
