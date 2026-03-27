"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-background" id="about" data-aos="fade-up">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              About Me
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Software Engineer building sports technology products
            </h2>
            <p
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I graduated from Makerere University in February 2026 with a
              Bachelor’s degree in Software Engineering and have focused my work
              on building scalable, production-ready software systems.
            </p>
          </div>

          <Card
            className="p-8 md:p-10 rounded-2xl border-border/60 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="space-y-6 text-base md:text-lg leading-8 text-muted-foreground">
              <p data-aos="fade-up" data-aos-delay="500">
                I am a full-stack software engineer with experience across
                enterprise development, freelance delivery, and product
                engineering. My stack includes Next.js, React, Spring Boot,
                Flask, Go, PostgreSQL, Docker, and CI/CD workflows.
              </p>

              <p data-aos="fade-up" data-aos-delay="600">
                I worked at Coseke Uganda Limited until July 2025, where I
                contributed to enterprise applications using Next.js, Spring
                Boot, and Flask while working in Agile teams and supporting
                deployment pipelines with GitHub Actions and Docker.
              </p>

              <p data-aos="fade-up" data-aos-delay="700">
                I then shifted my full attention to{" "}
                <span className="font-semibold text-foreground">
                  Afrigoals Sports Data Systems
                </span>
                , my long-term vision focused on sports analytics and digital
                commerce. Through Afrigoals, I am building platforms for sports
                data insights, analytics workflows, and e-commerce experiences,
                including payment gateway integration with Pesapal.
              </p>

              <p data-aos="fade-up" data-aos-delay="800">
                What defines my work is product ownership. I do not just build
                interfaces — I design and ship complete systems from frontend to
                backend, deployment, integrations, and real-world usability.
              </p>
            </div>

            <div
              className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <Button variant="default" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://afrigoals-for-fufa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Afrigoals
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}