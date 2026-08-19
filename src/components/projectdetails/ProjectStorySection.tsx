import Container from "@/components/ui/Container";
import type { Project } from "@/data/projects";

interface ProjectStorySectionProps {
  project: Project;
}

export default function ProjectStorySection({
  project,
}: ProjectStorySectionProps) {
  const { story } = project;

  return (
    <section className="w-full bg-background py-8 md:py-12 lg:py-16">
      <Container className="flex flex-col gap-12 md:gap-16 lg:gap-20">
        {/* My Approach */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24">
          <div className="flex-1 w-full">
            <h2 className="t-heading text-foreground">My Approach</h2>
          </div>

          <div className="flex-1 w-full max-w-[42rem]">
            <p className="t-body-lg text-muted leading-relaxed">
              {story.approach.intro}
            </p>

            <div className="mt-8 md:mt-10 flex flex-col">
              {story.approach.points.map((point, index) => (
                <div
                  key={index}
                  className="py-5 md:py-6 border-t border-border last:border-b"
                >
                  <h3 className="t-subheading text-foreground">{point.label}</h3>
                  <p className="t-body text-muted mt-2 md:mt-3 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Pages and Features */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24">
          <div className="flex-1 w-full">
            <h2 className="t-heading text-foreground">
              Detailed Pages and Features
            </h2>
          </div>

          <div className="flex-1 w-full max-w-[42rem]">
            <div className="flex flex-col">
              {story.pages.map((page, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 py-3 md:py-4 border-t border-border last:border-b"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-foreground/40"
                  />
                  <p className="t-body text-foreground leading-relaxed">
                    <span className="font-medium">{page.label}</span>
                    <span className="text-muted"> — {page.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24">
          <div className="flex-1 w-full">
            <h2 className="t-heading text-foreground">Conclusion</h2>
          </div>

          <div className="flex-1 w-full max-w-[42rem]">
            <p className="t-body-lg text-muted leading-relaxed">
              {story.conclusion}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}