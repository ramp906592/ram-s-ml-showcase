import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-greeting",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          ".hero-name",
          { y: 80, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1 },
          "-=0.4"
        )
        .fromTo(
          ".hero-title",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-bio",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          "-=0.3"
        )
        .fromTo(
          ".hero-social",
          { y: 20, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        );

      // Floating animation for geometric shapes
      gsap.to(".parallax-shape", {
        y: "random(-20, 20)",
        rotation: "random(-5, 5)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />

      {/* Diagonal geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="parallax-shape absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rotate-45 transform -translate-x-1/2" />
          <div className="parallax-shape absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rotate-12" />
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 mx-auto px-6" ref={contentRef}>
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <p className="hero-greeting text-primary text-lg md:text-xl mb-4 font-medium opacity-0">
              Hi There, I Am
            </p>

            <h1
              ref={titleRef}
              className="hero-name text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight opacity-0"
            >
              <span className="text-foreground">Ram Prakash</span>{" "}
              <span className="gradient-text">Jha</span>
            </h1>

            <h2
              ref={subtitleRef}
              className="hero-title text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light opacity-0"
            >
              Machine Learning Engineer
            </h2>

            <p className="hero-bio text-muted-foreground mb-8 max-w-lg mx-auto opacity-0">
              Computer Science undergraduate at KIIT, passionate about turning
              data into actionable insights and building end-to-end ML
              solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Button size="lg" asChild className="hero-cta opacity-0">
                <a href="#projects">View Works</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hero-cta opacity-0"
              >
                <a
                  href="https://github.com/ramp906592/Resume/raw/main/RAM_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/ramp906592",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ram-prakash-jha-/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:ramp906592@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="hero-social p-3 rounded-lg border border-border bg-secondary/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 opacity-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, delay: 1.5 },
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
