import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, Heart, Mail, Star } from "lucide-react";
import { Button } from "./ui/button";

import heartDiseaseImg from "@/assets/projects/heart-disease.png";
import emailSpamImg from "@/assets/projects/email-spam.png";
import productReviewImg from "@/assets/projects/product-review.png";

const projects = [
  {
    title: "Heart Disease Prediction System",
    description: "ML-based prediction system using KNN algorithm to predict heart disease with high accuracy. Features comprehensive data preprocessing and model evaluation.",
    tech: ["Python", "Scikit-learn", "KNN", "Streamlit"],
    accuracy: "~86%",
    icon: Heart,
    liveUrl: "https://heartdiseasdetector.streamlit.app/",
    githubUrl: "https://github.com/ramp906592/HEART_DISEAS_DETECTOR",
    previewImage: heartDiseaseImg,
  },
  {
    title: "Email Spam Detection System",
    description: "NLP-based spam classifier utilizing TF-IDF vectorization and machine learning algorithms with comprehensive performance metrics.",
    tech: ["Python", "NLP", "TF-IDF", "ML Algorithms"],
    accuracy: "High Precision",
    icon: Mail,
    liveUrl: "https://emailspamdetector31.streamlit.app/",
    githubUrl: "https://github.com/ramp906592/EMAIL_SPAM",
    previewImage: emailSpamImg,
  },
  {
    title: "Product Review Sentiment Analysis",
    description: "NLP-based sentiment classification system for product reviews, predicting positive and negative sentiments with machine learning.",
    tech: ["Python", "NLP", "Text Classification", "Streamlit"],
    accuracy: "Sentiment Prediction",
    icon: Star,
    liveUrl: "https://review-sentiment-ai.streamlit.app/",
    githubUrl: "https://github.com/ramp906592/PRODUCT_REVIEW",
    previewImage: productReviewImg,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isVerticalLayout, setIsVerticalLayout] = useState(false);

  useEffect(() => {
    const checkLayout = () => {
      // lg breakpoint is 1024px - below this, projects stack vertically
      setIsVerticalLayout(window.innerWidth < 1024);
    };

    checkLayout();
    window.addEventListener("resize", checkLayout);
    return () => window.removeEventListener("resize", checkLayout);
  }, []);

  useEffect(() => {
    if (!isVerticalLayout) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVerticalLayout]);

  const handleMouseEnter = (index: number) => {
    if (!isVerticalLayout) return;
    setHoveredIndex(index);
    setCurrentImage(projects[index].previewImage);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setCurrentImage(null);
  };

  return (
    <>
      {/* Floating cursor image - only on vertical layout */}
      <AnimatePresence>
        {isVerticalLayout && hoveredIndex !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed z-[9999] pointer-events-none"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 100,
            }}
          >
            <div className="relative">
              <div className="w-52 h-32 rounded-lg overflow-hidden border-2 border-primary/50 shadow-xl shadow-primary/30 bg-card">
                <img
                  src={currentImage}
                  alt="Project preview"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
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
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="glass-card gradient-border rounded-xl p-6 flex flex-col group hover:bg-secondary/50 transition-all duration-300"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                      {project.accuracy}
                    </span>
                  </div>

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

                  <div className="flex gap-3 mt-auto">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
