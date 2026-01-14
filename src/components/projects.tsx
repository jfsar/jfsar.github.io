import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import ImageWithFallback  from "./image-with-fallback";
import { JFSARImage, QuizAppImage, UrbanCapImage } from "../images";

export function Projects() {
  const projects = [
    {
      title: "UrbanCap - Fictional Online Store",
      description: "A full-stack e-commerce solution with Next.js, Prisma ORM, and Neon featuring payment integration and admin dashboard.",
      image: UrbanCapImage,
      technologies: ["next.js", "neon", "prisma orm", "stripe", "paypal", "shadcn ui"],
      liveUrl: "https://cap-vault.vercel.app/",
      githubUrl: "https://github.com/jfsar/cap-vault"
    },
    {
      title: "Task Management App",
      description: "A simple and interactive quiz application built with React that fetches trivia questions from the Open Trivia Database API.",
      image: QuizAppImage,
      technologies: ["react.js", "context api", "open trivia database api"],
      liveUrl: "https://jfsar-quiz-app.netlify.app/",
      githubUrl: "https://github.com/jfsar/quiz-app"
    },
    {
      title: "jfsar",
      description: "My portfolio website that you're viewing right now!",
      image: JFSARImage,
      technologies: ["react.js", "typescript", "tailwind css", "shadcn ui"],
      liveUrl: "",
      githubUrl: "https://github.com/jfsar"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg justify-between space-y-4transition-shadow pt-0">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="px-6 py-0">
                <CardTitle className="mb-6">{project.title}</CardTitle>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="w-full mt-0">
                <div className="w-full flex gap-2 items-end">
                  { project.liveUrl && 
                    <Button size="sm" variant="outline" className="flex-1">
                      <a href={project.liveUrl} target="_blank" referrerPolicy="no-referrer" className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  }

                  { project.githubUrl && 
                    <Button size="sm" variant="outline" className="flex-1">
                      <a href={project.githubUrl} target="_blank" referrerPolicy="no-referrer" className="flex items-center">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  }
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}