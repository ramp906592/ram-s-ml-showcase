import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Check } from "lucide-react";

const experience = {
  title: "Machine Learning Project Experience",
  company: "Self-Initiated",
  period: "2024 – Present",
  type: "Projects",
  highlights: [
    "Built end-to-end ML & NLP projects from data collection to deployment",
    "Implemented feature engineering and model evaluation pipelines",
    "Deployed applications using Streamlit and Streamlit Cloud",
    "Achieved model accuracies up to 86% on real-world datasets",
  ],
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card gradient-border rounded-xl p-8 hover:bg-secondary/40 transition-all duration-300"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground">
                  {experience.company}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-md bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                {experience.period}
              </span>
              <span className="px-4 py-2 rounded-md bg-secondary text-muted-foreground text-sm font-medium border border-border">
                {experience.type}
              </span>
            </div>

            <ul className="space-y-4">
              {experience.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 text-muted-foreground group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="group-hover:text-foreground transition-colors">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
