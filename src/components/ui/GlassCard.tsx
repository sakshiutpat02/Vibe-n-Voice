import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type GlassCardProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export const GlassCard = <T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: GlassCardProps<T>) => {
  const Component = as ?? "div";

  return (
    <Component className={cn("glass-card", className)} {...props}>
      {children}
    </Component>
  );
};
