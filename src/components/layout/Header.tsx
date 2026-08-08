"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import RollUpText from "@/components/ui/RollUpText";
import CTAButton from "../ui/CTAButton";
import Container from "../ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const prevScroll = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = prevScroll.current;
    const scrollingUp = latest < prev;
    const show = scrollingUp || latest <= 120;
    prevScroll.current = latest;
    setHidden(!show);
  });

  const handleMenuToggle = () => {
    setMenuOpen((open) => {
      if (!open) setHidden(false);
      return !open;
    });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-full bg-background py-4 sm:py-5 lg:py-6"
      animate={{ y: hidden && !menuOpen ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      
      <Container className="flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link
          href="/"
          className="t-subheading font-medium tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          Dipindas M
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-[1.5rem] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-visible:outline-none">
              <RollUpText label={link.label} />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <CTAButton 
            label="Let's Talk" 
            href="#footer" 
            variant="header" 
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="flex h-[2.75rem] w-[2.75rem] flex-col items-center justify-center gap-[0.35rem] rounded-md border border-transparent transition-colors hover:bg-foreground/[0.04] md:hidden"
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[0.075rem] w-[1.25rem] bg-foreground transition-all duration-300 ${
              menuOpen ? "translate-y-[0.425rem] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[0.075rem] w-[1.25rem] bg-foreground transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[0.075rem] w-[1.25rem] bg-foreground transition-all duration-300 ${
              menuOpen ? "-translate-y-[0.425rem] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 flex w-full flex-col gap-[1rem] border-b border-border bg-background/95 backdrop-blur-lg px-[1rem] py-[1.5rem] md:px-[2rem]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="t-body-sm min-h-[2.75rem] flex items-center justify-center text-muted-400 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div
              className="w-full mt-[0.5rem] min-h-[2.75rem]"
              onClick={() => setMenuOpen(false)}
            >
              <CTAButton
                href="#footer"
                label="Let's Talk"
                variant="mobile"
                className="w-full h-full"
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}