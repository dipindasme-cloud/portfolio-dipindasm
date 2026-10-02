import AboutMeSection from "@/components/aboutpage/AboutMeSection";
import SkillsAndAwards from "@/components/aboutpage/SkillsAndAwards";
import Experience from "@/components/aboutpage/Experience";
import Education from "@/components/aboutpage/Education";
import MyApproach from "@/components/aboutpage/MyApproach";

export default function Home() {
  return (
    <main className="flex-1">
      <AboutMeSection />
      <MyApproach />
      <Experience />
      <Education />
      <SkillsAndAwards />
    </main>
  );
}