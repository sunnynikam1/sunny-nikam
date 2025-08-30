import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Agnotic Technologies Pvt. Ltd.",
      role: "Full Stack Developer",
      period: "Mar 2025 – Present",
      location: "Pune, Maharashtra",
      description: [
        "Full-stack development using Python, Django, and MERN stack",
        "Deployed applications on AWS with real-time notifications (FCM)",
        "Improved system reliability with preventive maintenance strategies"
      ],
      technologies: ["Python", "Django", "MERN", "AWS", "FCM"]
    },
    {
      company: "Encryptics Pvt. Ltd.",
      role: "Web Development Intern",
      period: "Jun 2024 – Sep 2024",
      location: "Remote",
      description: [
        "Built responsive web applications with React.js",
        "Integrated APIs and managed MongoDB operations",
        "Collaborated with team on multiple client projects"
      ],
      technologies: ["React.js", "MongoDB", "API Integration"]
    },
    {
      company: "AICTE Virtual Internship",
      role: "Software Development Intern",
      period: "Jan 2024 – Mar 2024",
      location: "Virtual",
      description: [
        "Developed Car Parking Management System using Python, Flask, OpenCV, SQLite",
        "Implemented license plate recognition with computer vision",
        "Built RESTful APIs for system integration"
      ],
      technologies: ["Python", "Flask", "OpenCV", "SQLite", "Computer Vision"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-semibold text-primary">
                      {exp.role}
                    </CardTitle>
                    <p className="text-lg font-medium text-foreground mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;