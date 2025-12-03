import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setMessage("✅ Thank you! Your message was sent.");
        setMessageType("success");
        formRef.current?.reset();

        setTimeout(() => {
          setMessage("");
          setMessageType("");
        }, 5000);
      } else {
        console.error("Backend error:", data.message || "Unknown error");
        setMessage(
          `❌ ${data.message || "Error sending message. Please try again."}`
        );
        setMessageType("error");
      }
    } catch (err) {
      console.error("Network or fetch error:", err);
      setMessage("❌ Error sending message. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const cardBg =
    theme === "dark"
      ? "bg-gray-900/20 border-white/20 text-gray-200"
      : "bg-white/10 border-white/30 text-gray-900";
  const textColor = theme === "dark" ? "text-gray-400" : "text-gray-900/90";
  const inputBorder = theme === "dark" ? "border-white/30" : "border-white/20";
  const placeholderColor =
    theme === "dark" ? "placeholder-gray-400" : "placeholder-white/60";
  const whatsappBg =
    theme === "dark"
      ? "bg-green-400/10 hover:bg-green-700/60 text-green-600"
      : "bg-green-400/20 hover:bg-green-700/80 text-green-900";
  const emailBg =
    theme === "dark"
      ? "bg-red-400/10 hover:bg-red-700/60 text-red-300"
      : "bg-indigo-400/20 hover:bg-red-700/80 text-gray-900";
  const linkedinBg =
    theme === "dark"
      ? "bg-blue-400/10 hover:bg-blue-800/20 text-blue-800"
      : "bg-blue-400/20 hover:bg-blue-800 text-blue-800";
  const submitBtn =
    theme === "dark"
      ? "bg-linear-to-r from-green-400 to-cyan-400"
      : "bg-linear-to-r from-red-400 to-purple-400";
  const messageStyle =
    messageType === "success" ? "text-green-400" : "text-red-400";

  return (
    <section
      id="contact"
      className="py-10 px-6 sm:px-10 lg:px-12 transition-colors duration-500"
    >
      <div className="w-full mx-auto grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg flex flex-col justify-between backdrop-blur-xl ${cardBg} transition-colors duration-500`}
        >
          <div className="py-8 sm:py-12">
            <h2
              className={`text-3xl sm:text-4xl font-extrabold mb-6 ${textColor}`}
            >
              Let’s Work Together
            </h2>
            <p
              className={`${textColor} text-md md:text-md lg:text-xl font-medium max-w-2xl leading-relaxed`}
            >
              Interested in collaborating? Fill out the contact form below or
              reach out directly via email. I’d love to hear about your project,
              explore ideas, and discuss how we can create something meaningful
              and impactful together.
            </p>
          </div>

          <div className="mt-6 w-full flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <a
              href="https://wa.me/966572178349"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-3 py-3 px-4 font-semibold rounded-xl transition-all duration-300 hover:text-white flex-1 ${whatsappBg}`}
            >
              <FaWhatsapp size={20} />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:syedahmedx3@gmail.com"
              className={`flex items-center justify-center gap-3 py-3 px-4 font-semibold rounded-xl transition-all duration-300 hover:text-white flex-1 ${emailBg}`}
            >
              <FaEnvelope size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/syedahmedhasanx3"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-3 py-3 px-4 font-semibold rounded-xl transition-all duration-300 hover:text-white flex-1 ${linkedinBg}`}
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full max-w-2xl mx-auto p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-2xl ${cardBg}`}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5">
            <input
              type="text"
              name="prevent_autofill"
              autoComplete="off"
              className="hidden"
            />

            <input
              name="name"
              placeholder="Your Name"
              autoComplete="off"
              className={`p-4 rounded-xl bg-transparent border ${inputBorder} ${textColor} ${placeholderColor} text-[15px] tracking-wide focus:outline-none focus:ring-2 focus:ring-green-400 transition-all`}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              autoComplete="off"
              className={`p-4 rounded-xl bg-transparent border ${inputBorder} ${textColor} ${placeholderColor} text-[15px] tracking-wide focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all`}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              autoComplete="off"
              className={`p-4 rounded-xl bg-transparent border ${inputBorder} ${textColor} ${placeholderColor} min-h-40 text-[15px] tracking-wide focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
              required
            />

            {message && (
              <p className={`${messageStyle} text-sm font-medium`}>{message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`py-3.5 rounded-xl ${submitBtn} text-black font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
