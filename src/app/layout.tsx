import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Chakra_Petch } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blog da Fernanda",
  description: "Aprenda programação com Fernanda Maschieti",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;
  const isDark = themeCookie === "dark";
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${chakra.variable} ${isDark ? "dark" : ""}`}
    >
      <body
        className="font-sans bg-background-base text-text-base"
        style={{
          backgroundImage:
            "radial-gradient(circle at 45% 40%, rgba(128, 0, 128, 0.16) 0%, transparent 30%",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
