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

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px]" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent applications, from data analysis to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card gradient-border rounded-2xl p-6 group hover:bg-secondary/30 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  category.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                } group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${
                    category.color === "primary" ? "text-primary" : "text-accent"
                  }`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default ${
                        category.color === "primary"
                          ? "bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(187_100%_50%/0.3)]"
                          : "bg-accent/10 text-accent hover:bg-accent/20 hover:shadow-[0_0_20px_hsl(270_80%_60%/0.3)]"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
