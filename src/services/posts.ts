"use server";

import { env } from "@/config/env";
import { CategoryTypeInput } from "@/schemas/input/category";
import { PaginationInput } from "@/schemas/input/pagination";
import { TagTypeInput } from "@/schemas/input/tags";
import { Post, PostOutput, PostsOutput } from "@/schemas/output/posts";

export const findPostById = async (id: string): Promise<Post | undefined> => {
  const url = new URL(`${env.serverUrl}/posts/id/${id}`);
  const response = await fetch(url);
  if (!response.ok) {
    return undefined;
  }

  const { post } = PostOutput.parse(await response.json());

  return post;
};

export const listPosts = async (
  params: PaginationInput,
): Promise<PostsOutput> => {
  const url = new URL(`${env.serverUrl}/posts`);
  url.searchParams.set("page", params.page.toString());
  url.searchParams.set("limit", params.limit.toString());

  const response = await fetch(url.toString());
  if (!response.ok) {
    console.error(await response.json());

    throw new Error("Something went wrong");
  }

  return PostsOutput.parse(await response.json());
};

export const listPostsByCategory = async (
  category: CategoryTypeInput,
  params: PaginationInput,
): Promise<PostsOutput> => {
  const url = new URL(`${env.serverUrl}/posts/category/${category}`);
  url.searchParams.set("page", params.page.toString());
  url.searchParams.set("limit", params.limit.toString());

  const response = await fetch(url.toString());
  if (!response.ok) {
    console.error(await response.json());

    throw new Error("Something went wrong");
  }

  return PostsOutput.parse(await response.json());
};

export const listPostsByTag = async (
  tag: TagTypeInput,
  params: PaginationInput,
) => {
  const url = new URL(`${env.serverUrl}/posts/tags/id/${tag}`);

  url.searchParams.set("page", params.page.toString());
  url.searchParams.set("limit", params.limit.toString());

  const response = await fetch(url.toString());
  if (!response.ok) {
    console.error(await response.json());

    throw new Error("Something went wrong");
  }

  return PostsOutput.parse(await response.json());
};

export const searchPosts = async (
  params: PaginationInput,
  tag?: TagTypeInput,
): Promise<PostsOutput> => {
  if (!tag) {
    return listPosts(params);
  }

  return listPostsByTag(tag, params);
};
