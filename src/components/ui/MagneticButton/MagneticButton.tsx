"use client";

import { ReactNode } from "react";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticButton({ children, strength = 0.3, className }: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagneticEffect<HTMLDivElement>({ strength });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ display: "inline-flex", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
