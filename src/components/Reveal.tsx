"use client";

import { useEffect, useRef } from "react";

type Props = React.PropsWithChildren<{ as?: React.ElementType; className?: string }>;

export default function Reveal({ children, as: Component = "div", className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null as unknown as HTMLElement | null);
  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && el.classList.add("visible"));
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Component ref={ref} className={`reveal ${className}`.trim()}>{children}</Component>;
}
