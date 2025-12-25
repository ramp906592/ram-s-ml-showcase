import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center gap-1 p-1 rounded-full glass-card border border-border/50 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-primary"
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <div className="relative z-10 w-8 h-8 flex items-center justify-center">
        <Sun className={`w-4 h-4 transition-colors duration-300 ${!isDark ? "text-primary-foreground" : "text-muted-foreground"}`} />
      </div>
      <div className="relative z-10 w-8 h-8 flex items-center justify-center">
        <Moon className={`w-4 h-4 transition-colors duration-300 ${isDark ? "text-primary-foreground" : "text-muted-foreground"}`} />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;