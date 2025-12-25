import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import coderImage from "@/assets/coder-profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      
      {/* Diagonal geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rotate-45 transform -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rotate-12" />
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-lg md:text-xl mb-4 font-medium">
              Hi There, I Am
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-foreground">Ram Prakash</span>{" "}
              <span className="gradient-text">Jha</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
              Machine Learning Engineer
            </h2>

            <p className="text-muted-foreground mb-8 max-w-lg">
              Computer Science undergraduate at KIIT, passionate about turning data into actionable insights and building end-to-end ML solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button size="lg" asChild>
                <a href="#projects">View Works</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/ramp906592/Resume/raw/main/RAM_RESUME.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/ramp906592", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ram-prakash-jha-/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ramp906592@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-lg border border-border bg-secondary/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                <img 
                  src={coderImage} 
                  alt="Ram Prakash Jha - Developer" 
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 0.8, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, delay: 0.8 }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 text-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
