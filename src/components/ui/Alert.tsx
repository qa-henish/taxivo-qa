import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Alert({
  variant = "success",
  children,
  className,
}: {
  variant?: "success" | "error";
  children: React.ReactNode;
  className?: string;
}) {
  const Icon = variant === "success" ? CheckCircle2 : AlertCircle;

  return (
    <div
      role="status"
      className={cn(
        "flex items-start gap-3 rounded-xl border p-4 text-sm",
        variant === "success"
          ? "border-accent-500/20 bg-accent-50 text-accent-600"
          : "border-red-200 bg-red-50 text-red-700",
        className
      )}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <div>{children}</div>
    </div>
  );
}
