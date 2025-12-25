import Footer from "../Components/Footer";

export default function Terms() {
  return (
    <>
      <section className="min-h-screen bg-black text-white px-6 sm:px-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-light tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-white/50 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          {/* CONTENT */}
          <div className="mt-14 space-y-12 text-white/65 leading-relaxed">
            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using our website, you agree to be bound by
                these terms. If you do not agree, you should discontinue use.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Use of Services
              </h2>
              <p>
                You agree to use our services only for lawful purposes and not
                engage in any activity that could harm, disrupt, or misuse
                our systems.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Intellectual Property
              </h2>
              <p>
                All content, designs, and systems are the intellectual
                property of customsitehub unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Limitation of Liability
              </h2>
              <p>
                We are not liable for any damages resulting from the use or
                inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Modifications
              </h2>
              <p>
                We reserve the right to modify these terms at any time.
                Continued use constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Governing Law
              </h2>
              <p>
                These terms are governed by applicable laws in India.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Contact
              </h2>
              <p>
                For questions regarding these terms, contact{" "}
                <span className="text-white">
                  customsitehub@gmail.com
                </span>
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
