import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/projects";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section, header.hero");
      let current = "#home";
      sections.forEach((section) => {
        if (window.scrollY >= section.getBoundingClientRect().top + window.scrollY - 120) {
          current = `#${section.id}`;
        }
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`} id="mainNav">
      <div className="nav__inner container">
        <a className="nav__brand" href="#home" onClick={() => handleNavClick("#home")}>
          Tanner Smith
        </a>

        <button
          className="nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={`nav__link ${active === link.href ? "active" : ""}`}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    className="nav__indicator"
                    layoutId="nav-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
