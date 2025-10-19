# Alura Frontend Challenge – Next.js 15

Aplicação desenvolvida como parte do **case técnico para Pessoa Desenvolvedora Frontend** da Alura.

O objetivo é implementar uma interface fiel ao design do Figma, utilizando **Next.js 15**, **TypeScript**, **Tailwind CSS v4** e boas práticas de SEO e acessibilidade.

---

## 🚀 Tecnologias Utilizadas

- ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=flat&logo=tailwindcss)

---

## ✅ Funcionalidades

- **Página inicial** com listagem dinâmica de postagens.
- **Filtros** por palavra-chave e categorias.
- **Paginação** (6 posts por página).
- **Página de detalhes** com título, categorias, tags e descrição.
- **Postagens relacionadas** por categorias/tags.
- **Tema claro/escuro** (diferencial).
- **Responsividade completa** (desktop, tablet, mobile).
- **SEO e acessibilidade** aplicados em todas as páginas.

---

## 🖼 Design

Interface baseada no layout fornecido no Figma.

---

## 📂 Estrutura do Projeto

```
src/
  ├── app/                # Rotas com App Router
  ├── components/         # Componentes reutilizáveis
  ├── services/           # Consumo da API fake
  ├── schemas/            # Tipagem com Zod
  ├── styles/             # Tailwind + tokens globais
```

---

## 🔗 API

Base URL:

```
BASE_URL=https://nextjs-alura-teste.vercel.app/api
```

Endpoints principais:

- `GET /posts` – lista paginada
- `GET /posts/id/:id` – detalhes da postagem
- `GET /posts/category/:category` – por categoria
- `GET /posts/tags/id/:tag` – por tag

---

## 🛠 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repo.git

# Instale as dependências
npm install

# Configure o .env
echo "BASE_URL=https://nextjs-alura-teste.vercel.app/api" > .env.local

# Execute o projeto
npm run dev
```

---

## 🌗 Tema Dark

Implementado via classe `.dark` no `<html>` e tokens dinâmicos com Tailwind v4.
As cores foram ajustadas para manter contraste e acessibilidade.

---

## 📈 Critérios Atendidos

- Fidelidade ao design do Figma
- Componentização e organização
- Boas práticas de TypeScript e Next.js
- Performance e responsividade
- SEO e acessibilidade
- Integração com API mock
- Tema dark como diferencial

---

## 💡 Diferenciais

- Design tokens customizados para light/dark mode
- Estrutura escalável com App Router
- Tipagem robusta com Zod

---

## 📜 Licença

Este projeto foi desenvolvido para fins de avaliação técnica.
