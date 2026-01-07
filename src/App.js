import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from 'lenis';
import Constellation from './Constellation';
import './App.css';

function App() {
  const universityRef = useRef(null);
  const taglineRef = useRef(null);
  const bioRef = useRef(null);
  const buttonRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const universityInView = useInView(universityRef, { once: true, amount: 0.3 });
  const taglineInView = useInView(taglineRef, { once: true, amount: 0.3 });
  const bioInView = useInView(bioRef, { once: true, amount: 0.3 });
  const buttonInView = useInView(buttonRef, { once: true, amount: 0.3 });
  const aboutSectionInView = useInView(aboutSectionRef, { once: true, amount: 0.2 });
  const card1InView = useInView(card1Ref, { once: true, amount: 0.3 });
  const card2InView = useInView(card2Ref, { once: true, amount: 0.3 });
  const card3InView = useInView(card3Ref, { once: true, amount: 0.3 });
  const techStackRef = useRef(null);
  const techStackInView = useInView(techStackRef, { once: false, amount: 0.2 });
  const languagesRef = useRef(null);
  const frameworksRef = useRef(null);
  const databasesRef = useRef(null);
  const toolsRef = useRef(null);
  
  const languagesInView = useInView(languagesRef, { once: false, amount: 0.3 });
  const frameworksInView = useInView(frameworksRef, { once: false, amount: 0.3 });
  const databasesInView = useInView(databasesRef, { once: false, amount: 0.3 });
  const toolsInView = useInView(toolsRef, { once: false, amount: 0.3 });

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Constellation />
      <motion.nav 
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mahad Ahmed
          </motion.div>
          <div className="nav-links">
            <a href="#about" className="nav-link">01. About</a>
            <a href="#experience" className="nav-link">02. Experience</a>
            <a href="#projects" className="nav-link">03. Projects</a>
            <a href="#contact" className="nav-link">04. Contact</a>
            <button className="nav-button">Get In Touch</button>
          </div>
        </div>
      </motion.nav>

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
          
          <div className="cards-grid">
            <motion.div
              ref={card1Ref}
              className="focus-card"
              initial={{ opacity: 0, y: 30 }}
              animate={card1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <h3 className="card-title">Production-Grade Engineering</h3>
              <p className="card-text">
                I focus on building software that holds up in real environments. From backend services to automation frameworks, I care about reliability, maintainability, and correctness. I've worked on systems that ship, run continuously, and support real workflows—not just demos.
              </p>
            </motion.div>

            <motion.div
              ref={card2Ref}
              className="focus-card"
              initial={{ opacity: 0, y: 30 }}
              animate={card2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <h3 className="card-title">Automation & Systems Thinking</h3>
              <p className="card-text">
                I enjoy designing systems that reduce manual work and scale efficiently. Through internships and startup projects, I've built CI/CD pipelines, automated test frameworks, and tooling that improves developer velocity while maintaining high quality.
              </p>
            </motion.div>

            <motion.div
              ref={card3Ref}
              className="focus-card"
              initial={{ opacity: 0, y: 30 }}
              animate={card3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <h3 className="card-title">Applied AI with Strong Fundamentals</h3>
              <p className="card-text">
                I work with AI when it meaningfully improves a product. I've built AI-powered applications and pipelines with an emphasis on clean architecture, data flow, and integration into existing systems. I prioritize practical impact over hype.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default App;
