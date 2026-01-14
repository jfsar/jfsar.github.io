import Contact from "./components/contact";
import Hero from "./components/hero";
import Navigation  from "./components/navigation";
import { Projects } from "./components/projects";
import Skills from "./components/skills";
import { Toaster } from "./components/ui/sonner";
import {Helmet} from 'react-helmet';
import { OGImage } from "./images";

export default function App() {
  return (
    <>
     <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="JS Portfolio" />
      <meta property="og:description" content="Web developer with 3 years of experience bringing design templates to life using React, HTML/CSS, and JavaScript. Explore my personal projects and experiments." />
      <meta property="og:image" content={OGImage}/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://jfsar.github.io/" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jfsar.github.io/" />
      <meta property="twitter:title" content="JS Portfolio" />
      <meta property="twitter:description" content="Web developer with 3 years of experience bringing design templates to life using React, HTML/CSS, and JavaScript. Explore my personal projects and experiments." />
      <meta property="twitter:image" content={OGImage} />
     </Helmet>
      <div className="dark min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Toaster />
      </div>
    </>
  );
}