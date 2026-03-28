"use client";

import { useRef, useCallback } from "react";

interface MagneticOptions {
  strength?: number;
}

export function useMagneticEffect<T extends HTMLElement>({ strength = 0.35 }: MagneticOptions = {}) {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, [strength]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
    el.style.transform = "translate(0px, 0px)";
    // Reset transition after animation
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
