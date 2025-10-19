import { PostsOutput } from "@/schemas/output/posts";

export const defaultResult: PostsOutput = {
  posts: [],
  pagination: {
    currentPage: 1,
    totalPages: 0,
    totalPosts: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  },
};
