import { useEffect, useRef } from "react";

const Hero = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current && (window as any).VANTA) {
      vantaEffect.current = (window as any).VANTA.NET({
        el: vantaRef.current,
      
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
      
        // Desktop tuning
        scale: 1.25,
        size: 1.35,
      
        // 📱 Mobile tuning (IMPORTANT)
        scaleMobile: 0.75,
        sizeMobile: 0.75,
      
        // Luxury palette
        color: 0xd6d6d6,
        color2: 0x9b9b9b,
        backgroundColor: 0x000000,
      
        speed: 0.22,
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-0" />
      <div className="absolute inset-0 bg-radial-gradient z-0" />

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-6 text-center">

        {/* Micro identity */}
        <span className="mb-10 text-[11px] tracking-[0.45em] uppercase text-white/50">
          Digital Development Studio
        </span>

        {/* Brand */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tight leading-tight">
          Custom<span className="text-white/40">Site</span>Hub
        </h1>

        {/* Elegant divider */}
        <div className="my-12 w-28 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Statement */}
        <p className="max-w-xl text-sm sm:text-base text-white/60 leading-relaxed">
          We build refined digital products for developers and modern businesses.
          Precision, performance, and long-term clarity.
        </p>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <a
            href="#work"
            className="px-10 py-4 rounded-full bg-white text-black text-sm font-medium transition hover:bg-white/90"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full border border-white/25 text-sm text-white/80 transition hover:bg-white/10"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.35em]">
        SCROLL
        <div className="mx-auto mt-2 w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
