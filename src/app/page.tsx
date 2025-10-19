import { Suspense } from "react";
import { Intro } from "@/app/_components/Intro";
import { Card } from "@/components/Card";
import { Categories } from "@/app/_components/Categories";
import { PaginationInput } from "@/schemas/input/pagination";
import { Pagination } from "@/components/Pagination";
import { SearchInput } from "@/app/_components/SearchInput";
import { Contacts } from "@/components/Contact";
import { searchPosts } from "@/services/posts";
import { TagTypeInput } from "@/schemas/input/tags";
import { tagMap } from "@/lib/utils";

type SearchParams = {
  page?: string;
  search?: TagTypeInput;
};

type ServerProps = {
  searchParams?: Promise<SearchParams>;
};

export default async function Home({ searchParams }: ServerProps) {
  const params = await searchParams;
  const page = params?.page && parseInt(params.page);
  const search = params?.search;
  const urlPath = search ? `?search=${search}&page=` : `?page=`;
  const input = PaginationInput.parse({ page: page, limit: 6 });
  const { posts, pagination } = await searchPosts(input, search);
  const tags = Array.from(tagMap, ([, tag]) => tag);
  const formattedTags =
    tags.length > 1
      ? `${tags.slice(0, -1).join(", ")} e ${tags.at(-1)}.`
      : `${tags[0]}.`;

  return (
    <main className="mx-auto flex flex-col gap-10 pt-26 max-w-[var(--max-width)] px-4 sm:px-6">
      <Intro />
      <div className="py-10 w-full flex flex-col gap-8">
        <div className="flex w-full gap-8 sm:gap-0 flex-col sm:flex-row justify-between">
          <div className="flex gap-6 w-full sm:w-[50%] h-fit">
            <h3 className="heading-3 whitespace-nowrap h-fit self-center">
              Minhas postagens
            </h3>
            <SearchInput />
          </div>
          {posts.length > 0 && <Categories posts={posts} />}
        </div>
        <Suspense fallback={<div>Cargando...</div>}>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-center sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {posts.length ? (
                posts.map((post, index) => (
                  <span className="self-center" key={index}>
                    <Card
                      title={post.title}
                      category={post.category.name}
                      description={post.content}
                      href={`/blog/${post.id}`}
                      imageUrl={post.imageUrl}
                    />
                  </span>
                ))
              ) : (
                <div className="flex flex-col">
                  <h4 className="heading-1 w-full text-start">
                    Nada encontrado :(
                  </h4>
                  <p className="paragraph">
                    Experimente buscar por outras tags disponíveis:{" "}
                    {formattedTags}
                  </p>
                </div>
              )}
            </div>
            {pagination.totalPages > 1 && (
              <Pagination
                totalPages={pagination.totalPages}
                currentPage={pagination.currentPage}
                urlPath={urlPath}
              />
            )}
          </div>
        </Suspense>
      </div>
      <Contacts />
    </main>
  );
}
