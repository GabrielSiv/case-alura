import z from "zod";

import { TagTypeInput } from "./tags";

export const RelatedPostsBody = z.object({
  tags: TagTypeInput.array(),
});
export type RelatedPostsInput = z.infer<typeof RelatedPostsBody>;

export const RelatedPostsInputSchema = RelatedPostsBody.extend({
  id: z.uuid(),
});
export type RelatedPostsInputSchema = z.infer<typeof RelatedPostsInputSchema>;
