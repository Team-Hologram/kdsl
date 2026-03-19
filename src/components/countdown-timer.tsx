"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-04-10T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mt-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-glass p-3 sm:p-6 flex flex-col items-center justify-center min-w-[68px] sm:min-w-[100px] rounded-2xl">
            <div className="text-3xl sm:text-5xl font-bold text-gradient opacity-0">00</div>
            <div className="text-xs sm:text-sm text-gray mt-2 uppercase tracking-wide opacity-0">Unit</div>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mt-10 animate-reveal-up" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="bg-glass p-3 sm:p-5 md:p-6 flex flex-col items-center justify-center min-w-[68px] sm:min-w-[100px] md:min-w-[120px] rounded-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient tabular-nums">
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm text-[#94A3B8] mt-2 uppercase tracking-widest font-medium z-10">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
