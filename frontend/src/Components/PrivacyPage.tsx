import Footer from "../Components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="min-h-screen bg-black text-white px-6 sm:px-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-light tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/50 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          {/* CONTENT */}
          <div className="mt-14 space-y-12 text-white/65 leading-relaxed">
            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Information We Collect
              </h2>
              <p>
                We collect minimal information necessary to operate and improve
                our services. This may include your name, email address, and
                usage data when you interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To communicate with you when required</li>
                <li>To improve performance, usability, and security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Data Protection
              </h2>
              <p>
                We use industry-standard security measures to protect your
                information. However, no method of transmission over the
                internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Third-Party Services
              </h2>
              <p>
                We may use trusted third-party tools for analytics or hosting.
                These services only receive data required to perform their
                function.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your data by
                contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white/90 mb-4">
                Contact
              </h2>
              <p>
                For privacy-related questions, contact us at{" "}
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
