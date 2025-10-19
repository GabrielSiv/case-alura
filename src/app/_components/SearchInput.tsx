"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { tagMap } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

type Props = {
  input?: string;
};

const removeSpecialChars = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export function SearchInput({ input }: Props) {
  const [search, setSearch] = useState<string>(input || "");
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const searchParams = new URLSearchParams();

      if (value === "") {
        router.push("/");
      } else {
        const inputTag = Array.from(tagMap.keys()).find((tag) =>
          removeSpecialChars(tag).startsWith(value.trim().toLowerCase())
        );

        const tag = tagMap.get(inputTag!);

        searchParams.set("search", tag || value);
        router.push("/?" + searchParams.toString());
        router.replace("/?" + searchParams.toString(), { scroll: false });
      }
    }, 600);
  };

  return (
    <div className="flex h-fit rounded-sm w-full border border-primary-soft py-1">
      <Input value={search} placeholder="Buscar..." onChange={onChange} />
      <span className="flex px-3 cursor-pointer">
        <Image src={"/search-icon.svg"} height={24} width={24} alt="search" />
      </span>
    </div>
  );
}
