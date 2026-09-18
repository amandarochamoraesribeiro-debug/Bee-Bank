"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { QuestionSolver } from "@/components/questions/question-solver";

function ResolverContent() {
  const searchParams = useSearchParams();
  return <QuestionSolver queryString={searchParams.toString()} />;
}

export default function ResolverPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[60vh] items-center justify-center gap-2 text-slate-500">
          <Loader2 className="h-5 w-5 animate-spin" /> Carregando...
        </div>
      }
    >
      <ResolverContent />
    </Suspense>
  );
}
