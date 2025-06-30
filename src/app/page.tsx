import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import SkillsSection from "@/components/home/Skills";
import FullPageDesign from "@/components/home/TagLayout";
import TagLayout from "@/components/home/TagLayout";
import WorkProcess from "@/components/home/WorkProcess";

export default function Home() {
  return (
    <div>
      <Banner />
      <SkillsSection />

      <About />
      <WorkProcess />
      <Contact />
    </div>
  );
}
