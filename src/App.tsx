import Contact from "./components/contact";
import Hero from "./components/hero";
import Navigation  from "./components/navigation";
import { Projects } from "./components/projects";
import Skills from "./components/skills";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
      <div className="dark min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Toaster />
        </main>
      </div>
  );
}