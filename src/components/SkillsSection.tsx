import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, FileText, BarChart3, Rocket, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL"],
    color: "primary",
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["KNN", "Logistic Regression", "Scikit-learn"],
    color: "accent",
  },
  {
    title: "NLP",
    icon: FileText,
    skills: ["TF-IDF", "Text Preprocessing", "Text Classification"],
    color: "primary",
  },
  {
    title: "Data Analysis",
    icon: BarChart3,
    skills: ["Pandas", "NumPy"],
    color: "accent",
  },
  {
    title: "Deployment & Tools",
    icon: Rocket,
    skills: ["Streamlit", "Flask", "GitHub", "Streamlit Cloud"],
    color: "primary",
  },
  {
    title: "Core CS",
    icon: Cpu,
    skills: ["DSA", "DBMS", "Operating Systems"],
    color: "accent",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Technical Expertise
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            A comprehensive toolkit for building intelligent applications, from data analysis to deployment.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card gradient-border rounded-2xl p-6 group hover:bg-secondary/30 transition-all duration-500 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    category.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  }`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`w-6 h-6 ${
                    category.color === "primary" ? "text-primary" : "text-accent"
                  }`} />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        boxShadow: category.color === "primary" 
                          ? "0 0 25px hsl(187 100% 50% / 0.4)"
                          : "0 0 25px hsl(270 80% 60% / 0.4)"
                      }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default ${
                        category.color === "primary"
                          ? "bg-primary/10 text-primary hover:bg-primary/20"
                          : "bg-accent/10 text-accent hover:bg-accent/20"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;