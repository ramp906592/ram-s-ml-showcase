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
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end machine learning projects showcasing practical applications of AI and data science.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                <div className="relative glass-card gradient-border rounded-2xl p-6 h-full flex flex-col transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-2xl">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Accuracy Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {project.accuracy}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-secondary text-muted-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.liveUrl}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
