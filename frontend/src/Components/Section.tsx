import { motion } from "framer-motion";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      {children}
    </motion.section>
  );
};

export default Section;
