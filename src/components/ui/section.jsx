import { cn } from "@/lib/utils";

export const Section = ({ children, className, id, variant = "default" }) => {
  const baseClasses = "relative scroll-mt-28 py-20 px-5 sm:px-8 lg:py-28 lg:px-10";
  
  const variants = {
    default: "",
    glass: "glass-card",
    elevated: "bg-surface-elevated"
  };

  return (
    <section 
      id={id}
      className={cn(baseClasses, variants[variant], className)}
    >
      <div className="max-w-[1200px] mx-auto">
        {children}
      </div>
    </section>
  );
};