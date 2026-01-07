import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function TechStack() {
  const techStackRef = useRef(null);
  const languagesRef = useRef(null);
  const frameworksRef = useRef(null);
  const databasesRef = useRef(null);
  const toolsRef = useRef(null);
  
  const techStackInView = useInView(techStackRef, { once: false, amount: 0.2 });
  const languagesInView = useInView(languagesRef, { once: false, amount: 0.3 });
  const frameworksInView = useInView(frameworksRef, { once: false, amount: 0.3 });
  const databasesInView = useInView(databasesRef, { once: false, amount: 0.3 });
  const toolsInView = useInView(toolsRef, { once: false, amount: 0.3 });

  return (
    <section className="techstack-section" ref={techStackRef}>
      <div className="techstack-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={techStackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          My <span className="gradient-text">Stack</span>
        </motion.h2>

        <div className="techstack-grid">
          <motion.div 
            ref={languagesRef}
            className="tech-category"
            initial={{ opacity: 0, y: 50 }}
            animate={languagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <h3 className="category-title">Languages</h3>
            <div className="tech-items">
              <span className="tech-item">
                <img src="/python.svg" alt="Python" className="tech-icon" />
                Python
              </span>
              <span className="tech-item">
                <img src="/java.svg" alt="Java" className="tech-icon" />
                Java
              </span>
              <span className="tech-item">
                <img src="/javascript.svg" alt="JavaScript" className="tech-icon" />
                JavaScript
              </span>
              <span className="tech-item">
                <img src="/cpp.svg" alt="C++" className="tech-icon" />
                C++
              </span>
            </div>
          </motion.div>

          <motion.div 
            ref={frameworksRef}
            className="tech-category"
            initial={{ opacity: 0, y: 50 }}
            animate={frameworksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <h3 className="category-title">Frameworks</h3>
            <div className="tech-items">
              <span className="tech-item">
                <img src="/react.svg" alt="React" className="tech-icon" />
                React
              </span>
              <span className="tech-item">
                <img src="/expressjs.svg" alt="Express.js" className="tech-icon" />
                Express.js
              </span>
              <span className="tech-item">
                <img src="/pytorch.svg" alt="PyTorch" className="tech-icon" />
                PyTorch
              </span>
              <span className="tech-item">
                <img src="/scikit-learn.svg" alt="scikit-learn" className="tech-icon" />
                scikit-learn
              </span>
              <span className="tech-item">
                <img src="/numpy.svg" alt="NumPy" className="tech-icon" />
                NumPy
              </span>
              <span className="tech-item">
                <img src="/pandas.svg" alt="pandas" className="tech-icon" />
                pandas
              </span>
            </div>
          </motion.div>

          <motion.div 
            ref={databasesRef}
            className="tech-category"
            initial={{ opacity: 0, y: 50 }}
            animate={databasesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <h3 className="category-title">Databases</h3>
            <div className="tech-items">
              <span className="tech-item">
                <img src="/postgresql.svg" alt="PostgreSQL" className="tech-icon" />
                PostgreSQL
              </span>
              <span className="tech-item">
                <img src="/mysql.svg" alt="MySQL" className="tech-icon" />
                MySQL
              </span>
              <span className="tech-item">
                <img src="/mongodb.svg" alt="MongoDB" className="tech-icon" />
                MongoDB
              </span>
            </div>
          </motion.div>

          <motion.div 
            ref={toolsRef}
            className="tech-category"
            initial={{ opacity: 0, y: 50 }}
            animate={toolsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <h3 className="category-title">Tools</h3>
            <div className="tech-items">
              <span className="tech-item">
                <img src="/git.svg" alt="Git" className="tech-icon" />
                Git
              </span>
              <span className="tech-item">
                <img src="/docker.svg" alt="Docker" className="tech-icon" />
                Docker
              </span>
              <span className="tech-item">
                <img src="/aws.svg" alt="AWS" className="tech-icon" />
                AWS
              </span>
              <span className="tech-item">
                <img src="/jira.svg" alt="Jira" className="tech-icon" />
                Jira
              </span>
              <span className="tech-item">
                <img src="/jenkins.svg" alt="Jenkins" className="tech-icon" />
                Jenkins
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;

