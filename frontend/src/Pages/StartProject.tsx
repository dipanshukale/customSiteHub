import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const steps = ["Type", "Scope", "Timeline", "Budget", "Details"];

const projectTypes = [
  "Website",
  "Web Application",
  "Product MVP",
  "Redesign",
  "Motion / Marketing",
  "Not sure yet",
];

const scopes = [
  "Small (1–2 weeks)",
  "Medium (1–2 months)",
  "Large (3+ months)",
  "Ongoing partnership",
];

const timelines = ["ASAP", "1–2 months", "Flexible", "Exploring"];

const budgets = [
  "₹20k – ₹1L",
  "₹1L – ₹3L",
  "₹3L – ₹6L",
  "₹6L+",
  "Need guidance",
];

type FormState = {
  projectType?: string;
  scope?: string;
  timeline?: string;
  budget?: string;
  name?: string;
  email?: string;
  company?: string;
  problem?: string;
};

export default function StartProject() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({});
  const [isSending, setIsSending] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.problem) {
      Swal.fire("Missing info", "Please fill required fields.", "warning");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        "service_sva8fe9", // 🔁 your service
        "template_nlxtjzi", // 🔁 your template
        {
          from_name: form.name,
          reply_to: form.email,
          project_type: form.projectType,
          scope: form.scope,
          timeline: form.timeline,
          budget: form.budget,
          company: form.company || "—",
          message: form.problem,
        },
        "qVbUzLu8GBf3xexPI" // 🔁 your public key
      );

      Swal.fire(
        "Request sent",
        "Thanks for sharing the details. I’ll get back to you shortly.",
        "success"
      );

      setForm({});
      setStep(0);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong. Try again later.", "error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-[980px] mx-auto px-5 sm:px-8 py-20"
      >
        <div className="rounded-[32px] border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="px-6 sm:px-10 py-10 border-b border-white/10">
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/40">
              Start a project
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              Build something
              <br />
              worth remembering.
            </h1>

            <p className="mt-4 max-w-xl text-white/55 leading-relaxed text-sm sm:text-base">
              A short, thoughtful process to understand your goals before we
              begin. No pressure. No sales noise.
            </p>

            <div className="mt-6 flex gap-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    i <= step
                      ? "bg-gradient-to-r from-white/70 to-white/30"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-10 py-14 min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {step === 0 && (
                  <OptionGrid
                    title="What are we building?"
                    options={projectTypes}
                    onSelect={(v) => {
                      setForm({ ...form, projectType: v });
                      next();
                    }}
                  />
                )}

                {step === 1 && (
                  <OptionGrid
                    title="Project scope"
                    options={scopes}
                    onSelect={(v) => {
                      setForm({ ...form, scope: v });
                      next();
                    }}
                  />
                )}

                {step === 2 && (
                  <OptionGrid
                    title="Timeline"
                    options={timelines}
                    onSelect={(v) => {
                      setForm({ ...form, timeline: v });
                      next();
                    }}
                  />
                )}

                {step === 3 && (
                  <OptionGrid
                    title="Budget range"
                    options={budgets}
                    onSelect={(v) => {
                      setForm({ ...form, budget: v });
                      next();
                    }}
                  />
                )}

                {step === 4 && (
                  <FinalStep
                    form={form}
                    setForm={setForm}
                    isSending={isSending}
                    onSubmit={handleSubmit}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center px-6 sm:px-10 py-6 border-t border-white/10">
            <button
              onClick={back}
              disabled={step === 0 || isSending}
              className="text-white/40 hover:text-white transition disabled:opacity-20"
            >
              ← Back
            </button>

            <span className="text-white/40 text-sm">
              Step {step + 1} of {steps.length}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function OptionGrid({
  title,
  options,
  onSelect,
}: {
  title: string;
  options: string[];
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-light mb-8">{title}</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {options.map((o) => (
          <motion.button
            key={o}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(o)}
            className="rounded-2xl px-5 py-5 text-left bg-[linear-gradient(180deg,#141414,#0c0c0c)] border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all"
          >
            {o}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function FinalStep({
  form,
  setForm,
  onSubmit,
  isSending,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  onSubmit: () => void;
  isSending: boolean;
}) {
  return (
    <div className="max-w-lg space-y-5">
      <h2 className="text-xl sm:text-2xl font-light">Final details</h2>

      <Input
        placeholder="Your name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        placeholder="Email address"
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        placeholder="Company / Product (optional)"
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <textarea
        rows={4}
        placeholder="What problem are you solving?"
        className="w-full rounded-2xl bg-black/50 border border-white/10 px-4 py-3 text-white/80 placeholder-white/30 focus:outline-none focus:border-white/30 transition"
        onChange={(e) => setForm({ ...form, problem: e.target.value })}
      />

      <button
        onClick={onSubmit}
        disabled={isSending}
        className="mt-4 inline-flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-white/80 hover:text-white transition disabled:opacity-40"
      >
        {isSending ? (
          <>
            <span className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" />
            Sending
          </>
        ) : (
          "Submit →"
        )}
      </button>

      <p className="text-white/40 text-sm">
        We’ll reply within 24–48 hours.
      </p>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl bg-black/50 border border-white/10 px-4 py-3 text-white/80 placeholder-white/30 focus:outline-none focus:border-white/30 transition"
    />
  );
}
