"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      gsap.to(ring, { width: 56, height: 56, opacity: 0.8, duration: 0.3, ease: "power2.out" });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const handleMouseLeave = () => {
      gsap.to(ring, { width: 36, height: 36, opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Use event delegation instead of MutationObserver — single listener on body
    const onPointerOver = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, [data-cursor]");
      if (target) handleMouseEnter();
    };

    const onPointerOut = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, [data-cursor]");
      if (target) handleMouseLeave();
    };

    document.body.addEventListener("pointerover", onPointerOver);
    document.body.addEventListener("pointerout", onPointerOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("pointerover", onPointerOver);
      document.body.removeEventListener("pointerout", onPointerOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
