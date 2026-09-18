"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  BookmarkX,
  BookmarkPlus,
  CheckCircle2,
  ChevronLeft,
  Heart,
  Keyboard,
  Loader2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ImageGallery } from "./image-gallery";
import { getUserId } from "@/lib/user";
import { cn } from "@/lib/utils";
import type { QuestionWithProgress } from "@/lib/types";

export function QuestionSolver({ queryString }: { queryString: string }) {
  const [userId] = useState(() => getUserId());
  const [questions, setQuestions] = useState<QuestionWithProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const startRef = useRef<number>(0);

  useEffect(() => {
    if (!userId) return;
    // Data fetch triggered by filter/user changes: loading flag mirrors the in-flight request.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    const params = new URLSearchParams(queryString);
    params.set("userId", userId);
    fetch(`/api/questions?${params.toString()}`)
      .then((r) => r.json())
      .then((json: { questions: QuestionWithProgress[] }) => {
        setQuestions(json.questions);
      })
      .finally(() => setLoading(false));
  }, [queryString, userId]);

  const current = questions[index];

  useEffect(() => {
    if (!current) return;
    // Reset local answer UI to match the question now in view (external navigation event).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelected(current.progresso.alternativaEscolhida);
    setRevealed(Boolean(current.progresso.alternativaEscolhida));
    startRef.current = Date.now();
  }, [current]);

  const updateCurrent = useCallback(
    (patch: Partial<QuestionWithProgress["progresso"]>) => {
      setQuestions((prev) =>
        prev.map((q, i) => (i === index ? { ...q, progresso: { ...q.progresso, ...patch } } : q))
      );
    },
    [index]
  );

  const responder = useCallback(
    async (letra: string) => {
      if (!current || submitting || current.progresso.respondida) return;
      setSubmitting(true);
      setSelected(letra);
      const tempoGastoSegundos = Math.round((Date.now() - startRef.current) / 1000);
      try {
        const res = await fetch("/api/answers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId,
            questionId: current.id,
            alternativaEscolhida: letra,
            tempoGastoSegundos,
          }),
        });
        const json = await res.json();
        const acertou = letra === current.gabaritoOficial;
        updateCurrent({
          respondida: true,
          alternativaEscolhida: letra,
          acertou,
          cadernoErros: acertou ? current.progresso.cadernoErros : true,
        });
        setRevealed(true);
        toast[acertou ? "success" : "error"](
          acertou ? "Resposta correta!" : `Resposta incorreta. Gabarito: ${json.gabaritoOficial}`
        );
      } finally {
        setSubmitting(false);
      }
    },
    [current, submitting, userId, updateCurrent]
  );

  const toggleFavorita = useCallback(async () => {
    if (!current) return;
    const next = !current.progresso.favorita;
    updateCurrent({ favorita: next });
    await fetch("/api/answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, questionId: current.id, favorita: next }),
    });
    toast.success(next ? "Adicionada aos favoritos" : "Removida dos favoritos");
  }, [current, userId, updateCurrent]);

  const toggleCaderno = useCallback(async () => {
    if (!current) return;
    const next = !current.progresso.cadernoErros;
    updateCurrent({ cadernoErros: next });
    await fetch("/api/answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, questionId: current.id, cadernoErros: next }),
    });
    toast.success(next ? "Adicionada ao caderno de erros" : "Removida do caderno de erros");
  }, [current, userId, updateCurrent]);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, questions.length - 1));
  }, [questions.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!current) return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      const letraIndex = "12345".indexOf(e.key);
      const letraByChar = "ABCDE".indexOf(e.key.toUpperCase());
      const idx = letraIndex !== -1 ? letraIndex : letraByChar;
      if (idx !== -1 && idx < current.alternativas.length && !current.progresso.respondida) {
        e.preventDefault();
        setSelected(current.alternativas[idx].letra);
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (!current.progresso.respondida) {
          if (selected) responder(selected);
        } else {
          goNext();
        }
        return;
      }
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key.toLowerCase() === "f") toggleFavorita();
      if (e.key.toLowerCase() === "r") toggleCaderno();
      if (e.key.toLowerCase() === "g" && current.progresso.respondida) setRevealed((v) => !v);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [current, selected, responder, goNext, goPrev, toggleFavorita, toggleCaderno]);

  const progressoPills = useMemo(
    () =>
      questions.map((q, i) => {
        let tone = "bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400";
        if (q.progresso.respondida) {
          tone = q.progresso.acertou
            ? "bg-emerald-500 text-white"
            : "bg-red-500 text-white";
        }
        if (i === index) tone += " ring-2 ring-teal-500 ring-offset-1";
        return (
          <button
            key={q.id}
            onClick={() => setIndex(i)}
            className={cn("h-7 w-7 shrink-0 rounded-full text-xs font-semibold transition", tone)}
            title={`Questão ${i + 1}`}
          >
            {i + 1}
          </button>
        );
      }),
    [questions, index]
  );

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center gap-2 text-slate-500">
        <Loader2 className="h-5 w-5 animate-spin" /> Montando seu caderno de questões...
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 py-24 text-center">
        <p className="text-lg font-semibold">Nenhuma questão encontrada para os filtros escolhidos.</p>
        <Button asChild>
          <Link href="/">Voltar para os filtros</Link>
        </Button>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-6 sm:px-6">
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="/">
            <ChevronLeft className="h-4 w-4" /> Filtros
          </Link>
        </Button>
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <Keyboard className="h-3.5 w-3.5" />
          <span>1-5 selecionar · Enter responder/avançar · ←/→ navegar · F favoritar · R caderno · G gabarito</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
        {progressoPills}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{current.instituicao}</Badge>
          <Badge variant="outline">{current.ano}</Badge>
          <Badge variant="area">{current.grandeArea}</Badge>
          <Badge variant="secondary">{current.tema}</Badge>
          <Badge variant="secondary">{current.subtema}</Badge>
          {current.anulada && <Badge variant="warning">Anulada</Badge>}
          <span className="ml-auto text-sm font-medium text-slate-400">
            Questão {index + 1} de {questions.length}
          </span>
        </div>

        <div className="prose prose-slate mt-4 max-w-none text-[15px] leading-relaxed dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{current.enunciado}</ReactMarkdown>
        </div>

        <ImageGallery imagens={current.imagens} />

        <div className="mt-4 flex flex-col gap-2">
          {current.alternativas.map((alt) => {
            const isSelected = selected === alt.letra;
            const isCorrect = alt.letra === current.gabaritoOficial;
            const showState = current.progresso.respondida;
            return (
              <button
                key={alt.letra}
                type="button"
                disabled={current.progresso.respondida || submitting}
                onClick={() => setSelected(alt.letra)}
                className={cn(
                  "flex items-start gap-3 rounded-lg border p-3 text-left text-sm transition disabled:cursor-default",
                  "border-slate-200 dark:border-slate-700",
                  isSelected && !showState && "border-teal-500 bg-teal-50 dark:bg-teal-950/30",
                  showState && isCorrect && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
                  showState && isSelected && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-950/30",
                  !showState && "hover:border-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                )}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    isSelected && !showState && "border-teal-500 bg-teal-500 text-white",
                    showState && isCorrect && "border-emerald-500 bg-emerald-500 text-white",
                    showState && isSelected && !isCorrect && "border-red-500 bg-red-500 text-white",
                    !isSelected && !(showState && isCorrect) && "border-slate-300 text-slate-500 dark:border-slate-600"
                  )}
                >
                  {alt.letra}
                </span>
                <span className="flex-1 text-slate-700 dark:text-slate-300">{alt.texto}</span>
                {showState && isCorrect && <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />}
                {showState && isSelected && !isCorrect && <XCircle className="h-5 w-5 shrink-0 text-red-600" />}
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {!current.progresso.respondida ? (
            <Button disabled={!selected || submitting} onClick={() => selected && responder(selected)}>
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Responder
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setRevealed((v) => !v)}>
              {revealed ? "Ocultar" : "Ver"} Gabarito &amp; Comentário
            </Button>
          )}

          <Button variant={current.progresso.favorita ? "secondary" : "ghost"} onClick={toggleFavorita}>
            {current.progresso.favorita ? <Heart className="h-4 w-4 fill-current text-rose-500" /> : <Heart className="h-4 w-4" />}
            Favoritar
          </Button>

          <Button variant={current.progresso.cadernoErros ? "secondary" : "ghost"} onClick={toggleCaderno}>
            {current.progresso.cadernoErros ? <BookmarkX className="h-4 w-4" /> : <BookmarkPlus className="h-4 w-4" />}
            {current.progresso.cadernoErros ? "Remover do caderno" : "Caderno de erros"}
          </Button>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={goPrev} disabled={index === 0}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={goNext} disabled={index === questions.length - 1}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {current.progresso.respondida && revealed && (
          <Accordion type="single" collapsible defaultValue="gabarito" className="mt-5">
            <AccordionItem value="gabarito" className="rounded-lg border border-slate-200 px-3 dark:border-slate-800">
              <AccordionTrigger className="text-sm font-semibold text-teal-700 dark:text-teal-400">
                Gabarito oficial: {current.gabaritoOficial} — Comentário detalhado
              </AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-slate max-w-none text-sm leading-relaxed dark:prose-invert">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{current.comentarioGabarito}</ReactMarkdown>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </div>
  );
}
