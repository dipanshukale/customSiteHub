import { useEffect, useState } from "react";

export default function LuxuryCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className="pointer-events-none fixed z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 mix-blend-difference transition-transform duration-150"
    />
  );
}
