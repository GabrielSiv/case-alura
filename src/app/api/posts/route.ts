export async function GET() {
  const posts = await fetch(`${process.env.API_URL}/posts`).then((res) =>
    res.json()
  );

  return new Response(JSON.stringify({ posts }));
}
