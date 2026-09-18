"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export function CheckboxRow({
  id,
  label,
  checked,
  onChange,
  count,
  className,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  count?: number;
  className?: string;
}) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer items-center justify-between gap-2 rounded px-1.5 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-800/60",
        className
      )}
    >
      <span className="flex items-center gap-2 min-w-0">
        <Checkbox id={id} checked={checked} onCheckedChange={(v) => onChange(Boolean(v))} />
        <span className="truncate text-slate-700 dark:text-slate-300">{label}</span>
      </span>
      {count !== undefined && (
        <span className="shrink-0 text-xs tabular-nums text-slate-400">{count}</span>
      )}
    </label>
  );
}
