import { Button } from "../../components/Button";
import { Post } from "@/schemas/output/posts";

export function Categories({ posts }: { posts: Post[] }) {
  const allCategories = posts.map((post) => post.category.name);
  const categories = Array.from(new Set(allCategories)).sort(
    (a, b) => a.length - b.length
  );

  return (
    <section
      className="flex justify-between gap-3 w-full sm:max-w-[40%] sm:w-fit self-center"
      aria-labelledby="categories-heading"
    >
      <h2
        className="flex text-base self-center sm:self-start paragraph font-bold font-chakra text-neutral-dark pt-1"
        id="categories-heading"
      >
        Categorias:
      </h2>
      <ul className="flex flex-wrap gap-4 justify-end" role="list">
        {categories.map((category, index) => (
          <li key={index}>
            <Button label={category} variant="default" />
          </li>
        ))}
      </ul>
    </section>
  );
}
