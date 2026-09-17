import { cn } from "@/lib/utils";

export function Section({ children, className, id, variant = "default" }) {
  const baseClasses = "relative px-5 py-12 sm:px-8 lg:px-10 lg:py-16";
  
  const variants = {
    default: "",
    glass: "glass-card",
    elevated: "bg-surface-elevated"
  };

  return (
    <section className={cn(baseClasses, variants[variant], className)}>
      <div
        id={id}
        className="mx-auto max-w-[1200px] scroll-mt-[86px] sm:scroll-mt-[94px]"
      >
        {children}
      </div>
    </section>
  );
}