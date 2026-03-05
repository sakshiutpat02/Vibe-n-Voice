"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  motionEnabled?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({ children, className, motionEnabled = false, ...props }: ButtonProps) => {
  return (
    <button className={cn(className)} data-motion-enabled={motionEnabled ? "true" : "false"} {...props}>
      {children}
    </button>
  );
};
