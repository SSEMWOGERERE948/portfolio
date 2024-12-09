"use client";

import { Github, Linkedin, Mail, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import { projects, skills } from "@/lib/data";
import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen bg-background transition-all duration-500">
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary/10 to-background mt-16"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="0"
      >        
      <div className="container px-4 mx-auto text-center">
          <div className="flex flex-col items-center mb-8" data-aos="fade-in" data-aos-delay="200">
            <img 
              src="/simon.jpg"
              alt="Trevor Simon"
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-primary/20 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent" data-aos="fade-in" data-aos-delay="400">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-aos="fade-in" data-aos-delay="600">
            Transforming ideas into elegant digital solutions. Specialized in React, Next.js, and Spring Boot.
          </p>
          <div className="flex gap-4 justify-center" data-aos="fade-in" data-aos-delay="800">
            <Button variant="default" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
          </div>
          <div className="flex gap-4 justify-center mt-8" data-aos="fade-in" data-aos-delay="1000">
            <Button variant="ghost" size="icon" onClick={() => window.open('https://github.com/SSEMWOGERERE948', '_blank')}>
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => window.open('https://www.linkedin.com/in/trevor-simon-6b6575254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}>
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Modal for Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-md relative">
            <img 
              src="/simon.jpg"
              alt="Trevor Simon"
              className="w-full max-h-[60vh] object-contain rounded-lg"
            />
            <button 
              className="absolute top-2 right-2 text-blue-600 hover:text-blue-800"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <section className="py-20 bg-background" id="projects" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up" data-aos-delay="200">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={project.title} data-aos="fade-up" data-aos-delay={300 + (index * 100)}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background" id="skills" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up" data-aos-delay="200">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={skill} data-aos="fade-up" data-aos-delay={300 + (index * 50)}>
                <SkillBadge name={skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background" id="contact" data-aos="fade-up">
        <div className="container px-4 mx-auto max-w-2xl">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up" data-aos-delay="200">
              Get in Touch
            </h2>
            <p className="text-center text-muted-foreground mb-8" data-aos="fade-up" data-aos-delay="400">
              I'm always open to discussing new projects and opportunities.
            </p>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="600">
              <Button className="w-full" size="lg" onClick={() => window.location.href = 'mailto:strevor948@gmail.com'}>
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
              <Button variant="outline" className="w-full" size="lg" onClick={() => window.open('https://www.linkedin.com/in/trevor-simon-6b6575254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}>
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
