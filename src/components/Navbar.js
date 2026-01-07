import { motion } from 'framer-motion';

function Navbar() {
  return (
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
  );
}

export default Navbar;

