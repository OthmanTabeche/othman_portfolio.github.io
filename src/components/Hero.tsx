
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const cursorTextRef = useRef<HTMLSpanElement>(null);
  const words = ['Full-stack Developer', 'Web Developer', 'React Developer', 'Node.js Developer'];
  
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        if (cursorTextRef.current) {
          cursorTextRef.current.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        }
        typingSpeed = 50;
      } else {
        if (cursorTextRef.current) {
          cursorTextRef.current.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end of a word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 300; // Pause before starting a new word
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }, []);

  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleReveal);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1 reveal">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4">
                  Othman Tabeche
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-2">
                  I am a <span ref={cursorTextRef} className="text-primary font-semibold"></span>
                  <span className="animate-pulse">|</span>
                </p>
                <p className="text-muted-foreground max-w-[600px]">
                  Aspiring full-stack developer focused on modern JavaScript frameworks, 
                  responsive designs, and creating seamless user experiences.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a 
                  href="#contact" 
                  className="inline-flex h-10 px-6 items-center justify-center rounded-md bg-primary text-primary-foreground shadow transition-transform hover:scale-105"
                >
                  Get in touch
                </a>
                <a 
                  href="#about" 
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background shadow-sm px-6 transition-transform hover:scale-105"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] animate-float reveal">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl"></div>
                <div className="absolute inset-4 border border-white/20 rounded-full bg-white/10 backdrop-blur-sm glass-panel p-4 overflow-hidden shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4D03AQEf2c8k6lDpCQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726260095336?e=1748476800&v=beta&t=X1VwvIBcMr4rLaRqZ-wUvuU9f2CFzYBp9h_GXOlltSg" 
                      alt="Othman Tabeche" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-20 text-muted-foreground/70">
            <span className="text-sm font-light mb-2">Scroll for more</span>
            <ArrowDown size={20} className="animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
