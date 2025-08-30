import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">Hi, I am Sunny,</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Full Stack <span className="text-primary">Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A dedicated full-stack developer with experience in building 
                responsive and scalable web applications. Skilled in frontend 
                and backend development with clean coding practices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  const element = document.getElementById("projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://sunny-resume-1.tiiny.site/', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                <img 
                  src={profilePhoto} 
                  alt="Sunny Nikam - Python Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;