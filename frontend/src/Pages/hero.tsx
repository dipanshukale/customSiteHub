import { useEffect, useRef } from "react";

const Hero = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Ensure VANTA is loaded
    if (!vantaEffect.current && vantaRef.current && (window as any).VANTA) {
      vantaEffect.current = (window as any).VANTA.RINGS({
        el: vantaRef.current,

        // Controls
        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        // Desktop tuning
        scale: 1.25,
        size: 1.35,

        // Mobile tuning
        scaleMobile: 0.9,
        sizeMobile: 1.1,

        // Ultra-luxury color palette
        color: 0xe5e5e5,      // primary rings (soft platinum)
        color2: 0x9b9b9b,     // highlights
        backgroundColor: 0x000000, // deep black

        speed: 0.1,            // premium slow movement
        quantity: 8,           // rings count
        spacing: 30,           // ring spacing
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
      {/* Depth overlays for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90 z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-white/5 to-black/0 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-6 text-center">

        {/* Micro tagline */}
        <span className="mb-8 text-[11px] sm:text-[12px] tracking-[0.45em] uppercase text-white/50">
          Digital Development Studio
        </span>

        {/* Brand / Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extralight tracking-tight leading-tight">
          Custom<span className="text-white/40">Site</span>Hub
        </h1>

        {/* Divider */}
        <div className="my-10 w-28 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto" />

        {/* Hero statement */}
        <p className="max-w-xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
          We craft refined digital experiences for developers and modern businesses. Precision, clarity, and performance, designed for a premium audience.       </p>

        {/* CTAs */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <a
            href="#work"
            className="px-10 py-4 rounded-full bg-white text-black text-sm sm:text-base font-medium transition hover:bg-white/90"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full border border-white/25 text-sm sm:text-base text-white/80 transition hover:bg-white/10"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.35em] sm:text-[11px]">
        SCROLL
        <div className="mx-auto mt-2 w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
