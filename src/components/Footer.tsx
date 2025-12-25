import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Wave/Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      
      {/* Animated gradient line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold gradient-text mb-2 inline-block">
              RPJ
            </a>
            <p className="text-muted-foreground text-sm flex items-center gap-1 justify-center md:justify-start">
              © {currentYear} Ram Prakash Jha. Built with{" "}
              <Heart className="w-4 h-4 text-destructive inline animate-pulse" />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/ramp906592"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ram-prakash-jha-/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:ramp906592@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
