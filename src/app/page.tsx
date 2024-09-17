import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "./sections/hero/Hero";
import RecentProjects from "./sections/projects/RecentProjects";
import Experience from "./sections/experience/Experience";
import Education from "./sections/education/Education";
import Footer from "./sections/footer/Footer";

export default function Home() {
  return (
    <main className="relative bg-neutral-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <RecentProjects />
        <Experience />
        <Education />
        <Footer />
        {/* <Grid /> */}
      </div>
    </main>
  );
}
