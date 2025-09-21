"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="relative inline-block mb-8 mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img
              src="/me.jpg"
              alt="Profile"
              className="relative w-40 h-40 rounded-full mx-auto border-4 border-primary/10 shadow-2xl object-cover ring-2 ring-primary/1relative w-40 h-40 mx-auto rounded-full border-4 border-primary/10 shadow-2xl ring-2 ring-primary/10 ring-offset-4 ring-offset-background overflow-hidden"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-balance mb-4">
            Hi, I'm <span className="text-orange-500">Ganesh Borole</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground text-balance mb-8">
            Full-Stack Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
            I create beautiful, functional web applications using React,
            Next.js, and modern technologies. Passionate about clean code,
            exceptional user experiences, and building solutions that make a
            difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 ">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="font-semibold bg-orange-500 hover:bg-orange-600"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-semibold bg-transparent "
          >
            <a href="/Resume_Ganesh.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="sm" className="p-2" asChild>
            <a
              href="https://github.com/GaneshBorole"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="p-2" asChild>
            <a
              href="https://www.linkedin.com/in/ganesh-borole-85a7862b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="p-2" asChild>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ganeshborole73@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
