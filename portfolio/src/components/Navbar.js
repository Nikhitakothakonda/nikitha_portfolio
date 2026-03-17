import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Skills', 'Experience', 'Portfolio', 'Certifications', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        NK<span>.</span>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <button key={link} onClick={() => scrollTo(link)}>{link}</button>
        ))}
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </div>
    </nav>
  );
};

export default Navbar;
