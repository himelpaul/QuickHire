import { cn } from "@/lib/utils";

type BadgeVariant = "brand" | "green" | "yellow" | "red" | "gray" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  brand: "bg-brand/10 text-brand",
  green: "bg-emerald-100 text-emerald-700",
  yellow: "bg-yellow-100 text-yellow-700",
  red: "bg-red-100 text-red-700",
  gray: "bg-neutral-100 text-neutral-600",
  outline: "border border-neutral-300 text-neutral-600 bg-transparent",
};

export default function Badge({
  children,
  variant = "gray",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
