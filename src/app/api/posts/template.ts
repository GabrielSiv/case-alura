import { Post } from "./interfaces";

export const getFilteredPosts = async (
  filterArray: string[],
  typeOfFilter: "tags" | "categories"
) => {
  const posts: Post[] = [];

  const postsByTags = await Promise.all(
    filterArray.map((item) =>
      fetch(`${process.env.API_URL}/posts/${typeOfFilter}/${item}`).then(
        async (res) => await res.json()
      )
    )
  );

  postsByTags.forEach((item) => posts.push(...item.posts));

  return posts;
};
