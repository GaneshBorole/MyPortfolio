import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Certificate } from "crypto";

function AchieveSection() {
  const achieves = [
    {
      title: "1st rank in Academics - Second Year",
      description:
        "Achieved First Rank in the 2nd Year of Engineering, demonstrating consistent academic excellence, strong problem-solving skills, and dedication to learning.",
      certificate: "/1st rank certificate.pdf",
      bgColor: "bg-blue-50",
    },
    {
      title: "#Sakshar Bharat Innovo Hackathon 2k25 -SSGMCE",
      description:
        "Participated in the Sakshar Bharat Innovo Hackathon 2025 hosted at SSGMCE. Collaborated with a team to ideate and develop innovative technology-driven solutions addressing real-world challenges.",
      certificate: "/Hackathon SSGMCE.pdf",
      bgColor: "bg-blue-50",
    },
    {
      title: "CDAC AR VR Bootcamp",
      description:
        " Gained hands-on experience with immersive technologies, including AR/VR application development, 3D environment design, Unity/Unreal Engine fundamentals, and integration of interactive user experiences",
      certificate: "/CDAC certificate.pdf",
      bgColor: "bg-blue-50",
    },
    {
      title: "Full Stack Web Development ",
      description:
        "Successfully completed the Sigma Batch Web Development course by Apna College, gaining hands-on experience in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.",
      certificate: "/certificate-sigma-4.0.pdf",
      bgColor: "bg-blue-50",
    },
    {
      title: "DSA in Java",
      description:
        "Successfully completed the Data Structures and Algorithms in Java course from Apna College (Sigma Batch). DSA concept  including arrays, linked lists, stacks, queues, trees, graphs, recursion, DP, and advanced problem-solving techniques.",
      certificate: "/certificate-sigma-40-dsa.pdf",
      bgColor: "bg-blue-50",
    },
    {
      title: "SAP AICTE Intern",
      description:
        "A virtual internship under SAP and AICTE focused on integrating Machine Learning models within SAP environments using ABAP.",
      certificate: "/Interns.jpg",
      bgColor: "bg-blue-50",
    },
  ];
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            Certificate & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Key achievements showcasing my skills, commitment, and performance
            across academics, internships, and projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achieves.map((achieve, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-lg transition-shadow rounded-2xl ${achieve.bgColor}`}
            >
              <CardHeader>
                <CardTitle className="text-xl text-gray-500">
                  {achieve.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty mb-4">
                  {achieve.description}
                </p>
                {achieve.certificate && (
                  <a
                    href={achieve.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green"
                  >
                    <Button
                      className="text-orange-500"
                      variant="outline"
                      size="sm"
                    >
                      View Certificate
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchieveSection;
