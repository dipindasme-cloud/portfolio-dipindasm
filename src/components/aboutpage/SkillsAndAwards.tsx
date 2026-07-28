"use client";

import Container from "@/components/ui/Container";

interface ToolItem {
  name: string;
  description: string;
}

export default function ExpressToolkit() {
  const designTools: ToolItem[] = [
    {
      name: "Figma AI / Stitch",
      description: "Generates editable vector layouts and design systems.",
    },
    {
      name: "Galileo AI / Visily",
      description: "Converts text prompts into full UI mockups and interactive prototypes.",
    },
    {
      name: "Relume AI",
      description: "Automates sitemaps and wireframe component architecture.",
    },
  ];

  const codeTools: ToolItem[] = [
    {
      name: "v0 (by Vercel)",
      description: "Converts images/prompts to production-ready React + Tailwind code.",
    },
    {
      name: "Cursor / Antigravity",
      description: "AI-native editor for agentic refactoring and multi-file code gen.",
    },
    {
      name: "Builder.io Visual Copilot",
      description: "Transpiles Figma components directly to production code.",
    },
  ];

  return (
    <section className="w-full bg-background py-8 sm:py-12 lg:py-16">
      <Container>
        
        {/* Section Heading */}
        <h2 id="toolkit-title" className="t-display text-foreground mb-12 md:mb-16 uppercase">
          Express Toolkit
        </h2>

        {/* List Content Wrapper */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          
          {/* AI Design Tools Column */}
          <div className="flex-1">
            <h3 className="t-label text-muted mb-4 md:mb-6 uppercase">
              AI Design Tools
            </h3>
            <div className="flex flex-col">
              {designTools.map((tool, index) => (
                <div
                  key={index}
                  className="py-4 md:py-6 border-t border-border last:border-b"
                >
                  <div className="t-heading text-foreground font-semibold">
                    {tool.name}
                  </div>
                  <p className="t-subtext text-muted text-sm mt-1">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Code Tools Column */}
          <div className="flex-1">
            <h3 className="t-label text-muted mb-4 md:mb-6 uppercase">
              AI Code Tools
            </h3>
            <div className="flex flex-col">
              {codeTools.map((tool, index) => (
                <div
                  key={index}
                  className="py-4 md:py-6 border-t border-border last:border-b"
                >
                  <div className="t-heading text-foreground font-semibold">
                    {tool.name}
                  </div>
                  <p className="t-subtext text-muted text-sm mt-1">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}