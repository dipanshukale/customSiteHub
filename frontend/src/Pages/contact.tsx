import React, { useState, useEffect } from "react";
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

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  const [showMap, setShowMap] = useState(false);

  const services = [
    "Website Project",
    "UI / UX Consultation",
    "Full-Stack Development",
    "Performance / Redesign",
    "General Inquiry",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[80vh] sm:h-[90vh] min-h-[480px] overflow-hidden">
        <img
          src="/bg.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <span className="uppercase tracking-[0.35em] text-xs text-white/60 mb-5">
            Contact & Collaboration
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight">
            Let’s <span className="font-semibold">build together</span>
          </h1>

          <p className="mt-5 max-w-xl text-white/70 text-sm sm:text-lg leading-relaxed">
            Have an idea, a product, or a long-term vision?
            Let’s collaborate and turn it into something meaningful.
          </p>
        </div>

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-14 sm:py-16 px-6 max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Strategic thinking. Clean execution.
        </h2>

        <p className="text-white/70 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
          I help individuals, startups, and growing brands design and build
          high-quality digital products — focused on clarity, performance,
          and long-term value.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-14 sm:py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 sm:gap-20">

        {/* INFO */}
        <aside className="space-y-8">
          <span className="text-xs tracking-widest uppercase text-white/50">
            Contact details
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Let’s create something impactful
          </h2>

          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
            Whether you need a complete product, help with a specific feature,
            or simply want to discuss ideas — feel free to reach out.
          </p>

          <div className="space-y-4 text-white/80 text-sm sm:text-base">
            <p className="flex items-center gap-3">
              <FiMail /> CustomSiteHub@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FiPhone /> +91 7499678027
            </p>
            <p className="flex items-center gap-3">
              <FiMapPin /> Chandrapur, India
            </p>
          </div>

          <div className="flex gap-6 pt-4">
            <FiInstagram className="text-xl hover:text-white transition" />
            <FiLinkedin className="text-xl hover:text-white transition" />
            <FiGithub className="text-xl hover:text-white transition" />
            <FiTwitter className="text-xl hover:text-white transition" />
          </div>
        </aside>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit} className="space-y-8">

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {["name", "email"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  required
                  placeholder={field}
                  className="peer w-full bg-transparent border-b border-white/30 py-3 sm:py-4 text-white
                             placeholder-transparent focus:border-white focus:outline-none transition"
                />
                <label className="absolute left-0 top-3 sm:top-4 text-white/50 transition-all
                                  peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white">
                  {field === "name" ? "Your name" : "Your email"}
                </label>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="peer w-full bg-transparent border-b border-white/30 py-3 sm:py-4 text-white
                           placeholder-transparent focus:border-white focus:outline-none transition"
              />
              <label className="absolute left-0 top-3 sm:top-4 text-white/50 transition-all
                                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white">
                Subject
              </label>
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="bg-transparent border-b border-white/30 py-3 sm:py-4 text-white focus:border-white"
            >
              <option value="" disabled>Select purpose</option>
              {services.map((s) => (
                <option key={s} className="bg-black">{s}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message"
              className="peer w-full bg-transparent border-b border-white/30 py-3 sm:py-4 text-white
                         placeholder-transparent focus:border-white focus:outline-none resize-none transition"
            />
            <label className="absolute left-0 top-3 sm:top-4 text-white/50 transition-all
                              peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white">
              Tell me about your project
            </label>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-3
                       border border-white/40 px-10 py-4 rounded-full
                       hover:bg-white hover:text-black transition-all duration-500"
          >
            <span className="tracking-widest uppercase text-sm">
              Start the conversation
            </span>
            <FiSend />
          </button>
        </form>
      </section>

      {/* ================= MAP ================= */}
      <section className="w-full mb-20 sm:mb-32">
        <div
          className="flex items-center justify-center gap-4 cursor-pointer
                     bg-gradient-to-r from-black to-white/10 p-5 sm:p-6
                     hover:from-black/80 hover:to-white/20"
          onClick={() => setShowMap(!showMap)}
        >
          <FiMapPin />
          <h3 className="uppercase tracking-widest font-semibold text-sm sm:text-base">
            View location
          </h3>
          <FiChevronDown
            className={`transition-transform ${showMap ? "rotate-180" : ""}`}
          />
        </div>

        <div
          className="overflow-hidden transition-[height] duration-700 ease-in-out"
          style={{ height: showMap ? "420px" : "0px" }}
        >
          <iframe
            className="w-full h-full border-none"
            src="https://maps.google.com/maps?q=Chandrapur, India&output=embed"
            title="Map"
          />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
