"server-only";

import { env } from "@/config/env";
import { serverAction } from "../config/action";
import { RelatedPostsOutput } from "@/schemas/output/posts";
import { RelatedPostsInputSchema } from "@/schemas/input/posts";

export const listRelatedPosts = serverAction({
  inputSchema: RelatedPostsInputSchema,
  handler: async ({ id, tags }) => {
    const url = new URL(`${env.serverUrl}/posts/id/${id}/relateds`);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tags }),
    });

    if (!response.ok) {
      return RelatedPostsOutput.parse({ relateds: [] });
    }

    return RelatedPostsOutput.parse(await response.json());
  },
});
