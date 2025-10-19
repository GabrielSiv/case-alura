import z from "zod";

export const PaginationInput = z.object({
  page: z.int().positive().default(1),
  limit: z.int().positive().default(6),
});
export type PaginationInput = z.infer<typeof PaginationInput>;
