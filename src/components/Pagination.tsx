import { PaginationClientLink } from "./PaginationClientLink";
import {
  PaginationContent,
  PaginationItem,
  PaginationRoot,
} from "./ui/pagination";

interface Props {
  totalPages: number;
  currentPage: number;
  urlPath: string;
}

export function Pagination({ currentPage, totalPages, urlPath }: Props) {
  const limit = 3;
  const startPage = Math.max(
    Math.min(currentPage - 1, totalPages - limit + 1),
    1
  );

  const pages = Array.from({ length: limit }, (_, i) => startPage + i).filter(
    (page) => page <= totalPages
  );

  return (
    <PaginationRoot aria-label="Paginação de postagens">
      <PaginationContent>
        {pages.map((actualPage, index) => {
          const route = urlPath + actualPage;

          return (
            <PaginationItem key={index}>
              <PaginationClientLink
                href={route}
                isActive={currentPage === actualPage}
              >
                {actualPage}
              </PaginationClientLink>
            </PaginationItem>
          );
        })}
      </PaginationContent>
    </PaginationRoot>
  );
}
