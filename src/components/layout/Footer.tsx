"use client";

import Link from "next/link";
import RollUpText from "@/components/ui/RollUpText";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-16">
      {/* Footer Container */}
      <Container className="flex flex-col gap-12 md:gap-16 lg:gap-20">
        {/* Top Section: CTA & LinkedIn Navigation */}
        <div className="flex flex-col items-center gap-14 md:gap-20 lg:gap-24">
          
          {/* LinkedIn Direct Link (Pill Style) */}
          <div className="flex items-center gap-4 md:gap-6">
  <a
    href="https://www.linkedin.com/messaging/thread/new?recipient=dipindas-mohanadas"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Message me on LinkedIn"
    className="
      flex items-center justify-center 
      w-16 h-16 md:w-20 md:h-20
      bg-white/[0.05] border border-transparent 
      hover:border-muted-600 hover:bg-white/[0.08]
      text-foreground transition-all duration-300 ease-out
      hover:scale-[1.05] active:scale-[0.95]
      rounded-sm
    "
  >
    <span className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center">
      {/* Official LinkedIn SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill="currentColor"
        className="w-full h-full"
      >
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A35.89,35.89,0,0,1,184,136Z" />
      </svg>
    </span>
  </a>
</div>

          {/* Large "Let's Talk" Contact CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 md:gap-6 lg:gap-8 border-b-4 border-foreground pb-2 lg:pb-4 transition-all duration-300"
          >
            <RollUpText
              label="Let's Talk"
              height="h-[2.5rem] md:h-[4.25rem] lg:h-[5rem]"
              className="t-display text-foreground"
              hoverClassName="text-foreground"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 fill-foreground transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
            </svg>
          </Link>
        </div>

        {/* Bottom Copyright Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-muted-400 border-t border-white/[0.08] pt-8 gap-4">
          <p>© {currentYear} All rights reserved.</p>
          <p>Designed & Developed with Next.js</p>
        </div>
      </Container>
    </footer>
  );
}