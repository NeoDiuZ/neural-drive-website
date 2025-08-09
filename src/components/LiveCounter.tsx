"use client";

import { useEffect, useState } from "react";

export default function LiveCounter() {
  const [count, setCount] = useState(23);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + (Math.random() < 0.05 ? 1 : 0));
    }, 8000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="text-xs text-slate-600">
      <span className="font-semibold">{count}</span> families currently using Neural Drive • 3 joined this week
    </div>
  );
}
