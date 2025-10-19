import z from "zod";

export const CategoryTypeInput = z.enum([
  "mobile",
  "programacao",
  "frontend",
  "devops",
  "ux-design",
  "data-science",
  "inovacao-gestao",
]);
export type CategoryTypeInput = z.infer<typeof CategoryTypeInput>;
