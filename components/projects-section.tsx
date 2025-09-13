import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Wonderlust Airbnb website",
      description:
        "The Airbnb Wanderlust project is a web design initiative aimed at creating an interactive, visually stunning platform that inspires users to explore unique destinations and accommodations around the world.",
      image: "/Airbnb.png",
      technologies: ["Express.js", "Node.js", "EJS", "MongoDB"],
      liveUrl: "https://wonderlust-jxd6.onrender.com/listings",
      githubUrl: "https://github.com/GaneshBorole/Wonderlust-.git",
    },
     {
      title: "Flashcard Frenzy",
      description:
        "Flashcard Frenzy is a multiplayer flashcard-based quiz game where two players compete in real time to answer questions as quickly and accurately as possible.",
      image: "/Flashcard.png",
      technologies: ["TypeScript", "React", "Supabase", "Node.js"],
      liveUrl: "https://ganesh-real-time-quiz-app-two.vercel.app/",
      githubUrl: "https://github.com/GaneshBorole/Flashcard-Frenzy.git",
    },
    {
      title: "Bookstore App",
      description:
        "The Bookstore App is an online platform where users can explore various books, add them to their cart, purchase them, and manage their orders.",
      image: "/bookstore.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/GaneshBorole/Bookstore_app.git",
    },
    {
      title: "Deepseek AI clone",
      description:
        "DeepSeek AI — allowing users to send natural language prompts to an AI backend and receive intelligent responses in real-time",
      image: "/deepseek.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/GaneshBorole/Deepseek_AI_Clone.git",
    },
    {
      title: "You-Tube clone",
      description:
        "It replicates the core features of YouTube including video playback, search functionality, recommended videos, and responsive UI, giving users a seamless video streaming experience.",
      image: "/yt-clone.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/GaneshBorole/Updated_You_Tube_Clone.git",
    },
     {
      title: "Notepad app",
      description:
        "A simple React-based note-taking app that lets users create, edit, and delete notes with a clean and responsive interface.",
      image: "/notepad.png",
      technologies: ["React", "javascript","Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/GaneshBorole/notepad-Using-React.git",
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A showcase of my recent work, demonstrating various technologies and
            problem-solving approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">View on GitHub</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
