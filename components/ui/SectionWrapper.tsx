import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("section-padding relative overflow-hidden", className)}
    >
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
