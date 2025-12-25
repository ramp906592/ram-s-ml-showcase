import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, FileText, BarChart3, Rocket, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL"],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["KNN", "Logistic Regression", "Scikit-learn"],
  },
  {
    title: "NLP",
    icon: FileText,
    skills: ["TF-IDF", "Text Preprocessing", "Text Classification"],
  },
  {
    title: "Data Analysis",
    icon: BarChart3,
    skills: ["Pandas", "NumPy"],
  },
  {
    title: "Deployment & Tools",
    icon: Rocket,
    skills: ["Streamlit", "Flask", "GitHub", "Streamlit Cloud"],
  },
  {
    title: "Core CS",
    icon: Cpu,
    skills: ["DSA", "DBMS", "Operating Systems"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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
                whileHover={{ y: -4 }}
                className="glass-card gradient-border rounded-xl p-6 group hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md text-sm font-medium bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
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
