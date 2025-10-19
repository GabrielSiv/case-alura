import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Paginação de postagens"
      className="flex items-center justify-center mt-8"
    >
      <ul className="flex gap-2" role="list">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <li key={index}>
              <Button
                label={String(page)}
                onClick={() => onPageChange(page)}
                variant="unactive"
                className={cn({
                  "bg-neutral-dark hover:bg-neutral-dark": currentPage === page,
                })}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
