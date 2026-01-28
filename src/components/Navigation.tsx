import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import mcmasterLogo from "@/assets/mcmaster-logo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#" className="text-heading shrink-0">
          Mahad Ahmed
        </a>

        {/* Centered Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-sm px-2 py-1.5 rounded-full border border-border">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-small px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* McMaster Logo */}
        <a
          href="https://www.mcmaster.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block shrink-0 opacity-70 hover:opacity-100 transition-opacity"
        >
          <img
            src={mcmasterLogo}
            alt="McMaster University"
            className="h-10 md:h-12"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-subtle-border"
          >
            <ul className="container-wide py-6 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-body py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 flex justify-center">
                <a
                  href="https://www.mcmaster.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70"
                >
                  <img
                    src={mcmasterLogo}
                    alt="McMaster University"
                    className="h-10"
                  />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
