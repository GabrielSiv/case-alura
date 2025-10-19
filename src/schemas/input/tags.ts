import z from "zod";

export const TagTypeInput = z.enum([
  "tecnologia",
  "programacao",
  "web",
  "mobile",
  "design",
  "negocios",
  "startup",
  "inovacao",
  "frontend",
  "backend",
  "devops",
  "data-science",
]);
export type TagTypeInput = z.infer<typeof TagTypeInput>; 
