import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            passionate MERN stack developer with a strong foundation in Data Structures & Algorithms (Java). I enjoy building scalable web applications, solving real-world problems through clean code, and continuously learning new technologies..
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-muted-foreground text-pretty">
                Writing maintainable, scalable code that follows best practices and industry standards.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">User-Centered Design</h3>
              <p className="text-muted-foreground text-pretty">
                Creating intuitive interfaces that prioritize user experience and accessibility.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground text-pretty">
                Optimizing applications for speed, efficiency, and seamless user interactions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying the great outdoors. I believe in continuous learning and staying up-to-date with the latest trends
            in web development and design.
          </p>
        </div>
      </div>
    </section>
  )
}
