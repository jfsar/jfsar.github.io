import { Badge } from "./ui/badge";

export default function Skills() {
  const skills = [
    "JavaScript", "React", "TypeScript", "Next.js", "PostgreSQL",
    "Neon", "REST APIs", "Tailwind CSS", "Git", "Postman"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-sm px-4 py-2 hover:bg-accent transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}