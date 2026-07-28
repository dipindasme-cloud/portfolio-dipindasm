"use client";

import Container from "@/components/ui/Container";

export default function SkillsAndAwards() {
  const skills = [
    "Web Design",
    "No-Code Development",
    "UI/UX Design",
  ];

  const awards = [
    "3x Site of the Day — Awwwards",
    "1x Young Ones ADC Gold",
    "Product Design Champion",
  ];

  return (
    <section className="w-full bg-background py-8 sm:py-12 lg:py-16">
      <Container>
        
        {/* Section Heading mapped to fluid t-display */}
        <h2 id="skills-title" className="t-display text-foreground mb-12 md:mb-16">
          Skills &amp; Awards
        </h2>

        {/* List Content Wrapper */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          
          {/* Key Skills Column */}
          <div className="flex-1">
            <h3 className="t-label text-muted mb-4 md:mb-6">
              Key Skills
            </h3>
            <div className="flex flex-col">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="t-heading text-foreground py-4 md:py-6 border-t border-border last:border-b"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Awards Column */}
          <div className="flex-1">
            <h3 className="t-label text-muted mb-4 md:mb-6">
              Awards
            </h3>
            <div className="flex flex-col">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="t-heading text-foreground py-4 md:py-6 border-t border-border last:border-b"
                >
                  {award}
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}