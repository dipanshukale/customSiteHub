import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiChevronDown,
} from "react-icons/fi";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser"; // ✅ ONLY CHANGE

const services = [
  "Website Project",
  "UI / UX Consultation",
  "Full-Stack Development",
  "Performance / Redesign",
  "Digital Marketing",
  "Video Editing",
  "General Inquiry",
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire("Error", "Please fill all required fields!", "error");
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        "service_sva8fe9",
        "template_nlxtjzi",
        {
          from_name: formData.name,
          reply_to: formData.email, // ✅ reply goes to user
          subject: formData.subject || formData.service,
          service: formData.service,
          message: formData.message,
        },
        "qVbUzLu8GBf3xexPI"
      )
      .then(() => {
        Swal.fire(
          "Message Sent!",
          "Our team will connect with you shortly.",
          "success"
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          service: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Email failed. Try again later.", "error");
      })
      .finally(() => {
        setIsSending(false); // 👈 STOP LOADING
      });
  };


  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="bg-black min-h-screen text-white relative overflow-x-hidden -mt-24">
      <section className="relative w-full min-h-screen md:h-[100svh] flex flex-col justify-between">
        <img
          src="/bg.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 pt-24 md:pt-32 max-w-3xl mx-auto text-center md:text-left"
        >
          <span className="uppercase tracking-[0.35em] text-white/60 text-xs md:text-sm">
            Contact & Collaboration
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light mt-4">
            Let’s <span className="text-white/90">build your</span>{" "}
            <span className="text-white/40">Idea</span>
          </h1>
          <p className="mt-4 text-white/70 sm:text-lg md:text-xl leading-relaxed">
            Have a concept, a product, or a long-term vision? Let’s collaborate
            and turn it into something meaningful.
          </p>
        </motion.div>

        <div className="relative z-10 flex justify-center mb-36 md:mb-32">
          <motion.div
            className="w-[2px] h-12 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <div
            className="absolute text-white/40 text-[10px] tracking-[0.35em]"
            style={{ bottom: "120%", transform: "translateY(50%)" }}
          >
            SCROLL
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-medium">Get in Touch</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Whether it’s a full product or a single feature, I focus on clarity,
            performance, and longevity.
          </p>

          <div className="space-y-3 text-white/80 text-sm">
            <p className="flex items-center gap-3">
              <FiMail /> customsitehub@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FiPhone /> +91 7499678027
            </p>
            <p className="flex items-center gap-3">
              <FiMapPin /> Chandrapur,India
            </p>
          </div>

          <div className="flex gap-6 pt-4 text-xl">
            <FiInstagram className="hover:scale-110 transition" />
            <FiLinkedin className="hover:scale-110 transition" />
            <FiGithub className="hover:scale-110 transition" />
            <FiTwitter className="hover:scale-110 transition" />
          </div>
        </motion.div>

        {/* Form Panel */} 
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6 bg-black/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-lg border border-white/20"
        >
          {["name", "email", "subject"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={(formData as any)[field]}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-transparent focus:border-white outline-none"
                placeholder={field}
              />
              <label className="absolute left-0 top-4 text-white transition-all peer-focus:-top-4 peer-focus:text-sm">
                {field === "name"
                  ? "Your Name"
                  : field === "email"
                    ? "Email"
                    : "Subject"}
              </label>
            </div>
          ))}

          {/* Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full bg-black/30 border border-white/20 rounded-xl px-5 py-4 flex justify-between items-center"
            >
              {formData.service || "Select Service"}
              <FiChevronDown
                className={`${dropdownOpen ? "rotate-180" : ""} transition`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-1 w-full bg-black border border-white/20 rounded-xl z-20">
                {services.map((s) => (
                  <div
                    key={s}
                    onClick={() => {
                      setFormData({ ...formData, service: s });
                      setDropdownOpen(false);
                    }}
                    className="px-5 py-3 hover:bg-white/10 cursor-pointer"
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="peer w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-transparent focus:border-white outline-none resize-none"
              placeholder="Message"
            />
            <label className="absolute left-0 top-4 text-white transition-all peer-focus:-top-4 peer-focus:text-sm">
              Tell me about your project
            </label>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full border transition
    ${isSending
                ? "border-white/20 text-white/60 cursor-not-allowed"
                : "border-white/40 hover:bg-white hover:text-black"
              }`}
          >
            {isSending ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Start Conversation <FiSend />
              </>
            )}
          </button>

        </motion.form>
      </section>
    </main>
  );
};

export default ContactPage;
