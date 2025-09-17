import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skills = [
    { name: "React/Next.js", level: 90},
    { name: "TypeScript", level: 70 },
    { name: "Node.js", level: 80 },
    { name: "Java", level: 90 },
    { name: "Data Structure and Algorithm", level: 70 },
    { name: "SQL/MySQL/MongoDB", level: 75 },
  ]

  const tools = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "MongoDB",
    "Tailwind CSS",
    "Postman",
    "Git",
    "GitHub",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="bg-muted rounded-lg p-3 text-center font-medium hover:bg-primary/10 transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
