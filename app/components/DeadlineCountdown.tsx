'use client';

import { useEffect, useState } from 'react';

const DEADLINE = new Date('2026-05-08T23:59:59-04:00').getTime();

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function DeadlineCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function tick() {
      const now = Date.now();
      const diff = Math.max(0, DEADLINE - now);
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

  if (!mounted) {
    return null;
  }

  return (
    <div className="text-center text-sm text-gray-400 mt-2">
      <span className="font-semibold text-cyan-400">Deadline: May 8th</span>
      <span className="mx-2">·</span>
      <span className="tabular-nums">
        {timeLeft.days}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
      </span>
    </div>
  );
}
