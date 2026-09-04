import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  hover?: boolean;
  children: React.ReactNode;
}

export function Card({ className, hover = false, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-slate-200 shadow-sm",
        hover && "transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
