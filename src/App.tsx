import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { NowPlaying } from "@/components/NowPlaying";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation could be added here */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <NowPlaying />
      <Contact />
      <Footer />
    </div>
  );
}