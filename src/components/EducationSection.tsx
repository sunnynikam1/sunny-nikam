import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Deogiri College of Engineering",
      period: "2021 – 2025",
      score: "CGPA: 7.68",
      type: "degree"
    },
    {
      degree: "Higher Secondary (HSC)",
      institution: "Gorakshanath College",
      period: "2020 – 2021", 
      score: "89%",
      type: "school"
    }
  ];

  const certifications = [
    "Snowflake (AWS S3, Snowpipe, Data Loading)",
    "Android Development Workshop – IIT Bombay"
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-primary">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-foreground font-medium">{edu.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {edu.score}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-card">
                  <CardContent className="p-6">
                    <p className="text-foreground font-medium">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;