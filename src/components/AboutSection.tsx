import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, MessageCircle } from "lucide-react";

const AboutSection = () => {
  const skills = {
    "Languages": ["Python", "Java", "C", "C++"],
    "Frontend": ["React.js", "Next.js"],
    "Backend": ["Django", "Flask", "Express.js", "PHP", "SQL"],
    "Databases/Tools": ["MongoDB", "GitHub", "Docker", "Doppler", "AWS", "Cursor.ai"],
    "Messaging": ["Firebase Cloud Messaging (FCM)"]
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated full-stack developer with experience in building responsive and scalable web applications. 
            Skilled in frontend and backend development with clean coding practices. Eager to contribute to 
            innovative projects and grow professionally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Personal Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Pune, Maharashtra</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">English, Hindi, Marathi</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-primary mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;