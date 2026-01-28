import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ahmem73@mcmaster.ca",
    href: "mailto:ahmem73@mcmaster.ca",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mahad25ahmed",
    href: "https://www.linkedin.com/in/mahad25ahmed/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/MahadAhmed25",
    href: "https://github.com/MahadAhmed25",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-small text-muted-foreground mb-4 tracking-wide uppercase">
            Contact
          </p>
          <h2 className="text-display mb-6">Let's connect.</h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            I'm looking for new grad roles in Backend Engineering, AI, and
            automation. Open to opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 md:gap-6"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center p-6 md:p-8 rounded-xl border border-border hover:border-foreground/20 hover:bg-secondary/50 transition-all"
            >
              <link.icon
                size={24}
                className="mb-4 text-muted-foreground group-hover:text-foreground transition-colors"
              />
              <span className="text-small font-medium mb-1">{link.label}</span>
              <span className="text-small text-muted-foreground hidden md:block">
                {link.value}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
