"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { cva } from "class-variance-authority";
import { ThemeToggle } from "./ThemeTogle";

const navItem = cva(
  "heading-3 sm:text-2xl px-3 py-1 rounded-md cursor-pointer",
  {
    variants: {
      active: {
        true: "text-primary-soft",
        false: "text-foreground",
      },
    },
  }
);

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isBlogActive = pathname.includes("/blog");

  return (
    <header className="py-3 flex items-center bg-transparent mx-auto max-w-[var(--max-width)] px-3">
      <div className="flex items-center gap-6 w-full justify-between">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-4 cursor-pointer sm:px-3"
        >
          <Image
            src="/fernanda-logo.svg"
            alt="Logo Fernanda"
            width={46}
            height={46}
          />
          <span className="heading-3 invisible sm:visible sm:text-2xl rounded-md cursor-pointer">
            FERNANDA MASCHETTI
          </span>
        </button>

        <div className="flex gap-3">
          <nav className="flex gap-2">
            <button
              onClick={() => router.push("/")}
              className={navItem({ active: pathname === "/" })}
            >
              Início
            </button>
            <span className={navItem({ active: isBlogActive })}>Blog</span>
          </nav>
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}
