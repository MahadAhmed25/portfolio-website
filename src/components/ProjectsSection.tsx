import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Lock } from "lucide-react";

const projects = [
  {
    title: "MacSync Platform",
    description:
      "Full-stack event management platform for university organizations. Designed and built a scalable backend with REST APIs, role-based access control, and Stripe integration, backed by PostgreSQL. Implemented analytics and data pipelines to surface usage insights through an admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    link: "https://github.com/4G06-Streamliners/MacSync",
  },
  {
    title: "QA Automation Framework",
    description:
      "Python-based QA automation framework for embedded hardware validation. Designed reusable test infrastructure and CI/CD integrations to support continuous regression testing, improve reliability, and accelerate release cycles across software and hardware environments.",
    tags: ["Python", "Jenkins", "Hardware Testing", "CI/CD", "Internal"],
    link: "#",
  },
  {
    title: "Mesh Generation Engine",
    description:
      "Backend mesh generation engine built as a reusable Java library. Implements custom algorithms and graph-based data structures to generate and traverse structured and irregular meshes, with an extensible architecture for terrain and island features.",
    tags: ["Java", "Mesh Generation", "Graph Algorithms", "Backend Library"],
    link: "https://github.com/MahadAhmed25/Island-mesh-generator",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding section-dark" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-small text-section-dark-foreground/60 mb-4 tracking-wide uppercase">
            Projects
          </p>
          <h2 className="text-display max-w-2xl text-section-dark-foreground">
            Selected work.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target={project.link?.startsWith("http") ? "_blank" : undefined}
              rel={
                project.link?.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block p-6 md:p-8 rounded-xl border border-section-dark-foreground/10 hover:border-section-dark-foreground/25 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-heading text-section-dark-foreground">
                  {project.title}
                </h3>
                {project.link?.startsWith("http") ? (
                  <ArrowUpRight
                    size={20}
                    className="text-section-dark-foreground/40 group-hover:text-section-dark-foreground transition-colors"
                  />
                ) : (
                  <Lock
                    size={20}
                    className="text-section-dark-foreground/40"
                  />
                )}
              </div>
              <p className="text-body text-section-dark-foreground/70 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-small px-3 py-1 bg-section-dark-foreground/5 text-section-dark-foreground/60 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
