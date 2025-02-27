import React from "react";

const Footer = () => {
  return (
    <footer className="bg-vintage-blue text-vintage-cream py-8 text-center">
      <p>&copy; {new Date().getFullYear()} Ng Kai Huat Jason. All rights reserved.</p>
      <div className="mt-4">
        <a href="https://github.com/your-username" className="mx-2 hover:text-vintage-orange">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-username" className="mx-2 hover:text-vintage-orange">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;