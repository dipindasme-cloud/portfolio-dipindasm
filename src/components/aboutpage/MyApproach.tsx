"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const approachSteps = [
  {
    number: "01",
    label: "UX & Research",
    title: "Discovery & Wireframing",
    items: [
      "User need analysis and problem definition.",
      "Competitive benchmarking across top web references.",
      "Information architecture and user flow mapping.",
      "Low-fidelity wireframing for core layout structure.",
    ],
    tools: "Google Search, Gemini, ChatGPT, Perplexity, FigJam, Notion",
  },
  {
    number: "02",
    label: "System Design",
    title: "Figma UI & Prototyping",
    items: [
      "High-fidelity dark-mode UI & visual hierarchy.",
      "Component systems with Auto Layout & Variants.",
      "Design tokens for fluid typography and spacing.",
      "Interactive micro-animations with Smart Animate.",
    ],
    tools: "Figma, Stitch, Framer, Adobe XD",
  },
  {
    number: "03",
    label: "Engineering",
    title: "AI-Assisted Frontend Code",
    items: [
      "Type-safe components in Next.js 15 & TypeScript.",
      "Responsive styling with Tailwind CSS & Framer Motion.",
      "AI-accelerated coding (OpenCode / Gemini) in VS Code.",
      "Production builds deployed via GitHub & Vercel.",
    ],
    tools: "VS Code, Next.js, Tailwind, AntiGravity, OpenCode & AI Models, Vercel, GitHub",
  },
];

export default function MyApproach() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <section className="w-full bg-background py-8 md:py-12 lg:py-16">
      <Container className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24">
        {/* Desktop: Sticky header */}
        <div className="hidden md:block flex-1 w-full sticky top-24 md:top-32 self-start">
          <span className="t-label text-muted-400">Methodology</span>
          <h2 className="t-heading text-foreground mt-2">My Approach</h2>
          <p className="t-body-lg text-muted mt-4 max-w-[42rem]">
            From user research, problem definition, and benchmark analysis to Figma design systems and AI-assisted frontend development.
          </p>
        </div>

        {/* Mobile: Static header */}
        <div className="md:hidden">
          <span className="t-label text-muted-400">Methodology</span>
          <h2 className="t-heading text-foreground mt-2">My Approach</h2>
          <p className="t-body-lg text-muted mt-4">
            From user research, problem definition, and benchmark analysis to Figma design systems and AI-assisted frontend development.
          </p>
        </div>

        {/* Right column: Cards with scroll animation on desktop, static on mobile */}
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-6 md:gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={isDesktop ? { opacity: 0, y: 20 } : false}
                whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col rounded-md border border-border bg-foreground/[0.02] p-6"
              >
                <div>
                  <p className="t-micro text-muted-400 font-medium">
                    {step.number} {step.label}
                  </p>
                  <h3 className="t-subheading text-foreground mt-2">{step.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {step.items.map((item, i) => (
                      <li key={i} className="t-body text-muted leading-relaxed flex items-start gap-2">
                        <span aria-hidden="true" className="mt-2 h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-foreground/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 border-t border-border/60 pt-3">
                  <p className="t-body-sm text-muted-400 font-medium">Tools: </p>
                  <p className="t-body text-muted-400">{step.tools}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}