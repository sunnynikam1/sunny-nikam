import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7588797479",
      href: "tel:+917588797479"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "sunnynikam3228@gmail.com",
      href: "mailto:sunnynikam3228@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Mail,
      label: "Get In Touch",
      href: "mailto:sunnynikam3228@gmail.com",
      className: "bg-primary hover:bg-primary/90 text-primary-foreground"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      className: "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/sunnynikam",
      className: "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's work together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create 
            something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 shadow-card mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-medium mb-2">{contact.label}</h3>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{contact.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                size="lg"
                className={link.className}
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5 mr-2" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;