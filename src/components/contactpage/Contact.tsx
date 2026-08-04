"use client";

import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Container from "@/components/ui/Container";

interface StatusState {
  type: "success" | "error";
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: false, // Honeypot trap state
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusState | null>(null);

  // Measure time starting from the user's FIRST keystroke/input
  const interactionStartTimeRef = useRef<number | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    // Track first user interaction
    if (!interactionStartTimeRef.current) {
      interactionStartTimeRef.current = Date.now();
    }

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // 1. CLIENT SPAM DEFENSE: Honeypot check
    if (formData.botcheck) {
      setIsSubmitting(false);
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "", botcheck: false });
      return;
    }

    // 2. CLIENT SPAM DEFENSE: Typing speed check (< 1.2s)
    if (interactionStartTimeRef.current) {
      const elapsedTime = (Date.now() - interactionStartTimeRef.current) / 1000;
      if (elapsedTime < 1.2) {
        setIsSubmitting(false);
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "", botcheck: false });
        return;
      }
    }

    try {
      // Send form data to internal Next.js API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent.",
        });
        setFormData({ name: "", email: "", message: "", botcheck: false });
        interactionStartTimeRef.current = null; // Reset interaction timer
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (_err) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-background pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <Container className="flex flex-col items-center gap-12 md:gap-16">
        
        {/* Header Block */}
        <div className="text-center flex flex-col items-center max-w-[36rem]">
          <TextReveal
            words="CONTACT"
            as="h2"
            className="t-display text-foreground mb-4"
          />
          <p className="t-body text-muted-400">
            Interested in working together? Fill out the form below to get in touch.
          </p>
        </div>

        {/* Form Block */}
        <div className="w-full max-w-[32rem]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* SPAM DEFENSE: Honeypot Input */}
            <input
              type="checkbox"
              name="botcheck"
              checked={formData.botcheck}
              onChange={handleInputChange}
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="t-label text-muted">
                Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-md bg-foreground/[0.02] border border-border text-foreground text-base outline-none transition-colors focus:border-border/80 focus:bg-foreground/[0.04]"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="t-label text-muted">
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="email@address.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-md bg-foreground/[0.02] border border-border text-foreground text-base outline-none transition-colors focus:border-border/80 focus:bg-foreground/[0.04]"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="t-label text-muted">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-md bg-foreground/[0.02] border border-border text-foreground text-base outline-none transition-colors focus:border-border/80 focus:bg-foreground/[0.04] resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 rounded-full bg-foreground text-background text-sm font-semibold border-none cursor-pointer mt-2 transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </motion.button>

            {/* Accessible Status Message Announcement */}
            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm text-center mt-2 ${
                  status.type === "success" ? "text-emerald-500" : "text-rose-500"
                }`}
              >
                {status.message}
              </p>
            )}

          </form>
        </div>

      </Container>
    </section>
  );
}