import { Button } from "./ui/button";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-lg font-medium">
            JS
          </div>
          <div className="hidden md:flex space-x-1">
            <Button variant="ghost" onClick={() => scrollToSection('skills')}>
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}