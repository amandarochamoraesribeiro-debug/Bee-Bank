import type { Alternativa } from "@/db/schema";

export type QuestionStatus = "nao_resolvidas" | "acertadas" | "erradas" | "favoritas" | "caderno_erros";

export type QuestionWithProgress = {
  id: string;
  instituicao: string;
  ano: number;
  prova: string | null;
  grandeArea: string;
  tema: string;
  subtema: string;
  enunciado: string;
  imagens: string[];
  tipo: string;
  alternativas: Alternativa[];
  gabaritoOficial: string;
  comentarioGabarito: string;
  anulada: boolean;
  progresso: {
    respondida: boolean;
    alternativaEscolhida: string | null;
    acertou: boolean | null;
    favorita: boolean;
    cadernoErros: boolean;
  };
};

export type FiltersResponse = {
  instituicoes: string[];
  anos: number[];
  areas: {
    grandeArea: string;
    temas: {
      tema: string;
      subtemas: string[];
    }[];
  }[];
  counts: {
    total: number;
    naoResolvidas: number;
    acertadas: number;
    erradas: number;
    favoritas: number;
    cadernoErros: number;
  };
};

export type QuestionFilters = {
  instituicao?: string[];
  ano?: number[];
  grandeArea?: string[];
  tema?: string[];
  subtema?: string[];
  status?: QuestionStatus[];
};
