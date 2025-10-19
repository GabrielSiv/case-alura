import z from "zod";

export const CategoryOutput = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
});
export type CategoryOutput = z.infer<typeof CategoryOutput>;
