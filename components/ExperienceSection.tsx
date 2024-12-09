"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-background" id="experience" data-aos="fade-up">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up" data-aos-delay="200">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="p-6" data-aos="fade-up" data-aos-delay={400 + (index * 200)}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{experience.role}</h3>
                    <p className="text-muted-foreground">{experience.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <Badge variant="secondary">{experience.period}</Badge>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} data-aos="fade-up" data-aos-delay={600 + (i * 100)}>{achievement}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <Badge key={tech} variant="outline" data-aos="fade-up" data-aos-delay={800 + (i * 50)}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

