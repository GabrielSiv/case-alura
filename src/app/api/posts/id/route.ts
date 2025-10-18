import { Post } from "../interfaces";
import { getFilteredPosts } from "../template";
import { headers as Headers } from "next/headers";

export async function GET(request: Request) {
  const headers = Headers();
  const id: string | null = headers.get("id");
  //   const posts: Post[] = await getFilteredPosts(categories, "categories");

  const post = await fetch(`${process.env.API_URL}/posts/id/${id}`).then(
    (res) => res.json()
  );

  return new Response(JSON.stringify({ post }));
}
