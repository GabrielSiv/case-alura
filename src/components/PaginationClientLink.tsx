"use client";

import Link from "next/link";
import { MouseEvent } from "react";
import { buttonVariants } from "./Button";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface PaginationClientLinkProps {
  href: string;
  isActive?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function PaginationClientLink({
  href,
  isActive,
  className,
  children,
}: PaginationClientLinkProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const currentUrl =
      pathname + (searchParams.size ? `?${searchParams.toString()}` : "");
    if (currentUrl === href) {
      e.preventDefault();
    }
  };

  return (
    <Link
      href={href}
      scroll={false}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({ variant: "unactive" }),
        className,
        isActive && "bg-neutral-dark hover:bg-neutral-dark"
      )}
    >
      {children}
    </Link>
  );
}
