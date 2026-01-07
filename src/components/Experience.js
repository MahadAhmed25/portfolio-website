import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Experience() {
  const experienceRef = useRef(null);
  const exp1Ref = useRef(null);
  const exp2Ref = useRef(null);
  const exp3Ref = useRef(null);
  
  const experienceInView = useInView(experienceRef, { once: false, amount: 0.2 });
  const exp1InView = useInView(exp1Ref, { once: false, amount: 0.3 });
  const exp2InView = useInView(exp2Ref, { once: false, amount: 0.3 });
  const exp3InView = useInView(exp3Ref, { once: false, amount: 0.3 });

  return (
    <section id="experience" className="experience-section" ref={experienceRef}>
      <div className="experience-container">
        <motion.h2 
          className="section-title experience-title"
          initial={{ opacity: 0, y: 30 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          My <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="experience-list">
          <motion.div
            ref={exp1Ref}
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            animate={exp1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="experience-header">
              <div className="company-info">
                <img src="/MES.png" alt="MacSync" className="company-logo" />
                <div>
                  <h3 className="company-name">MacSync</h3>
                  <p className="job-title">Software Engineer & Co-Founder</p>
                </div>
              </div>
              <span className="experience-date">2024 – Present</span>
            </div>
            <p className="experience-description">
              Co-built a full-stack event management platform for large university organizations, owning system design, backend APIs, and access control architecture.
            </p>
            <div className="experience-metrics">
              <div className="metric">
                <span className="metric-value">500+</span>
                <span className="metric-label">Attendees Served</span>
              </div>
              <div className="metric">
                <span className="metric-value">End-to-End</span>
                <span className="metric-label">System Design</span>
              </div>
              <div className="metric">
                <span className="metric-value">REST APIs</span>
                <span className="metric-label">Backend Architecture</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={exp2Ref}
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            animate={exp2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="experience-header">
              <div className="company-info">
                <img src="/CHRISTIE.svg" alt="Christie Digital Systems" className="company-logo christie-logo" />
                <div>
                  <h3 className="company-name">Christie Digital Systems</h3>
                  <p className="job-title">Automation Developer</p>
                </div>
              </div>
              <span className="experience-date">Sept 2024 – Aug 2025</span>
            </div>
            <p className="experience-description">
              Built and scaled Python-based QA automation for cinema projector software and embedded hardware. Focused on CI reliability, execution speed, and real-hardware validation.
            </p>
            <div className="experience-metrics">
              <div className="metric">
                <span className="metric-value">40%</span>
                <span className="metric-label">Faster Test Runs</span>
              </div>
              <div className="metric">
                <span className="metric-value">36%</span>
                <span className="metric-label">Efficiency Gain</span>
              </div>
              <div className="metric">
                <span className="metric-value">CI + Hardware</span>
                <span className="metric-label">Automation</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={exp3Ref}
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            animate={exp3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="experience-header">
              <div className="company-info">
                <img src="/CMIC.png" alt="CMiC" className="company-logo" />
                <div>
                  <h3 className="company-name">Computer Methods International Corp. (CMiC)</h3>
                  <p className="job-title">Software Engineer Intern</p>
                </div>
              </div>
              <span className="experience-date">May 2023 – Aug 2023</span>
            </div>
            <p className="experience-description">
              Improved quality and reliability of an enterprise web platform by building automated tests, enforcing code quality, and shipping internal developer tools.
            </p>
            <div className="experience-metrics">
              <div className="metric">
                <span className="metric-value">100+</span>
                <span className="metric-label">Automated Tests</span>
              </div>
              <div className="metric">
                <span className="metric-value">+70%</span>
                <span className="metric-label">Test Coverage</span>
              </div>
              <div className="metric">
                <span className="metric-value">20%</span>
                <span className="metric-label">Process Efficiency</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

