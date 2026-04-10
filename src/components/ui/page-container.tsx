import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

export function PageContainer({ 
  children, 
  className,
  isFullWidth = false 
}: PageContainerProps) {
  return (
    <div className={cn(
      "pb-16 md:pb-0 min-h-screen",
      !isFullWidth && "mx-auto max-w-2xl px-4 md:px-8 py-6",
      className
    )}>
      {children}
    </div>
  );
}
