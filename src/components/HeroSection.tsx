import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const bullets = [
  "Production-Grade Engineering",
  "Automation & Systems",
  "Applied AI",
];

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-padding pt-32 bg-texture">
      <div className="container-narrow text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-small text-muted-foreground mb-6 tracking-wide uppercase"
        >
          Software Engineering Graduate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-display mb-8"
        >
          Engineering software at the intersection of AI and systems.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-12"
        >
          {bullets.map((bullet, index) => (
            <span
              key={index}
              className="text-small text-muted-foreground flex items-center gap-2"
            >
              {index > 0 && (
                <span className="hidden md:inline w-1 h-1 rounded-full bg-muted-foreground/50" />
              )}
              {bullet}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-small font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-border text-foreground text-small font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-secondary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={18} className="text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  );
};
