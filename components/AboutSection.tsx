"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-background" id="about" data-aos="fade-up">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up" data-aos-delay="200">About Me</h2>
          <Card className="p-8" data-aos="fade-up" data-aos-delay="400">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="600">
                I'm a passionate Software Engineer with a strong foundation in full-stack development, 
                currently in my fourth year of study. With over two years of freelancing experience, 
                I've successfully delivered various web projects while maintaining academic excellence.
              </p>
              <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="800">
                My journey in software development has been marked by a commitment to creating 
                efficient, scalable solutions across different technologies and frameworks. 
                I specialize in React, Angular, and Next.js for frontend development, while 
                leveraging Spring Boot for robust backend solutions.
              </p>
              <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="1000">
                What sets me apart is my ability to quickly adapt to new technologies and my 
                experience in working with diverse clients, from small businesses to educational 
                institutions. I'm particularly proud of my contributions to projects like AfriGoals 
                and the Transcend Education platform.
              </p>
            </div>
            <div className="mt-8 flex justify-center" data-aos="fade-up" data-aos-delay="1200">
              <Button 
                variant="default"
                size="lg"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

