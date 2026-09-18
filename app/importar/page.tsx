"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FileJson, Loader2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GRANDES_AREAS } from "@/db/schema";

const TEMPLATE = {
  questions: [
    {
      instituicao: "ENARE",
      ano: 2024,
      grandeArea: "Clínica Médica",
      tema: "Cardiologia",
      subtema: "Síndrome coronariana aguda",
      enunciado: "Enunciado da questão (aceita **Markdown**)...",
      imagens: ["/images/questions/exemplo.png"],
      tipo: "multipla_escolha",
      alternativas: [
        { letra: "A", texto: "Alternativa A" },
        { letra: "B", texto: "Alternativa B" },
        { letra: "C", texto: "Alternativa C" },
        { letra: "D", texto: "Alternativa D" },
      ],
      gabaritoOficial: "A",
      comentarioGabarito: "Explicação de por que A está correta e as demais erradas...",
      anulada: false,
    },
  ],
};

export default function ImportarPage() {
  const [text, setText] = useState(JSON.stringify(TEMPLATE, null, 2));
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function importar() {
    setLoading(true);
    setResult(null);
    try {
      const parsed = JSON.parse(text);
      const res = await fetch("/api/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });
      const json = await res.json();
      if (!res.ok) {
        setResult(`Erro: ${JSON.stringify(json.error, null, 2)}`);
        toast.error("Falha na importação. Verifique o JSON.");
      } else {
        setResult(`${json.imported} questão(ões) importada(s) com sucesso.`);
        toast.success(`${json.imported} questão(ões) importada(s)!`);
      }
    } catch (e) {
      setResult(`JSON inválido: ${(e as Error).message}`);
      toast.error("JSON inválido.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-8 sm:px-6">
      <div>
        <h1 className="flex items-center gap-2 text-xl font-bold text-teal-700 dark:text-teal-400">
          <FileJson className="h-6 w-6" /> Gerenciador de Questões / Importador
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Cole um JSON estruturado no formato abaixo (campo <code>questions</code> como array) e clique em
          Importar. As imagens referenciadas devem ser colocadas previamente em{" "}
          <code>public/images/questions/</code> e referenciadas pelo caminho público, ex.{" "}
          <code>/images/questions/arquivo.png</code>.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          <strong>Grandes áreas aceitas:</strong> {GRANDES_AREAS.join(", ")}.
        </p>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        spellCheck={false}
        className="h-[420px] w-full rounded-lg border border-slate-200 bg-white p-3 font-mono text-xs leading-relaxed shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-900"
      />

      <div className="flex items-center gap-3">
        <Button onClick={importar} disabled={loading}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <UploadCloud className="h-4 w-4" />}
          Importar Questões
        </Button>
        <Button variant="outline" onClick={() => setText(JSON.stringify(TEMPLATE, null, 2))}>
          Restaurar exemplo
        </Button>
      </div>

      {result && (
        <pre className="whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs dark:border-slate-800 dark:bg-slate-900">
          {result}
        </pre>
      )}
    </div>
  );
}
