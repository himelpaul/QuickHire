import { cn } from "@/lib/utils";

export default function Spinner({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block w-8 h-8 border-4 border-brand/30 border-t-brand rounded-full animate-spin",
        className,
      )}
      role="status"
      aria-label="Loading"
    />
  );
}
