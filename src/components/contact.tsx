import { toast } from "sonner";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {

  const email = 'john.sarmiento452@gmail.com';

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success(<h2 className="text-lg font-medium text-white">Success</h2>, {
        description: <p className="text-sm font-medium text-muted-foreground">Email address successfully copied to clipboard.</p>,
      });
    } catch (error) {
      toast.error('Error', {
        description: error instanceof Error ? `${error.message}` : 'Failed to copy email address to clipboard',
        style: {
          backgroundColor: 'var(--destructive)'
        }
      });
    }
  }
  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-8">Let's Work Together</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together or just say hello!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="w-full sm:w-auto" onClick={handleClick}>
            <Mail className="h-5 w-5 mr-2" />
            Get In Touch
          </Button>
        </div>
        <div className="flex justify-center gap-2">
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <a href="http://www.github.com/jfsar" target="_blank" referrerPolicy="no-referrer">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <a href="https://www.linkedin.com/in/srmntz" target="_blank" referrerPolicy="no-referrer" className="flex items-center">
               <Linkedin className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}