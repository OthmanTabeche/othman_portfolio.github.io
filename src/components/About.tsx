
import React from 'react';
import { Code, Layout, Server } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="skill-card reveal">
    <div className="flex flex-col space-y-3">
      <div className="p-2 w-fit rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

const About = () => {
  const specializations = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Creating responsive, accessible, and intuitive user interfaces using modern JavaScript frameworks like React."
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building scalable server-side applications and RESTful APIs using Node.js, MongoDB, and SQL databases."
    },
    {
      icon: Code,
      title: "Modern Practices",
      description: "Implementing modern development practices including TypeScript, GraphQL, and single-page applications."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2 reveal">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About Me</h2>
              <div className="w-20 h-1 bg-primary rounded"></div>
            </div>
            <div className="space-y-4 reveal">
              <p className="text-muted-foreground">
                I'm Othman Tabeche, a dedicated full-stack developer in training with a strong foundation in modern web technologies. Currently pursuing formal education in Web Application Development at Institut TIC de Barcelona, I am complementing my studies with the Full Stack Open Bootcamp from the University of Helsinki.
              </p>
              <p className="text-muted-foreground">
                My core expertise includes <code>JavaScript</code>, <code>React.js</code>, <code>Node.js</code>, and <code>TypeScript</code>, with a strong understanding of both frontend and backend development principles. I'm passionate about building responsive, user-friendly applications that deliver exceptional experiences.
              </p>
              <p className="text-muted-foreground">
                What drives me is the continuous learning process inherent in web development. I'm currently focused on deepening my knowledge of advanced JavaScript frameworks, REST APIs, and modern development practices.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {specializations.map((spec, i) => (
              <AboutCard 
                key={i}
                icon={spec.icon}
                title={spec.title}
                description={spec.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
