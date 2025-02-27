// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-dark text-vintage-cream py-10 text-center">
      <h1 className="text-4xl font-bold">Ng Kai Huat Jason</h1>
      <p className="mt-4 text-lg">A Chill Guy</p>

      <nav className="mt-8">
        <a href="#about" className="mx-4 hover:text-vintage-orange transition duration-300">
          About Me
        </a>
        <a href="#projects" className="mx-4 hover:text-vintage-orange transition duration-300">
          Projects
        </a>
        <a href="#skills" className="mx-4 hover:text-vintage-orange transition duration-300">
          Skills
        </a>
        <a href="#contact" className="mx-4 hover:text-vintage-orange transition duration-300">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;