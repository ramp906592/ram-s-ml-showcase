import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MapPin, Send, Download } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ramp906592@gmail.com",
    href: "mailto:ramp906592@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ramp906592",
    href: "https://github.com/ramp906592",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ram-prakash-jha",
    href: "https://www.linkedin.com/in/ram-prakash-jha-/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhubaneswar, Odisha, India",
    href: null,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const CardContent = (
                  <div className="glass-card rounded-xl p-5 flex items-center gap-4 group hover:bg-secondary/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                const isExternal = item.href?.startsWith("http");

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        {CardContent}
                      </a>
                    ) : (
                      CardContent
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card gradient-border rounded-xl p-8 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm currently looking for internship and full-time opportunities in ML, Data Science, and Software Development.
              </p>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full" asChild>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&to=ramp906592@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Me an Email
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Ram_Prakash_Jha_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
