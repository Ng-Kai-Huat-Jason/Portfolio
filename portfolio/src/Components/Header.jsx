import React from "react";

const Header = () => {
  return (
    <header className="bg-background text-primary py-10 text-center sticky top-0 z-50 border-solid border-b-2 border-black">
      <h1 className="text-4xl font-bold">Ng Kai Huat Jason</h1>

      <nav className="mt-8 text-black text-xl font-bold">
        <a href="#about" className="mx-6 hover:text-accent transition duration-500">
          About Me
        </a>
        <a href="#projects" className="mx-6 hover:text-accent transition duration-500">
          Projects
        </a>
        <a href="#skills" className="mx-6 hover:text-accent transition duration-500">
          Skills
        </a>
        <a href="#contact" className="mx-6 hover:text-accent transition duration-500">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;