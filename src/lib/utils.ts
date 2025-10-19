import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const tagMap = new Map([
  ["tecnologia", "tecnologia"],
  ["programacao", "programacao"],
  ["web", "web"],
  ["mobile", "mobile"],
  ["design", "design"],
  ["negocios", "negocios"],
  ["startup", "startup"],
  ["inovacao", "inovacao"],
  ["frontend", "frontend"],
  ["backend", "backend"],
  ["devops", "devops"],
  ["data science", "data-science"],
]);
