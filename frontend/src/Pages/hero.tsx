import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current && (window as any).VANTA) {
      vantaEffect.current = (window as any).VANTA.RINGS({
        el: vantaRef.current,

        // Interaction
        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        // Scale & motion (luxury = slow & calm)
        scale: 1.15,
        scaleMobile: 0.85,
        speed: 0.08,

        // Rings geometry
        quantity: 7,
        spacing: 32,
        size: 1.25,

        // Premium color tuning (platinum / champagne)
        color: 0xd6d6d6,        // soft platinum
        color2: 0x8f8f8f,       // subtle highlights
        backgroundColor: 0x000000,

        // Rendering quality
        backgroundAlpha: 1.0,
      });
    }

    return () => {
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Depth overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/95 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)] z-0" />

      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-6 text-center">

        <span className="mb-8 text-[11px] sm:text-[12px] tracking-[0.45em] uppercase text-white/50">
          Digital Development Studio
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extralight tracking-tight leading-tight">
          Custom
          <span className="text-white/40">Site</span>
          <span className="text-white/70">Hub</span>
        </h1>

        <div className="my-10 w-28 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[fadeSlide_1s_ease-out_forwards]" />

        <p className="max-w-xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
          We craft refined digital products for founders and modern businesses —
          where performance, clarity, and trust define the experience.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/work")}
            className="px-10 py-4 rounded-full bg-white text-black text-sm sm:text-base font-medium transition hover:bg-white/90 active:scale-[0.98]"
          >
            View Work
          </button>

          <button
            onClick={() => navigate("/#contact")}
            className="px-10 py-4 rounded-full border border-white/25 text-sm sm:text-base text-white/80 transition hover:bg-white/10 active:scale-[0.98]"
          >
            Start a Project
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.35em] sm:text-[11px]">
        SCROLL
        <div className="mx-auto mt-2 w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
