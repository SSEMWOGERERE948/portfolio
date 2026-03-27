"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-background" id="experience" data-aos="fade-up">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Experience
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Professional Experience
            </h2>
            <p
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              A progression from internships and freelance delivery to
              enterprise software development and product ownership.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={400 + index * 150}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                      {experience.role}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {experience.company}
                    </p>
                  </div>

                  <Badge variant="secondary" className="w-fit text-sm px-3 py-1">
                    {experience.period}
                  </Badge>
                </div>

                <ul className="space-y-3 text-muted-foreground leading-7">
                  {experience.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      data-aos="fade-up"
                      data-aos-delay={550 + i * 80}
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-full"
                      data-aos="fade-up"
                      data-aos-delay={700 + i * 40}
                    >
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