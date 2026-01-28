import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "MacSync",
    role: "Software Engineer & Co-Founder",
    period: "2024 – Present",
    description:
      "Co-built a full-stack event management platform for large university organizations, owning system design, backend APIs, and access control architecture.",
    highlights: ["500+ Attendees Served", "End-to-End System Design", "REST APIs"],
  },
  {
    company: "Christie Digital Systems",
    role: "Automation Developer",
    period: "Sept 2024 – Aug 2025",
    description:
      "Built and scaled Python-based QA automation for cinema projector software and embedded hardware. Focused on CI reliability and real-hardware validation.",
    highlights: ["40% Faster Test Runs", "36% Efficiency Gain", "CI + Hardware Automation"],
  },
  {
    company: "CMiC",
    role: "Software Engineer Intern",
    period: "May 2023 – Aug 2023",
    description:
      "Improved quality and reliability of an enterprise web platform by building automated tests, enforcing code quality, and shipping internal developer tools.",
    highlights: ["100+ Automated Tests", "+70% Test Coverage", "20% Process Efficiency"],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-small text-muted-foreground mb-4 tracking-wide uppercase">
            Experience
          </p>
          <h2 className="text-display max-w-2xl">Where I've worked.</h2>
        </motion.div>

        <div className="space-y-8 md:space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group py-8 md:py-12 border-t border-border last:border-b"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                <div className="md:col-span-4">
                  <h3 className="text-heading mb-1">{exp.company}</h3>
                  <p className="text-small text-muted-foreground">{exp.role}</p>
                  <p className="text-small text-muted-foreground mt-1">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-body text-muted-foreground mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-small px-3 py-1.5 bg-secondary rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
