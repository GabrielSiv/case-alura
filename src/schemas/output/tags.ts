import z from "zod";

export const TagOutput = z.object({
  name: z.string(),
  slug: z.string(),
});
export type TagOutput = z.infer<typeof TagOutput>;
