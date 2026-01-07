import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Hero() {
  const universityRef = useRef(null);
  const taglineRef = useRef(null);
  const bioRef = useRef(null);
  const buttonRef = useRef(null);

  const universityInView = useInView(universityRef, { once: true, amount: 0.3 });
  const taglineInView = useInView(taglineRef, { once: true, amount: 0.3 });
  const bioInView = useInView(bioRef, { once: true, amount: 0.3 });
  const buttonInView = useInView(buttonRef, { once: true, amount: 0.3 });

  return (
    <main className="hero-section">
      <div className="hero-content">
        <motion.div
          ref={universityRef}
          className="university-section"
          initial={{ opacity: 0, y: 30 }}
          animate={universityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <div className="university-info">
            <img 
              src="/mcmaster-logo.png" 
              alt="McMaster University" 
              className="mcmaster-logo"
            />
            <span className="student-text">Software Engineering Graduate</span>
          </div>
        </motion.div>
        
        <motion.h2 
          ref={taglineRef}
          className="tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={taglineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          Engineering <span className="gradient-text">production-grade software</span> at the intersection of <span className="gradient-text">AI and systems</span>.
        </motion.h2>
        
        <motion.p 
          ref={bioRef}
          className="bio"
          initial={{ opacity: 0, y: 30 }}
          animate={bioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          Software engineering student at McMaster University with hands-on experience building scalable automation, backend systems, and applied AI.
        </motion.p>
        
        <motion.button 
          ref={buttonRef}
          className="cta-button"
          initial={{ opacity: 0, y: 30 }}
          animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View My Work</span>
          <div className="button-glow"></div>
        </motion.button>
      </div>
    </main>
  );
}

export default Hero;

