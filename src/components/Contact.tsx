
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/20 pointer-events-none"></div>
      <div className="container px-4 md:px-6 max-w-6xl relative">
        <div className="space-y-4 text-center mb-12 reveal">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 reveal">
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out to me through any of the channels below. I'll do my best to respond promptly.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg border bg-card/50 backdrop-blur-sm">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Email Address</h4>
                  <a href="mailto:contact@tabeche.dev" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    contact@tabeche.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg border bg-card/50 backdrop-blur-sm">
                <div className="p-2 rounded-full bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Social Profiles</h4>
                  <div className="flex items-center space-x-3 mt-2">
                    <a href="#" className="text-foreground/80 hover:text-primary transition-colors" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-foreground/80 hover:text-primary transition-colors" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-6 md:p-8 reveal">
            <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-70"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
