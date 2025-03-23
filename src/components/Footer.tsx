
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t bg-secondary/20">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="mb-6 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 text-primary" />
          </button>
          
          <div className="mb-4 text-center">
            <h2 className="text-lg font-display font-bold tracking-tight">
              Othman<span className="text-primary">.</span>
            </h2>
            <p className="text-xs text-muted-foreground mt-1">Full-stack Developer</p>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Othman Tabeche. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed and built with React, Tailwind CSS, and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
