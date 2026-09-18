"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpenCheck, Filter, Loader2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckboxRow } from "@/components/questions/checkbox-row";
import { AreaTree } from "@/components/questions/area-tree";
import { STATUS_OPTIONS } from "@/lib/status-labels";
import { getUserId } from "@/lib/user";
import type { FiltersResponse, QuestionStatus } from "@/lib/types";

const emptyFilters: FiltersResponse = {
  instituicoes: [],
  anos: [],
  areas: [],
  counts: { total: 0, naoResolvidas: 0, acertadas: 0, erradas: 0, favoritas: 0, cadernoErros: 0 },
};

export default function HomePage() {
  const router = useRouter();
  const [userId] = useState(() => getUserId());
  const [data, setData] = useState<FiltersResponse>(emptyFilters);
  const [loading, setLoading] = useState(true);

  const [instituicoes, setInstituicoes] = useState<Set<string>>(new Set());
  const [anos, setAnos] = useState<Set<number>>(new Set());
  const [areas, setAreas] = useState<Set<string>>(new Set());
  const [temas, setTemas] = useState<Set<string>>(new Set());
  const [subtemas, setSubtemas] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<Set<QuestionStatus>>(new Set());

  const query = useMemo(() => {
    const params = new URLSearchParams();
    if (userId) params.set("userId", userId);
    if (instituicoes.size) params.set("instituicao", Array.from(instituicoes).join(","));
    if (anos.size) params.set("ano", Array.from(anos).join(","));
    if (areas.size) params.set("grandeArea", Array.from(areas).join(","));
    if (temas.size) params.set("tema", Array.from(temas).join(","));
    if (subtemas.size) params.set("subtema", Array.from(subtemas).join(","));
    return params.toString();
  }, [userId, instituicoes, anos, areas, temas, subtemas]);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    // Data fetch triggered by filter changes: loading flag is derived from the in-flight request.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    fetch(`/api/filters?${query}`)
      .then((r) => r.json())
      .then((json: FiltersResponse) => {
        if (!cancelled) setData(json);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [query, userId]);

  function toggleSet<T>(setState: React.Dispatch<React.SetStateAction<Set<T>>>, value: T, checked: boolean) {
    setState((prev) => {
      const next = new Set(prev);
      if (checked) next.add(value);
      else next.delete(value);
      return next;
    });
  }

  function limparFiltros() {
    setInstituicoes(new Set());
    setAnos(new Set());
    setAreas(new Set());
    setTemas(new Set());
    setSubtemas(new Set());
    setStatus(new Set());
  }

  const filtrosAtivos =
    instituicoes.size + anos.size + areas.size + temas.size + subtemas.size + status.size;

  function iniciarCaderno() {
    const params = new URLSearchParams(query);
    if (status.size) params.set("status", Array.from(status).join(","));
    router.push(`/resolver?${params.toString()}`);
  }

  const questoesSelecionadas = status.size
    ? Array.from(status).reduce((acc, s) => {
        const opt = STATUS_OPTIONS.find((o) => o.key === s);
        if (!opt) return acc;
        return acc + (data.counts[opt.countKey as keyof typeof data.counts] as number);
      }, 0)
    : data.counts.total;

  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row">
      <aside className="w-full shrink-0 lg:w-80">
        <div className="rounded-xl border border-forest-200 bg-white shadow-sm dark:border-forest-800 dark:bg-forest-900">
          <div className="flex items-center justify-between border-b border-forest-200 px-4 py-3 dark:border-forest-800">
            <div className="flex items-center gap-2 font-semibold text-forest-900 dark:text-forest-100">
              <Filter className="h-4 w-4 text-gold-600" />
              Filtros
            </div>
            {filtrosAtivos > 0 && (
              <button
                onClick={limparFiltros}
                className="flex items-center gap-1 text-xs font-medium text-forest-500 hover:text-gold-700 dark:hover:text-gold-400"
              >
                <RotateCcw className="h-3 w-3" /> Limpar
              </button>
            )}
          </div>

          <div className="max-h-[calc(100vh-220px)] overflow-y-auto p-4">
            <FilterSection title="Instituição / Prova">
              <div className="flex flex-col gap-0.5">
                {data.instituicoes.map((inst) => (
                  <CheckboxRow
                    key={inst}
                    id={`inst-${inst}`}
                    label={inst}
                    checked={instituicoes.has(inst)}
                    onChange={(c) => toggleSet(setInstituicoes, inst, c)}
                  />
                ))}
                {!data.instituicoes.length && <EmptyHint />}
              </div>
            </FilterSection>

            <Separator className="my-4" />

            <FilterSection title="Ano">
              <div className="flex flex-col gap-0.5">
                {data.anos.map((ano) => (
                  <CheckboxRow
                    key={ano}
                    id={`ano-${ano}`}
                    label={String(ano)}
                    checked={anos.has(ano)}
                    onChange={(c) => toggleSet(setAnos, ano, c)}
                  />
                ))}
                {!data.anos.length && <EmptyHint />}
              </div>
            </FilterSection>

            <Separator className="my-4" />

            <FilterSection title="Grande Área / Tema / Subtema">
              <AreaTree
                areas={data.areas}
                selectedAreas={areas}
                selectedTemas={temas}
                selectedSubtemas={subtemas}
                onToggleArea={(a, c) => toggleSet(setAreas, a, c)}
                onToggleTema={(t, c) => toggleSet(setTemas, t, c)}
                onToggleSubtema={(s, c) => toggleSet(setSubtemas, s, c)}
              />
              {!data.areas.length && <EmptyHint />}
            </FilterSection>

            <Separator className="my-4" />

            <FilterSection title="Status">
              <div className="flex flex-col gap-0.5">
                {STATUS_OPTIONS.map((opt) => (
                  <CheckboxRow
                    key={opt.key}
                    id={`status-${opt.key}`}
                    label={opt.label}
                    checked={status.has(opt.key)}
                    onChange={(c) => toggleSet(setStatus, opt.key, c)}
                    count={data.counts[opt.countKey as keyof typeof data.counts] as number}
                  />
                ))}
              </div>
            </FilterSection>
          </div>
        </div>
      </aside>

      <section className="flex-1">
        <div className="rounded-xl border border-forest-200 bg-white p-6 shadow-sm dark:border-forest-800 dark:bg-forest-900">
          <div className="flex items-center gap-2 text-gold-700 dark:text-gold-400">
            <BookOpenCheck className="h-6 w-6" />
            <h1 className="text-xl font-bold">Banco de Questões — Residência Médica R1</h1>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-forest-600 dark:text-forest-400">
            Selecione os filtros ao lado (instituição, ano, grande área, tema, subtema e status) para
            montar seu caderno de estudo. As grandes áreas cobertas são Clínica Médica, Cirurgia Geral,
            Pediatria, Ginecologia e Obstetrícia e Medicina Preventiva e Social.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <StatCard label="Total no filtro" value={data.counts.total} />
            <StatCard label="Não resolvidas" value={data.counts.naoResolvidas} />
            <StatCard label="Acertadas" value={data.counts.acertadas} tone="success" />
            <StatCard label="Erradas" value={data.counts.erradas} tone="destructive" />
            <StatCard label="Favoritas" value={data.counts.favoritas} tone="warning" />
          </div>

          <div className="mt-8 flex flex-col items-start gap-3 rounded-lg bg-gold-50 p-5 dark:bg-gold-950/30 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-gold-900 dark:text-gold-300">
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Calculando questões...
                  </span>
                ) : (
                  `${questoesSelecionadas} questõe${questoesSelecionadas === 1 ? "" : "s"} encontrada${questoesSelecionadas === 1 ? "" : "s"}`
                )}
              </p>
              <p className="text-sm text-gold-700/80 dark:text-gold-400/80">
                {filtrosAtivos > 0
                  ? `${filtrosAtivos} filtro${filtrosAtivos === 1 ? "" : "s"} ativo${filtrosAtivos === 1 ? "" : "s"}`
                  : "Nenhum filtro selecionado — todas as questões serão incluídas."}
              </p>
            </div>
            <Button
              size="lg"
              disabled={questoesSelecionadas === 0}
              onClick={iniciarCaderno}
              className="w-full sm:w-auto"
            >
              Gerar Caderno / Iniciar Simulado
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-forest-500 dark:text-forest-400">
        {title}
      </h3>
      {children}
    </div>
  );
}

function EmptyHint() {
  return <p className="text-xs italic text-forest-400">Nenhuma opção disponível.</p>;
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone?: "success" | "destructive" | "warning";
}) {
  const toneClass =
    tone === "success"
      ? "text-emerald-600 dark:text-emerald-400"
      : tone === "destructive"
        ? "text-red-600 dark:text-red-400"
        : tone === "warning"
          ? "text-amber-600 dark:text-amber-400"
          : "text-forest-900 dark:text-forest-100";
  return (
    <div className="rounded-lg border border-forest-200 p-3 dark:border-forest-800">
      <p className="text-xs text-forest-500 dark:text-forest-400">{label}</p>
      <p className={`text-2xl font-bold tabular-nums ${toneClass}`}>{value}</p>
    </div>
  );
}
