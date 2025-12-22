import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sanika Milmile",
    role: "Founder, CraftiCrazy",
    quote:
      "The website looks stunning and works flawlessly. Our users find it intuitive, and the responsive design ensures it looks perfect on every device.",
    image: "/Istambul.jpg",
  },
  {
    name: "Thich_Thinzzz",
    role: "Founder, Thick & Thinzzz",
    quote:
      "The design and functionality are top-notch. Our customers love the smooth ordering experience, and the system has improved our table turnover significantly.",
    image: "/Istambul.jpg",
  },
  {
    name: "Mom's Magic",
    role: "Founder,HomeMealHub ",
    quote:
      "Their solutions were intuitive, scalable, and visually stunning. The team was responsive and always went the extra mile. Highly recommended!",
    image: "/Istambul.jpg",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="w-full bg-black text-white md:py-12 py-12 -mt-12">
      {/* Desktop padding from all sides */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        {/* Heading */}
        <div className="text-center space-y-5 mb-16">
          <span className="uppercase tracking-[0.35em] text-xs text-white/50">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-light">
            Trusted by <span className="text-white/90">real people</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-lg">
            Feedback from founders, builders, and teams who trusted us with their vision.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="${className} w-3 h-3 rounded-full bg-white/30 inline-block mx-1 transition-all"></span>`,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-64 md:h-[450px] rounded-2xl overflow-hidden"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <p className="text-lg md:text-xl font-light text-white/90 leading-relaxed">
                    “ {t.quote} ”
                  </p>

                  <div className="flex items-center gap-4 pt-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover grayscale"
                    />
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-white/60">{t.role}</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Extra spacing for premium dots */}
        <style>{`
          .testimonial-swiper .swiper-pagination {
            margin-top: 40px;
            position: relative;
          }
          .testimonial-swiper .swiper-pagination-bullet-active {
            background: white !important;
            transform: scale(1.4);
          }
        `}</style>

      </div>
    </section>
  );
};

export default TestimonialsSlider;
