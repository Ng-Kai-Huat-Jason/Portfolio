// Header.jsx
import React from "react";
import useActiveSection from "../hooks/useActiveSection";
import { Link } from "react-scroll";

const Header = () => {
  const sections = ["about", "projects", "skills", "contact"];
  const activeSection = useActiveSection(sections);

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Name above navbar */}
      <div className="w-full text-center py-10 pb-5">
        <h1 className="font-roboto pl-5 font-bold text-4xl">Ng Kai Huat Jason</h1>
      </div>

      {/* Navigation bar */}
      <nav className="container mx-auto px-6 py-2 pb-5">
        <ul className="flex justify-center space-x-10">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100} // Increased offset to account for taller header
                duration={500}
                className={`font-roboto text-lg hover:text-purple-600 transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-purple-600"
                    : "text-gray-700"
                }`}
              >
                {item.label}

                {/* Animated underline */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-purple-600 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;