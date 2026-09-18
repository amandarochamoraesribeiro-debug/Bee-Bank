import type { QuestionStatus } from "./types";

export const STATUS_OPTIONS: { key: QuestionStatus; label: string; countKey: string }[] = [
  { key: "nao_resolvidas", label: "Não resolvidas", countKey: "naoResolvidas" },
  { key: "acertadas", label: "Acertadas", countKey: "acertadas" },
  { key: "erradas", label: "Erradas", countKey: "erradas" },
  { key: "favoritas", label: "Favoritas", countKey: "favoritas" },
  { key: "caderno_erros", label: "Caderno de Erros", countKey: "cadernoErros" },
];
