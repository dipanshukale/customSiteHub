import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function EyeBot() {
  const pupilRef = useRef<HTMLDivElement>(null);
  const [blink, setBlink] = useState(false);

  /* ---------- CURSOR FOLLOW ---------- */
  useEffect(() => {
    const moveEye = (e: MouseEvent) => {
      if (!pupilRef.current) return;

      const rect = pupilRef.current.parentElement!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
      const x = Math.cos(angle) * 7;
      const y = Math.sin(angle) * 7;

      pupilRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", moveEye);
    return () => window.removeEventListener("mousemove", moveEye);
  }, []);

  /* ---------- AUTO BLINK ---------- */
  useEffect(() => {
    const i = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 160);
    }, 4200);
    return () => clearInterval(i);
  }, []);

  /* ---------- CLICK BLINK ---------- */
  useEffect(() => {
    const click = () => {
      setBlink(true);
      setTimeout(() => setBlink(false), 180);
    };
    window.addEventListener("click", click);
    return () => window.removeEventListener("click", click);
  }, []);

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* GLASS SHELL */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/15 shadow-[0_40px_120px_rgba(0,0,0,0.7)]" />

      {/* SOFT AURA */}
      <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl opacity-30" />

      {/* EYELID BLINK */}
      <motion.div
        animate={{ scaleY: blink ? 0.12 : 1 }}
        transition={{ duration: 0.14, ease: "easeInOut" }}
        className="relative w-20 h-20 rounded-full bg-[#f8f8f8] overflow-hidden flex items-center justify-center shadow-inner"
      >
        {/* SCLERA SHADING */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-[#eaeaea]" />

        {/* IRIS */}
        <div className="relative w-10 h-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,#666,#111)] flex items-center justify-center">
          
          {/* IRIS TEXTURE */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.5))]" />

          {/* PUPIL */}
          <div
            ref={pupilRef}
            className="relative w-4 h-4 rounded-full bg-black transition-transform duration-75"
          >
            {/* SPECULAR HIGHLIGHT */}
            <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-white/80" />
          </div>
        </div>

        {/* EYE SHADOW */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_18px_rgba(0,0,0,0.25)]" />
      </motion.div>
    </div>
  );
}
