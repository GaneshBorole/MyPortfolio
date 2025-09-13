import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description:
        "Lead development of enterprise web applications, mentor junior developers, and architect scalable solutions.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications for various clients, focusing on performance and user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Built and maintained company website, implemented new features, and collaborated with design team.",
      technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Work Experience</h2>
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

                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-8"}`}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <span className="font-semibold text-primary">{exp.company}</span>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-pretty mb-4">{exp.description}</p>
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
  )
}
