
import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard = ({ title, description, tags, image, demoUrl, codeUrl }: ProjectProps) => {
  return (
    <div className="rounded-xl overflow-hidden border group bg-card/50 backdrop-blur-sm reveal card-hover">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary/70 text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4 mr-1" /> Demo
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              <Github className="h-4 w-4 mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Sample projects (placeholders)
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A full-stack task management application with authentication and real-time updates.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "E-commerce Platform",
      description: "An e-commerce website with product catalog, shopping cart, and payment integration.",
      tags: ["React", "Redux", "Node.js", "Stripe API"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="space-y-4 text-center mb-12 reveal">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work and application of technical skills in real-world projects
          </p>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project, i) => (
            <ProjectCard 
              key={i}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>

        <div className="relative mt-12 pt-12 text-center reveal">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-border"></div>
          <p className="text-muted-foreground mb-4">
            <Code className="inline-block h-4 w-4 mr-1 align-text-bottom" />
            More projects coming soon
          </p>
          <p className="text-sm text-muted-foreground">
            I'm currently working on new projects that will be added here soon. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
