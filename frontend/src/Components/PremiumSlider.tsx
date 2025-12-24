import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function PremiumSlider({ items, render }: any) {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1.05}
      spaceBetween={18}
      speed={800}
      pagination={{
        clickable: true,
        bulletClass:
          "swiper-pagination-bullet !bg-white !opacity-30 !h-1.5 !w-6 !rounded-full",
        bulletActiveClass: "!opacity-100",
      }}
    >
      {items.map((item: any, i: number) => (
        <SwiperSlide key={i}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {render(item)}
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
