import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Check, Sparkles, Code2, Zap } from "lucide-react";

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

const floatingIcons = [
  { Icon: Code2, delay: 0 },
  { Icon: Zap, delay: 0.5 },
  { Icon: Sparkles, delay: 1 },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      
      {/* Animated Particles */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 rounded-full bg-primary/50"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 rounded-full bg-accent/50"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
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
            transition={{ duration: 0.5 }}
          >
            My Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
            {/* Main Experience Card - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative"
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-50 blur-sm"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              <div className="relative glass-card rounded-2xl p-8 hover:bg-secondary/30 transition-all duration-500">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-8 h-8 text-primary" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-foreground mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 }}
                    >
                      {experience.title}
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-muted-foreground"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                    >
                      {experience.company}
                    </motion.p>
                  </div>
                </div>

                {/* Period Badges */}
                <motion.div 
                  className="flex flex-wrap gap-3 mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <motion.span 
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(187 100% 50% / 0.3)" }}
                  >
                    📅 {experience.period}
                  </motion.span>
                  <motion.span 
                    className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(280 100% 65% / 0.3)" }}
                  >
                    🚀 {experience.type}
                  </motion.span>
                </motion.div>

                {/* Highlights */}
                <ul className="space-y-4">
                  {experience.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.6 + i * 0.15,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 text-muted-foreground group cursor-default"
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="w-4 h-4 text-primary" />
                      </motion.div>
                      <span className="group-hover:text-foreground transition-colors duration-300">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Decorative Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:flex flex-col items-center gap-6 py-8"
            >
              {/* Vertical Line */}
              <motion.div
                className="w-px h-full bg-gradient-to-b from-primary via-accent to-transparent"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                style={{ originY: 0 }}
              />
              
              {/* Floating Icons */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8">
                {floatingIcons.map(({ Icon, delay }, index) => (
                  <motion.div
                    key={index}
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + delay }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: delay 
                      }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
