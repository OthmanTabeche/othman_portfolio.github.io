
import React from 'react';

interface SkillProps {
  name: string;
  level: number;
  color?: string;
}

const SkillBar = ({ name, level, color = 'bg-primary' }: SkillProps) => {
  return (
    <div className="space-y-2 reveal">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000`} 
          style={{ width: '0%' }}
          data-width={`${level}%`}
        ></div>
      </div>
    </div>
  );
};

const SkillIcon = ({ name, icon }: { name: string, icon: string }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 reveal">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary mb-2">
        <img src={icon} alt={name} className="w-8 h-8 object-contain" />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

const Skills = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const skillBars = document.querySelectorAll('.h-full');
      skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          const width = bar.getAttribute('data-width') || '0%';
          (bar as HTMLElement).style.width = width;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 300); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mainSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "MongoDB", level: 70 },
    { name: "SQL", level: 65 },
    { name: "GraphQL", level: 60 },
  ];

  const additionalSkills = [
    { name: "Redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Java", icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg" },
    { name: "GraphQL", icon: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg" },
    { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "REST API", icon: "https://cdn.worldvectorlogo.com/logos/rest-api-icon.svg" },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="text-center space-y-4 mb-12 reveal">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My core competencies and technical knowledge focused on modern web development technologies
          </p>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-4 reveal">
              <h3 className="text-lg font-medium">Core Skills</h3>
              {mainSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="reveal">
              <h3 className="text-lg font-medium mb-6">Additional Technologies</h3>
              <div className="grid grid-cols-3 gap-4">
                {additionalSkills.map((skill, index) => (
                  <SkillIcon 
                    key={index} 
                    name={skill.name} 
                    icon={skill.icon} 
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-4 mt-8 reveal">
              <h3 className="text-lg font-medium">Professional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving", "Team Collaboration", "Code Review", 
                  "Responsive Design", "UX/UI Principles", "Web Accessibility",
                  "Testing", "Debugging", "Performance Optimization"
                ].map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
