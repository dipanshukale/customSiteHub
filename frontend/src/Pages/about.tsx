import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaLightbulb, FaUsers, FaRocket, FaPalette, FaBullhorn, FaChartLine } from "react-icons/fa";

const AboutStudio = () => {
  const team = [
    { name: "Babita", role: "Art Director", img: "/img1.jpg", quote: "Design begins when distractions end." },
    { name: "Jetalal", role: "UI/UX Designer", img: "/img2.jpg", quote: "Good interfaces disappear. That’s how you know they work." },
    { name: "Chandramukhi", role: "Web Developer", img: "/img3.jpg", quote: "Performance is respect for the user’s time." },
  ];

  const featureBand = [
    { name: "Creativity", icon: FaLightbulb },
    { name: "Collaboration", icon: FaUsers },
    { name: "Growth", icon: FaRocket },
    { name: "Design", icon: FaPalette },
    { name: "Communication", icon: FaBullhorn },
    { name: "Performance", icon: FaChartLine },
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
        {/* Background image */}
        <img
          src="about.jpg"
          alt="Black and white abstract background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-white/50 mb-4">
            YOUR PARTNERS IN DIGITAL SUCCESS
          </p>

          <h1 className="text-6xl sm:text-7xl font-extrabold mb-8 leading-tight relative inline-block">
            About Studio
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-36 h-1 bg-white/30 rounded-full blur-sm"></span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl mb-12 leading-relaxed">
            We are <span className="font-semibold">visionaries</span> and <span className="font-semibold">innovators</span>.  
            We craft experiences that <span className="font-semibold">inspire</span> and <span className="font-semibold">push boundaries</span>.
          </p>

          <a
            href="/contact"
            className="inline-block px-12 py-4 border border-white/30 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            WORK WITH US
          </a>
        </div>
      </section>

      {/* ================= FEATURE ICON BAND (FULL WIDTH) ================= */}
      <section className="relative z-10 mt-10 w-full">
        <div className="w-full bg-black/90 backdrop-blur-md py-12 flex flex-col md:flex-row items-center justify-around gap-8 ">
          {featureBand.map(({ name, icon: Icon }) => (
            <div key={name} className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <Icon className="w-10 h-10 mb-2 text-white/80" />
              <p className="text-white/70 text-sm font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="block text-[12px] tracking-[0.45em] uppercase text-white/40 mb-6">
            Our Team
          </span>

          <p className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto mb-20 font-light leading-relaxed">
            The people behind our work. Their voices define our culture.
          </p>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            speed={900}
            className="max-w-5xl mx-auto"
          >
            {team.map((person, index) => (
              <SwiperSlide key={index}>
                <div className="grid md:grid-cols-2 gap-16 items-center group">

                  <div className="relative overflow-hidden aspect-[3/4] max-w-[340px] mx-auto">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="
                        w-full h-full object-cover
                        grayscale transition-all duration-700
                        group-hover:grayscale-0 group-hover:scale-105
                      "
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-700 group-hover:opacity-0" />
                  </div>

                  <div className="text-center md:text-left max-w-xl mx-auto mt-6 md:mt-0">
                    <blockquote className="text-white/80 text-xl sm:text-2xl font-light leading-relaxed mb-6">
                      “{person.quote}”
                    </blockquote>

                    <p className="text-white tracking-wide text-base">{person.name}</p>
                    <p className="text-white/40 text-xs uppercase tracking-[0.35em] mt-1">
                      {person.role}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </main>
  );
};

export default AboutStudio;
