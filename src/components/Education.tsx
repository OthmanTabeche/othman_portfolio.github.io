
import React from 'react';
import { BookOpen, Award, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EducationProps {
  institution: string;
  logo: string;
  degree: string;
  period: string;
  description: string;
  index: number;
}

const EducationCard = ({ institution, logo, degree, period, description, index }: EducationProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-2xl border glass-panel relative reveal card-hover",
        index % 2 === 0 ? "bg-background/40" : "bg-primary/5"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-white p-1">
          <img 
            src={logo} 
            alt={institution} 
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">{institution}</h3>
          <p className="text-sm text-muted-foreground mt-1">{degree}</p>
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1" />
            {period}
          </div>
          <p className="mt-3 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface CertificationProps {
  title: string;
  issuer: string;
  logo: string;
  date: string;
}

const CertificationCard = ({ title, issuer, logo, date }: CertificationProps) => {
  return (
    <div className="p-4 border rounded-xl flex items-center gap-4 reveal card-hover bg-background/40">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white p-1">
        <img 
          src={logo} 
          alt={issuer} 
          className="w-full h-full object-contain" 
        />
      </div>
      <div>
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground">{issuer} • {date}</p>
      </div>
    </div>
  );
};

const Education = () => {
  const educationItems = [
    {
      institution: "Institut TIC de Barcelona",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEHzVJpBHsKIw/company-logo_400_400/company-logo_400_400/0/1688405282383/iticbcn_logo?e=1748476800&v=beta&t=K8vCdSCdeqMQ7lrfsngq_XQjUKK-s51xzdYWQIWTee8",
      degree: "Web Application Development",
      period: "2024 - 2026",
      description: "Comprehensive program focusing on modern web development technologies, database management, and software architecture."
    },
    {
      institution: "University of Helsinki",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHZQ2B3IQO9xg/company-logo_400_400/company-logo_400_400/0/1631300517673?e=1748476800&v=beta&t=REh3oM1-OyWs90pIJB4fk8TXkze_tL5m3g0sA8zmRB0",
      degree: "Full Stack Open Bootcamp",
      period: "Jan 2025 - May 2025",
      description: "Intensive bootcamp focused on modern JavaScript-based web development, including React, Redux, Node.js, MongoDB, GraphQL, and TypeScript."
    }
  ];

  const certifications = [
    {
      title: "Learn React Course Certification",
      issuer: "Codecademy",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQH81kKlXtE0og/company-logo_400_400/company-logo_400_400/0/1720724787444/codecademy_logo?e=1748476800&v=beta&t=fgNeSpDQ9d3MPpny_uujYsXkIYL2yDN2Dq0ZoW4t1sg",
      date: "2023"
    },
    {
      title: "Learn JavaScript Course Certification",
      issuer: "Codecademy",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQH81kKlXtE0og/company-logo_400_400/company-logo_400_400/0/1720724787444/codecademy_logo?e=1748476800&v=beta&t=fgNeSpDQ9d3MPpny_uujYsXkIYL2yDN2Dq0ZoW4t1sg",
      date: "2023"
    },
    {
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGLKj3JHcof0w/company-logo_400_400/company-logo_400_400/0/1630639684997/free_code_camp_logo?e=1748476800&v=beta&t=k20h1LeijR9F1mJ3lVBqAfDARDKT4h0zuAVjmTv4BzI",
      date: "2023"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="space-y-4 text-center mb-12 reveal">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications in the field of web development
          </p>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
        </div>

        <div className="grid gap-10">
          <div className="space-y-6 reveal">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-medium">Academic Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {educationItems.map((item, i) => (
                <EducationCard 
                  key={i}
                  institution={item.institution}
                  logo={item.logo}
                  degree={item.degree}
                  period={item.period}
                  description={item.description}
                  index={i}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6 reveal">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-medium">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <CertificationCard 
                  key={i}
                  title={cert.title}
                  issuer={cert.issuer}
                  logo={cert.logo}
                  date={cert.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
