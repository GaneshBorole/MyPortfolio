import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      title: "SAP AICTE Intern",
      company: "SAP Edunet Foundation",
      period: "24-Dec-2024 to 9-March-2025",
      description:
        "A virtual internship under SAP and AICTE focused on integrating Machine Learning models within SAP environments using ABAP.in this intern Built basic ML models and learned how to integrate them into SAP workflows, enhancing business process automation and decision-making .",
      technologies: ["ML", "DL", "Python"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            My professional journey and the roles that have shaped my expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                  <div
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0
                        ? "md:pr-1/2 md:text-right"
                        : "md:pl-1/2 md:ml-8"
                    }`}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <span className="font-semibold text-primary">
                            {exp.company}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {exp.period}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-left break-words">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
