import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sanika Milmile",
    role: "Founder,CraftiCrazy",
    quote:
      "The website looks stunning and works flawlessly. Our users find it intuitive, and the responsive design ensures it looks perfect on every device.",
    image: "/Istambul.jpg",
  },
  {
    name: "Babita",
    role: "Founder,Restaurant QR Ordering System",
    quote:
      "The design and functionality are top-notch. Our customers love the smooth ordering experience, and the system has improved our table turnover significantly.",
    image: "/Istambul.jpg",
  },
  {
    name: "Daya",
    role: "Product Manager, Happy Homes",
    quote:
      "Their solutions were intuitive, scalable, and visually stunning. The team was responsive and always went the extra mile to ensure we were satisfied. Highly recommended!",
    image: "/Istambul.jpg",
  },
];


const TestimonialsSlider = () => {
  return (
    <section className="w-full bg-black text-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
       <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="testimonial-swiper"
            >

          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-[450px] overflow-hidden"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <h3 className="text-4xl font-light tracking-tight">
                    Clients
                  </h3>

                  <p className="text-lg font-light leading-relaxed text-white/90">
                    “ {t.quote} ”
                  </p>

                  <div className="pt-6 border-t border-white/40 w-24" />

                  <div className="flex items-center gap-4">
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
      </div>
    </section>
  );
};

export default TestimonialsSlider;
