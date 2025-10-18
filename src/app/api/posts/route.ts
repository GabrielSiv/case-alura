import { Post } from "./interfaces";
import { headers as Headers } from "next/headers";

export async function GET(request: Request) {
  const posts = await fetch(`${process.env.API_URL}/posts}`).then((res) =>
    res.json()
  );

  return new Response(JSON.stringify({ posts }));
}
