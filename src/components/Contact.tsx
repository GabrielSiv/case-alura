"use client";

import Image from "next/image";

const contactLinks: Record<
  "github" | "mail" | "linkedin",
  { url: string; alt: string; content: string }
> = {
  mail: {
    url: "mailto:fernandamascheti@gmail.com",
    alt: "Enviar email",
    content: "fernandamascheti@gmail.com",
  },
  linkedin: {
    url: "https://linkedin.com/in/seu-usuario",
    alt: "Perfil no LinkedIn",
    content: "/Fernanda Mascheti",
  },
  github: {
    url: "https://github.com/seu-usuario",
    alt: "Perfil no GitHub",
    content: "/fernandamascheti",
  },
};

export function Contacts() {
  return (
    <section
      aria-labelledby="contacts-heading"
      className="
        flex flex-col items-center justify-center text-center gap-8 w-full
        sm:flex-row sm:items-start sm:justify-between sm:text-left
      "
    >
      <div className="flex flex-col items-center sm:items-start">
        <h3 className="text-base font-chakra font-bold text-primary-soft dark:text-neutral-white">
          Vamos conversar?
        </h3>
        <h2 className="heading-1 text-3xl sm:text-6xl">Entre em contato</h2>
      </div>

      <ul
        className="
          flex flex-col items-center sm:items-start gap-4
        "
        role="list"
      >
        {Object.entries(contactLinks).map(([name, { url, alt, content }]) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
              className="flex gap-2 items-center transition-opacity hover:opacity-80"
            >
              <Image
                src={`/${name}-icon.svg`}
                alt={alt}
                width={24}
                height={24}
              />
              <span
                className={`paragraph ${
                  content.includes("/") ? "underline" : ""
                }`}
              >
                {content}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
