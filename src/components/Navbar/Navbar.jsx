import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();


  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setIsScrolled(current > 40);

      if (current < 80) {
        setShowNavbar(true);
      } else {
        if (current < lastScroll) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#contact" },
  ];

  return (
    <header
      className={`navbar-wrapper ${showNavbar ? "navbar-show" : "navbar-hide"
        }`}
    >
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <a href="#home" className="navbar-logo">
          Divyam Bansal
        </a>

        <div className="navbar-links">
          {links.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>

        <div className="navbar-right">

          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <FiSun size={18} />
            ) : (
              <FiMoon size={18} />
            )}
          </button>


          <button
            className="mobile-btn"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenu ? "open" : ""}`}>
        {links.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMobileMenu(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}