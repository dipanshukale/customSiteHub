import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineLightBulb,
} from "react-icons/hi2";

/* GSAP */
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";
gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */

const team = [
  {
    name: "Dipanshu Dilip Kale",
    role: "Founder · MERN Developer · Product Development",
    image: "/img2.jpg",
    accent: "from-yellow-400/40 to-transparent",
  },
  {
    name: "Vaibhavi Tingane",
    role: "Frontend Developer",
    image: "/img1.jpg",
    accent: "from-cyan-400/40 to-transparent",
  },
  {
    name: "Latish Kurekar",
    role: "Digital Marketing · Video Editor",
    image: "/editors.jpg",
    accent: "from-violet-400/40 to-transparent",
  },
];

const philosophyCards = [
  {
    title: "Product-first mindset",
    desc: "Every decision starts with user value and long-term product clarity.",
    glow: "from-yellow-400/40",
    icon: HiOutlineSparkles,
  },
  {
    title: "Engineering clarity",
    desc: "Scalable MERN systems built for performance and maintainability.",
    glow: "from-cyan-400/40",
    icon: HiOutlineCube,
  },
  {
    title: "Design restraint",
    desc: "Calm, timeless interfaces that feel confident — not loud.",
    glow: "from-violet-400/40",
    icon: HiOutlineLightBulb,
  },
];

/* ---------------- COMPONENT ---------------- */

export default function AboutUs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const lampOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const [statsVisible, setStatsVisible] = useState(false);


  /* ---------------- GSAP ADD-ON ONLY ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-header > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 75%",
        },
      });

      gsap.from(".philosophy-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".philosophy-section",
          start: "top 70%",
        },
      });

      gsap.from(".team-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 70%",
        },
      });

      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-black px-5 sm:px-10 py-12 text-white">
      <div className="relative max-w-7xl mx-auto rounded-[48px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-[0_120px_240px_rgba(0,0,0,0.75)] p-8 sm:p-16 overflow-hidden">

        {/* GOLDEN LAMP */}
        <motion.div style={{ opacity: lampOpacity }} className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,200,120,0.18),transparent_60%)] blur-[120px]" />
        </motion.div>

        {/* HEADER */}
        <div className="about-header relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40">About Us</span>
          <h1 className="mt-6 text-center md:text-left text-[clamp(2.1rem,5.8vw,4rem)] font-light leading-[1.1] tracking-tight">
  <span className="text-white/90">We build thoughtful</span>
  <span className="block mt-2 text-white/45">digital systems</span>
</h1>



          <p className="mt-6 text-white/60 leading-relaxed">
            We design and build modern software where product thinking,
            engineering clarity, and design restraint work together.
          </p>
        </div>

        {/* PHILOSOPHY — DESKTOP (UNCHANGED) */}
        <div className="philosophy-section relative z-10 mt-28 hidden md:block">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="space-y-28">
            {philosophyCards.map((item, i) => (
              <motion.div key={item.title} className="philosophy-card grid grid-cols-2 gap-16 items-center">
                <div className={`flex ${i % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <div className="relative max-w-sm rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} to-transparent opacity-40`} />
                    <div className="relative">
                      <item.icon className="w-9 h-9 mb-5 text-white" />
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="mt-3 text-sm text-white/65 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="text-[4rem] sm:text-[6rem] font-extrabold text-white/20 tracking-widest relative z-10">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] sm:text-[6rem] font-extrabold text-white/10 blur-[15px] animate-[pulse_2s_infinite]">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] sm:text-[6rem] font-extrabold text-yellow-400/20 blur-[40px] animate-[pulse_2.5s_infinite]">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PHILOSOPHY — MOBILE (UNCHANGED + HINT) */}
        <div className="md:hidden mt-16">
          <Swiper slidesPerView={1.08} centeredSlides spaceBetween={-28}>
            {philosophyCards.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="philosophy-card relative rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl shadow-xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} to-transparent opacity-40`} />
                  <item.icon className="relative w-8 h-8 mb-4 text-white" />
                  <h3 className="relative text-lg font-medium">{item.title}</h3>
                  <p className="relative mt-2 text-sm text-white/65">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="mt-6 text-center text-[10px] tracking-[0.3em] uppercase text-white/30">
            Swipe to explore
          </p>
        </div>

        {/* TEAM — DESKTOP & MOBILE (UNCHANGED) */}
        <div className="team-section relative z-10 mt-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs tracking-[0.4em] uppercase text-white/40">People</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-light">The minds behind the work</h2>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-10 mt-20">
            {team.map((member) => (
              <div key={member.name} className="team-card relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-lg">
                <img src={member.image} alt={member.name} className="h-[360px] w-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${member.accent}`} />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-white/60 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden mt-16">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
            >
              {team.map((member) => (
                <SwiperSlide key={member.name}>
                  <div className="team-card relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-lg">
                    <img src={member.image} alt={member.name} className="h-[320px] w-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${member.accent}`} />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-lg font-medium">{member.name}</h3>
                      <p className="text-sm text-white/60 mt-1">{member.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* STATS (UNCHANGED) */}
        <div className="stats-section relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <InView triggerOnce onChange={(inView) => inView && setStatsVisible(true)}>
            {({ ref }) => (
              <div ref={ref} className="w-full col-span-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {[
                  { value: 5, label: "Products Delivered", suffix: "+" },
                  { value: 95, label: "Performance Score", suffix: "+" },
                  { value: 1, label: "Years Experience", suffix: "+" },
                  { value: 90, label: "Client Retention", suffix: "%" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="stat-card rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-8 text-center shadow-lg"
                  >
                    <p className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                      {statsVisible && <CountUp end={s.value} duration={8} suffix={s.suffix} />}
                    </p>
                    <p className="mt-3 text-xs tracking-widest uppercase text-white/40">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </InView>
        </div>
      </div>
    </section>
  );
}
