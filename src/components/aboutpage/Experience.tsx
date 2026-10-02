import Container from "@/components/ui/Container";

const experiences = [
  {
    role: "UI/UX Designer Internship (Part-time)",
    company: "Zetheta Algorithms Private Limited",
    location: "Remote",
    date: "Aug 2026 - Oct 2026",
    description: "Design production-grade fintech interfaces including risk dashboards, gamified onboarding flows, multi-lingual comparison tools, and accessibility-compliant mobile wallet experiences across global markets.",
  },
  {
    role: "UI/UX Designer Internship",
    company: "Srishti Innovative",
    location: "Trivandrum, Kerala",
    date: "2025-2026",
    description: "Worked on web and mobile projects where I translated real user needs into practical, intuitive design solutions. Developed a strong foundation in user-centered design methodologies and end-to-end interface creation.",
  },
];

export default function Experience() {
  return (
    
    <section className="w-full bg-background py-8 md:py-12 lg:py-16">
      <Container className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24">
        <div className="flex-1 w-full">
          <h2 className="t-heading text-foreground">
            Work Experience
          </h2>
        </div>

        <div className="flex-1 w-full max-w-[42rem]">
          <div className="flex flex-col gap-8 md:gap-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col ${index > 0 ? "border-t border-white/[0.08] pt-8" : ""}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">
                  <div className="flex-1">
                    <h3 className="t-subheading text-foreground">
                      {exp.role}
                    </h3>
                    <p className="t-body-lg text-muted mt-1">
                      {exp.company}{exp.location && `, ${exp.location}`}
                    </p>
                  </div>
                  <span className="t-label text-muted-400 shrink-0">
                    {exp.date}
                  </span>
                </div>
                <p className="t-body text-muted leading-relaxed mt-4 md:mt-6">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}