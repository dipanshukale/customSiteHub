import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FiCpu, FiPenTool, FiAward } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutStudio = () => {
  const [lampOn, setLampOn] = useState(true);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  const [teamRef] = useInView({ threshold: 0.3 });

  const team = [
    { name: "Babita", role: "Art Director", img: "/img1.jpg", quote: "Design begins when distractions end." },
    { name: "Jetalal", role: "UI/UX Designer", img: "/img2.jpg", quote: "Good interfaces disappear. That’s how you know they work." },
    { name: "Chandramukhi", role: "Web Developer", img: "/img3.jpg", quote: "Performance is respect for the user’s time." },
  ];

  const features = [
    { icon: FiCpu, title: "INNOVATION", desc: "Pushing boundaries with bold ideas and modern technology." },
    { icon: FiPenTool, title: "CREATIVITY", desc: "Transforming imagination into meaningful digital experiences." },
    { icon: FiAward, title: "QUALITY", desc: "Craftsmanship and performance in every detail we deliver." },
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-24 sm:py-36 px-6 overflow-hidden">
        <img src="/about.jpg" className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
            Your partners in digital success
          </p>
          <h1 className="text-3xl sm:text-6xl font-extrabold mb-6">About Studio</h1>
          <p className="text-white/70 text-sm sm:text-lg mb-10">
            We design and build experiences that inspire brands and users.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 border border-white/30 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            Work With Us
          </a>
        </div>
      </section>

      {/* ================= SERVICES MARQUEE ================= */}
      <section className="py-16 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {["Mobile Apps", "Design", "Development", "Branding", "eCommerce"].map((item, i) => (
            <span key={i} className="mx-12 text-2xl sm:text-4xl font-extrabold uppercase tracking-widest">
              {item}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={i}>
              <Icon className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-xl mb-4">{title}</h3>
              <p className="text-white/70 text-sm font-light">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section ref={teamRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="relative flex justify-center mb-20">
          <div className="absolute -top-32 w-[2px] h-32 bg-white/25" />
          <button
            onClick={() => setLampOn(!lampOn)}
            className="relative z-20 w-14 h-8 rounded-b-xl bg-zinc-900 border border-white/20"
          >
            <div className={`absolute left-1/2 top-1 -translate-x-1/2 w-2 h-2 rounded-full ${lampOn ? "bg-yellow-300" : "bg-zinc-600"}`} />
          </button>

          {lampOn && (
            <motion.div
              className="absolute top-12 w-[420px] h-[300px] bg-yellow-200/20 blur-3xl"
              animate={{ opacity: [0.4, 0.7, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          )}
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40">Our Team</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-20">Meet the Creators</h2>

          <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }} loop>
            {team.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-2xl overflow-hidden shadow-2xl max-w-xs mx-auto">
                    <img src={p.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
                  </div>
                  <div className="text-left">
                    <blockquote className="italic text-lg text-white/70 mb-4">“{p.quote}”</blockquote>
                    <p className="text-2xl font-semibold">{p.name}</p>
                    <p className="text-xs uppercase tracking-widest text-white/40">{p.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= PROJECT FRAGMENTS ================= */}
      <section className="relative py-34">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.5em] text-white/40">Selected Work</span>
          <h2 className="mt-6 text-4xl sm:text-6xl font-light">Projects as impressions</h2>

          <div className="space-y-40 mt-32">

            {/* Fragment 1 */}
            <motion.div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-6xl text-white/10 font-light">01</span>
                <h3 className="text-3xl font-medium mt-4">Modern Restaurant Platform</h3>
                <p className="mt-4 text-white/60 font-light">
                  Warm materials. Confident typography.  
                  A digital space that feels human.
                </p>
              </div>
              <img src="/restaurant.jpg" className="rounded-2xl  transition duration-700" />
            </motion.div>

            {/* Fragment 2 */}
            <motion.div className="grid md:grid-cols-2 gap-16 items-center">
              <img src="/HomeMeal.jpg" className="rounded-2xl  transition duration-700" />
              <div className="text-right">
                <span className="text-6xl text-white/10 font-light">02</span>
                <h3 className="text-3xl font-medium mt-4">Creative Studio Website</h3>
                <p className="mt-4 text-white/60 font-light">
                  Motion-led storytelling with cinematic depth.
                </p>
              </div>
            </motion.div>

            {/* Fragment 3 */}
            <motion.div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-6xl text-white/10 font-light">03</span>
                <h3 className="text-3xl font-medium mt-4">Scalable Full-Stack System</h3>
                <p className="mt-4 text-white/60 font-light">
                  Architecture built for longevity and invisible performance.
                </p>
              </div>
              <img src="/craft.jpg" className="rounded-2xl  transition duration-700" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center grayscale brightness-50 scale-110"
          style={{ y: bgY, backgroundImage: "url(/image.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Want to Discuss Your Project?
          </h2>
          <p className="text-white/70 mb-10">
            Let’s build something remarkable together.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black rounded-full uppercase tracking-widest hover:bg-black hover:text-white transition"
          >
            Let’s Talk
          </a>
        </div>
      </section>

    </main>
  );
};

export default AboutStudio;
