"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollReveal({
  children,
  className = "",
  style = {},
  delay = "none",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: "none" | "100" | "200" | "300" | "400" | "500";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${delay !== "none" ? `animation-delay-${delay}` : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
