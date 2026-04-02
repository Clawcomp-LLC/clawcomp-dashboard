'use client';

import { useEffect, useState } from 'react';

const TARGET = new Date('2026-06-15T09:00:00-04:00').getTime();

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function tick() {
      const now = Date.now();
      const diff = Math.max(0, TARGET - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 min-w-[90px]">
          <span className="text-4xl font-bold text-cyan-400 tabular-nums">{pad(value)}</span>
          <span className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{label}</span>
        </div>
      ))}
    </div>
  );
}
