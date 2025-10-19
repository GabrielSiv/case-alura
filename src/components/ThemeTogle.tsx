"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const docHasDark =
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark");
    setIsDark(docHasDark);
  }, []);

  useEffect(() => {
    if (isDark === null) return;
    try {
      if (isDark) {
        document.documentElement.classList.add("dark");

        document.cookie = `theme=dark; Path=/; Max-Age=${
          60 * 60 * 24 * 365
        }; SameSite=lax`;
      } else {
        document.documentElement.classList.remove("dark");
        document.cookie = `theme=light; Path=/; Max-Age=${
          60 * 60 * 24 * 365
        }; SameSite=lax`;
      }
    } catch (e) {}
  }, [isDark]);

  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-sm sm:text-base ${
          isDark ? "opacity-40" : "opacity-100"
        }`}
        aria-hidden
      >
        ☀️
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={!!isDark}
        aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
        onClick={() => setIsDark((v) => !v)}
        className={`
          relative inline-flex items-center h-8 w-12 sm:w-14 rounded-full p-1
          transition-colors duration-200 ease-in-out
          ${isDark ? "bg-gray-700" : "bg-gray-200"}
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
        `}
      >
        <span
          className={`relative z-10 block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ${
            isDark ? "translate-x-4 sm:translate-x-6" : "translate-x-0"
          }`}
          aria-hidden
        />
      </button>
      <span
        className={`text-sm sm:text-base ${
          isDark ? "opacity-100" : "opacity-40"
        }`}
        aria-hidden
      >
        🌙
      </span>
    </div>
  );
}
