"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ImageGallery({ imagens }: { imagens: string[] }) {
  const [open, setOpen] = useState<string | null>(null);

  if (!imagens.length) return null;

  return (
    <>
      <div className="my-4 flex flex-wrap gap-3">
        {imagens.map((src) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(src)}
            className="group relative overflow-hidden rounded-lg border border-forest-200 bg-forest-100 shadow-sm transition hover:border-gold-400 dark:border-forest-700 dark:bg-forest-800"
          >
            <img
              src={src}
              alt="Imagem clínica da questão"
              className="max-h-72 w-auto object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
              <ZoomIn className="h-6 w-6 text-white" />
            </span>
          </button>
        ))}
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-4xl bg-black/95 p-2 sm:p-4">
          <DialogTitle className="sr-only">Imagem ampliada</DialogTitle>
          {open && (
            <img
              src={open}
              alt="Imagem clínica ampliada"
              className="max-h-[85vh] w-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
