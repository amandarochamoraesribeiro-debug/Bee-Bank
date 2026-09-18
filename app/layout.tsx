import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Toaster } from "sonner";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bee Bank Questões — Banco de Questões R1",
  description: "Plataforma de resolução de questões para preparação de Residência Médica (R1).",
};

// Aplica o tema salvo (ou a preferência do sistema, na primeira visita) antes da
// primeira renderização, para não haver um "flash" com o tema errado.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-forest-50 text-forest-900 dark:bg-forest-950 dark:text-forest-100">
        <header className="sticky top-0 z-40 border-b border-forest-200 bg-white/90 backdrop-blur dark:border-forest-800 dark:bg-forest-950/90">
          <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold text-forest-900 dark:text-gold-400">
              <img src="/brand/bee-logo-mark.png" alt="" className="h-8 w-8 rounded-md" />
              <span>Bee Bank Questões</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium text-forest-600 dark:text-forest-300">
              <Link href="/" className="hover:text-gold-700 dark:hover:text-gold-400">
                Banco de Questões
              </Link>
              <Link href="/importar" className="hover:text-gold-700 dark:hover:text-gold-400">
                Importar
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
