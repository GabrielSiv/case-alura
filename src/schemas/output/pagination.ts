import z from "zod";

export const PaginationOutput = z.object({
  currentPage: z.int(),
  totalPages: z.int(),
  totalPosts: z.int(),
  hasNextPage: z.boolean(),
  hasPreviousPage: z.boolean(),
});
export type PaginationOutput = z.infer<typeof PaginationOutput>;
