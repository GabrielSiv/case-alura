import z from "zod";
import { CategoryOutput } from "./category";
import { TagOutput } from "./tags";
import { PaginationOutput } from "./pagination";

export const Post = z.object({
  id: z.uuid(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  createdAt: z.coerce.date(),
  likes: z.int(),
  category: CategoryOutput,
  tags: TagOutput.array(),
  imageUrl: z.url(),
});
export type Post = z.infer<typeof Post>;

export const Posts = Post.array();
export type Posts = z.infer<typeof Posts>;

export const PostsOutput = z.object({
  posts: Post.array(),
  pagination: PaginationOutput,
});
export type PostsOutput = z.infer<typeof PostsOutput>;

export const PostOutput = z.object({ post: Post });
export type PostOutput = z.infer<typeof PostOutput>;

export const RelatedPostsOutput = z.object({ relateds: Post.array() });
export type RelatedPostsOutput = z.infer<typeof RelatedPostsOutput>;
