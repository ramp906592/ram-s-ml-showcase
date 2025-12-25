import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Heart, Mail, Star } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Heart Disease Prediction System",
    description: "ML-based prediction system using KNN algorithm to predict heart disease with high accuracy. Features comprehensive data preprocessing and model evaluation.",
    tech: ["Python", "Scikit-learn", "KNN", "Streamlit"],
    accuracy: "~86%",
    icon: Heart,
    gradient: "from-rose-500/20 to-orange-500/20",
    liveUrl: "#",
    githubUrl: "https://github.com/ramp906592",
  },
  {
    title: "Email Spam Detection System",
    description: "NLP-based spam classifier utilizing TF-IDF vectorization and machine learning algorithms with comprehensive performance metrics.",
    tech: ["Python", "NLP", "TF-IDF", "ML Algorithms"],
    accuracy: "High Precision",
    icon: Mail,
    gradient: "from-blue-500/20 to-cyan-500/20",
    liveUrl: "#",
    githubUrl: "https://github.com/ramp906592",
  },
  {
    title: "Product Review Sentiment Analysis",
    description: "NLP-based sentiment classification system for product reviews, predicting positive and negative sentiments with machine learning.",
    tech: ["Python", "NLP", "Text Classification", "Streamlit"],
    accuracy: "Sentiment Prediction",
    icon: Star,
    gradient: "from-violet-500/20 to-purple-500/20",
    liveUrl: "#",
    githubUrl: "https://github.com/ramp906592",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Featured Work
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            End-to-end machine learning projects showcasing practical applications of AI and data science.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80, rotateX: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
                style={{ perspective: "1000px" }}
              >
                {/* Glow effect on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 0.8 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="relative glass-card gradient-border rounded-2xl p-6 h-full flex flex-col transition-all duration-500"
                  animate={{
                    y: isHovered ? -8 : 0,
                    rotateY: isHovered ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated Icon */}
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6"
                    animate={{
                      rotate: isHovered ? [0, -10, 10, 0] : 0,
                      scale: isHovered ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Accuracy Badge */}
                  <motion.div 
                    className="mb-4"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-glow-pulse">
                      {project.accuracy}
                    </span>
                  </motion.div>

                  {/* Tech Stack with staggered animation */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-1 rounded-md bg-secondary text-muted-foreground text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="sm"
                        className="w-full group/btn glow-effect"
                        asChild
                      >
                        <a href={project.liveUrl}>
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;