import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Toaster } from "sonner";
import { Stethoscope } from "lucide-react";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
          <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold text-teal-700 dark:text-teal-400">
              <Stethoscope className="h-5 w-5" />
              <span>Bee Bank Questões</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
              <Link href="/" className="hover:text-teal-700 dark:hover:text-teal-400">
                Banco de Questões
              </Link>
              <Link href="/importar" className="hover:text-teal-700 dark:hover:text-teal-400">
                Importar
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
