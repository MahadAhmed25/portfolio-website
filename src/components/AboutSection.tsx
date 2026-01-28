import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const focusAreas = [
  {
    number: "01",
    title: "Production-grade Backend Engineering",
    description:
      "Designing and shipping reliable backend systems—clean APIs, scalable data flows, and observable services built to run continuously in production.",
  },
  {
    number: "02",
    title: "Automation & Systems",
    description:
      "Designing systems that reduce manual work. CI/CD pipelines, automated test frameworks, and tooling that improves developer velocity.",
  },
  {
    number: "03",
    title: "Applied AI",
    description:
      "Working with AI when it meaningfully improves a product. Clean architecture, data flow, and integration with practical impact.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding section-dark" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-small text-section-dark-foreground/60 mb-4 tracking-wide uppercase">
            About Me
          </p>
          <h2 className="text-display max-w-3xl">
            Software engineer with hands-on experience building scalable systems.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <span className="text-small text-section-dark-foreground/40 mb-4 block">
                {area.number}
              </span>
              <h3 className="text-heading text-section-dark-foreground mb-4">
                {area.title}
              </h3>
              <p className="text-body text-section-dark-foreground/70">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
