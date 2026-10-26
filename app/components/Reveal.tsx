"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type RevealVariant = "up" | "zoom" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  /** Décalage en ms (effet cascade) */
  delay?: number;
  /** Direction d'entrée */
  variant?: RevealVariant;
  className?: string;
};

const HIDDEN: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-8",
  zoom: "opacity-0 scale-[0.94]",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
};

export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : HIDDEN[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}
