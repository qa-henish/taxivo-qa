import { cn } from "@/lib/utils";

export function Label({ children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <span className="mb-2 block text-sm font-semibold text-ink-800 dark:text-ink-100">
      {children}
    </span>
  );
}

const fieldClasses =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-200 transition-colors duration-200 dark:border-ink-700 dark:bg-ink-800 dark:text-white dark:placeholder:text-ink-500";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldClasses, props.className)} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} rows={props.rows ?? 5} className={cn(fieldClasses, "resize-none", props.className)} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(fieldClasses, props.className)} />;
}

export function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
