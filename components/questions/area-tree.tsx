"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { CheckboxRow } from "./checkbox-row";
import { cn } from "@/lib/utils";
import type { FiltersResponse } from "@/lib/types";

export function AreaTree({
  areas,
  selectedAreas,
  selectedTemas,
  selectedSubtemas,
  onToggleArea,
  onToggleTema,
  onToggleSubtema,
}: {
  areas: FiltersResponse["areas"];
  selectedAreas: Set<string>;
  selectedTemas: Set<string>;
  selectedSubtemas: Set<string>;
  onToggleArea: (area: string, checked: boolean) => void;
  onToggleTema: (tema: string, checked: boolean) => void;
  onToggleSubtema: (subtema: string, checked: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {areas.map((area) => (
        <AreaNode
          key={area.grandeArea}
          area={area}
          selectedAreas={selectedAreas}
          selectedTemas={selectedTemas}
          selectedSubtemas={selectedSubtemas}
          onToggleArea={onToggleArea}
          onToggleTema={onToggleTema}
          onToggleSubtema={onToggleSubtema}
        />
      ))}
    </div>
  );
}

function AreaNode({
  area,
  selectedAreas,
  selectedTemas,
  selectedSubtemas,
  onToggleArea,
  onToggleTema,
  onToggleSubtema,
}: {
  area: FiltersResponse["areas"][number];
  selectedAreas: Set<string>;
  selectedTemas: Set<string>;
  selectedSubtemas: Set<string>;
  onToggleArea: (area: string, checked: boolean) => void;
  onToggleTema: (tema: string, checked: boolean) => void;
  onToggleSubtema: (subtema: string, checked: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          aria-label={open ? "Recolher" : "Expandir"}
        >
          <ChevronRight className={cn("h-4 w-4 transition-transform", open && "rotate-90")} />
        </button>
        <CheckboxRow
          id={`area-${area.grandeArea}`}
          label={area.grandeArea}
          checked={selectedAreas.has(area.grandeArea)}
          onChange={(checked) => onToggleArea(area.grandeArea, checked)}
          className="flex-1 font-medium"
        />
      </div>
      {open && (
        <div className="ml-6 mt-0.5 flex flex-col gap-0.5 border-l border-slate-200 pl-2 dark:border-slate-800">
          {area.temas.map((tema) => (
            <TemaNode
              key={tema.tema}
              tema={tema}
              selectedTemas={selectedTemas}
              selectedSubtemas={selectedSubtemas}
              onToggleTema={onToggleTema}
              onToggleSubtema={onToggleSubtema}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TemaNode({
  tema,
  selectedTemas,
  selectedSubtemas,
  onToggleTema,
  onToggleSubtema,
}: {
  tema: FiltersResponse["areas"][number]["temas"][number];
  selectedTemas: Set<string>;
  selectedSubtemas: Set<string>;
  onToggleTema: (tema: string, checked: boolean) => void;
  onToggleSubtema: (subtema: string, checked: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const hasSubtemas = tema.subtemas.length > 1 || (tema.subtemas.length === 1 && tema.subtemas[0] !== tema.tema);

  return (
    <div>
      <div className="flex items-center gap-1">
        {hasSubtemas ? (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            aria-label={open ? "Recolher" : "Expandir"}
          >
            <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-90")} />
          </button>
        ) : (
          <span className="w-4" />
        )}
        <CheckboxRow
          id={`tema-${tema.tema}`}
          label={tema.tema}
          checked={selectedTemas.has(tema.tema)}
          onChange={(checked) => onToggleTema(tema.tema, checked)}
          className="flex-1 text-[13px]"
        />
      </div>
      {open && hasSubtemas && (
        <div className="ml-5 mt-0.5 flex flex-col gap-0.5 border-l border-slate-200 pl-2 dark:border-slate-800">
          {tema.subtemas.map((subtema) => (
            <CheckboxRow
              key={subtema}
              id={`subtema-${subtema}`}
              label={subtema}
              checked={selectedSubtemas.has(subtema)}
              onChange={(checked) => onToggleSubtema(subtema, checked)}
              className="text-xs"
            />
          ))}
        </div>
      )}
    </div>
  );
}
