import Image from "next/image";
import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { findPostById } from "@/services/posts";
import { listRelatedPosts } from "@/server/actions/posts";
import { RelatedPostsInputSchema } from "@/schemas/input/posts";

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function Blog({ params }: BlogPageProps) {
  const { id } = await params;
  const post = await findPostById(id);

  if (!post) {
    return notFound();
  }
  const tagSlugs = post.tags.map((tag) => tag.slug);
  const input = RelatedPostsInputSchema.parse({ id, tags: tagSlugs });
  const { data } = await listRelatedPosts(input);

  return (
    <main
      className="mx-auto flex flex-col gap-10 pt-26 max-w-[var(--max-width)] px-4 sm:px-6"
      role="main"
      aria-label="Conteúdo do post"
    >
      <article
        className="flex w-full flex-col gap-16"
        aria-labelledby="post-title"
      >
        <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between">
          <section className="flex flex-col gap-6 w-full text-center lg:text-start items-center lg:items-start">
            <h1 id="post-title" className="heading-1 text-center lg:text-start">
              {post.title}
            </h1>

            <section
              className="flex flex-col gap-6"
              aria-label="Informações adicionais do post"
            >
              <div className="flex flex-col gap-5 items-center lg:items-start">
                <h2
                  className="paragraph font-bold text-center lg:text-start"
                  id="category-label"
                >
                  Categoria:
                </h2>
                <Button
                  label={post.category.name}
                  aria-labelledby="category-label"
                />
              </div>

              <div className="flex flex-col gap-5 items-center lg:items-start">
                <h2
                  className="paragraph font-bold text-center lg:text-start"
                  id="tags-label"
                >
                  Tags:
                </h2>
                <ul
                  className="flex flex-wrap gap-3 justify-center lg:justify-start"
                  aria-labelledby="tags-label"
                  role="list"
                >
                  {post.tags.map((tag) => (
                    <li key={tag.slug}>
                      <Button label={tag.name} variant="reverse" />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </section>

          <figure className="relative w-full h-64 sm:h-96 lg:h-auto">
            <Image
              src={post.imageUrl}
              alt={`Imagem ilustrativa do post: ${post.title}`}
              sizes="(max-width: 564px) 100vw"
              fill
              className="object-cover rounded-md"
            />
            <figcaption className="sr-only">
              Imagem ilustrativa do post: {post.title}
            </figcaption>
          </figure>
        </div>

        <section
          aria-label="Conteúdo do artigo"
          className="text-center lg:text-start"
        >
          <p className="paragraph">{post.content}</p>
        </section>
      </article>

      <section
        className="flex flex-col items-center text-center gap-10"
        aria-label="Postagens relacionadas"
      >
        <h2 className="heading-3">Postagens relacionadas</h2>
        <div
          className="flex flex-col lg:flex-row gap-6 justify-center items-center"
          role="list"
        >
          {data?.relateds &&
            data.relateds.map((post) => (
              <Card
                title={post.title}
                category={post.category.name}
                description={post.content}
                href={`/blog/${post.id}`}
                imageUrl={post.imageUrl}
                key={post.id}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
