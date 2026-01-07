import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Contact() {
  const contactRef = useRef(null);
  const emailRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);

  const contactInView = useInView(contactRef, { once: false, amount: 0.2 });
  const emailInView = useInView(emailRef, { once: false, amount: 0.3 });
  const linkedinInView = useInView(linkedinRef, { once: false, amount: 0.3 });
  const githubInView = useInView(githubRef, { once: false, amount: 0.3 });

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="contact-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 30 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          I'm looking for new grad roles in AI, software engineering, and automation. Let's connect!
        </motion.p>

        <div className="contact-links">
          <motion.a
            ref={emailRef}
            href="mailto:ahmem73@mcmaster.ca"
            className="contact-item"
            initial={{ opacity: 0, y: 50 }}
            animate={emailInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/gmail.svg" alt="Email" className="contact-icon" />
            <div className="contact-info">
              <h3 className="contact-label">Email</h3>
              <p className="contact-value">ahmem73@mcmaster.ca</p>
            </div>
          </motion.a>

          <motion.a
            ref={linkedinRef}
            href="https://www.linkedin.com/in/mahad25ahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            initial={{ opacity: 0, y: 50 }}
            animate={linkedinInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="contact-icon" />
            <div className="contact-info">
              <h3 className="contact-label">LinkedIn</h3>
              <p className="contact-value">linkedin.com/in/mahad25ahmed</p>
            </div>
          </motion.a>

          <motion.a
            ref={githubRef}
            href="https://github.com/MahadAhmed25"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            initial={{ opacity: 0, y: 50 }}
            animate={githubInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/github.svg" alt="GitHub" className="contact-icon" />
            <div className="contact-info">
              <h3 className="contact-label">GitHub</h3>
              <p className="contact-value">github.com/MahadAhmed25</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

