import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function About() {
  const aboutSectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const aboutSectionInView = useInView(aboutSectionRef, { once: true, amount: 0.2 });
  const card1InView = useInView(card1Ref, { once: true, amount: 0.3 });
  const card2InView = useInView(card2Ref, { once: true, amount: 0.3 });
  const card3InView = useInView(card3Ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="about-section" ref={aboutSectionRef}>
      <div className="about-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={aboutSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          My <span className="gradient-text">Focus</span>
        </motion.h2>
        
        <div className="focus-list">
          <motion.div
            ref={card1Ref}
            className="focus-item"
            initial={{ opacity: 0, x: -50 }}
            animate={card1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="focus-number">01</div>
            <div className="focus-content">
              <h3 className="card-title">Production-Grade Engineering</h3>
              <p className="card-text">
                I focus on building software that holds up in real environments. From backend services to automation frameworks, I care about reliability, maintainability, and correctness. I've worked on systems that ship, run continuously, and support real workflows—not just demos.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={card2Ref}
            className="focus-item"
            initial={{ opacity: 0, x: -50 }}
            animate={card2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="focus-number">02</div>
            <div className="focus-content">
              <h3 className="card-title">Automation & Systems Thinking</h3>
              <p className="card-text">
                I enjoy designing systems that reduce manual work and scale efficiently. Through internships and startup projects, I've built CI/CD pipelines, automated test frameworks, and tooling that improves developer velocity while maintaining high quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={card3Ref}
            className="focus-item"
            initial={{ opacity: 0, x: -50 }}
            animate={card3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="focus-number">03</div>
            <div className="focus-content">
              <h3 className="card-title">Applied AI with Strong Fundamentals</h3>
              <p className="card-text">
                I work with AI when it meaningfully improves a product. I've built AI-powered applications and pipelines with an emphasis on clean architecture, data flow, and integration into existing systems. I prioritize practical impact over hype.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

