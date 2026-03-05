import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
};

export const GradientText = ({ children, className }: GradientTextProps) => {
  return <span className={cn("gradient-text", className)}>{children}</span>;
};
