import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const FloatingSocials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed right-6 bottom-1/3 z-40 hidden lg:flex flex-col gap-4"
    >
      <motion.a
        href="https://github.com/ramp906592"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -4 }}
        className="p-3 rounded-full glass-card hover:bg-primary/10 transition-all duration-300 group"
      >
        <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/ram-prakash-jha-/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -4 }}
        className="p-3 rounded-full glass-card hover:bg-primary/10 transition-all duration-300 group"
      >
        <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.a>
      
      {/* Vertical Line */}
      <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent mx-auto" />
    </motion.div>
  );
};

export default FloatingSocials;
