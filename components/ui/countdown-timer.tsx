import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

// Change this date to your target countdown date
const COUNTDOWN_FROM = "2025-08-21T16:00:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function ShiftingCountdown() {
  return (
    <div className="flex flex-row w-full max-w-5xl items-center bg-transparent mx-auto gap-2 md:gap-4 lg:gap-6">
      <CountdownItem unit="Day" label="Days" />
      <CountdownItem unit="Hour" label="Hours" />
      <CountdownItem unit="Minute" label="Minutes" />
      <CountdownItem unit="Second" label="Seconds" />
    </div>
  );
}

function CountdownItem({ unit, label }: { unit: string; label: string }) {
  const { ref, time } = useTimer(unit);
  // For seconds, ensure two digits (00–59)
  const display = unit === "Second" ? String(time).padStart(2, '0') : time;

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-1 px-1 md:px-2 lg:px-3 py-3 md:py-6 md:gap-2">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-base xs:text-2xl md:text-5xl lg:text-7xl font-mono font-semibold dark:text-white text-white transition-colors duration-500"
        >
          {display}
        </span>
      </div>
      <span className="text-xs xs:text-sm font-light dark:text-gray-400 text-gray-500 md:text-base lg:text-lg transition-colors duration-500">
        {label}
      </span>
      <div className="h-px w-full dark:bg-gray-700 bg-gray-300 mt-4 transition-colors duration-500"></div>
    </div>
  );
}

function useTimer(unit: string) {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    handleCountdown();
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = end.getTime() - now.getTime();

    let newTime = 0;
    switch (unit) {
      case "Day":
        newTime = Math.max(0, Math.floor(distance / DAY));
        break;
      case "Hour":
        newTime = Math.max(0, Math.floor((distance % DAY) / HOUR));
        break;
      case "Minute":
        newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE));
        break;
      default:
        newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
    }

    if (newTime !== timeRef.current) {
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
}
