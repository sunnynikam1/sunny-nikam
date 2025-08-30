import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "School Management System",
      description: "Multi-role platform with React, Next.js, Django, AWS, and FCM notifications for Admin, Teacher, Parent, and Student roles.",
      technologies: ["React", "Next.js", "Django", "AWS", "FCM"],
      company: "Agnotic Technologies",
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      title: "AI Token-Based Chatbot",
      description: "Secure chatbot with token-deduction logic for Admin and User roles, built with advanced AI integration.",
      technologies: ["Python", "AI/ML", "Django", "React"],
      company: "Agnotic Technologies", 
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      title: "Car Parking Management System",
      description: "Python + OpenCV license plate recognition system with Flask backend and SQLite database integration.",
      technologies: ["Python", "OpenCV", "Flask", "SQLite"],
      company: "AICTE Internship",
      color: "bg-green-500/10 text-green-400"
    },
    {
      title: "AI Development Team Project",
      description: "Backend chatbot logic in Python with responsive React.js UI for enhanced user interaction.",
      technologies: ["Python", "React.js", "AI/ML", "Backend"],
      company: "Team Project",
      color: "bg-orange-500/10 text-orange-400"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Works</h2>
          <p className="text-xl text-muted-foreground">
            Some of the projects I've worked on recently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 bg-current rounded opacity-80"></div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-primary/80 font-medium">
                  {project.company}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-secondary/30 text-secondary-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;