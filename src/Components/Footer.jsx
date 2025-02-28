import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-background py-8 text-center">
      <p>&copy; {new Date().getFullYear()} Ng Kai Huat Jason. All rights reserved.</p>
      <div className="mt-4">
        <a href="https://github.com/your-username" className="mx-2 hover:text-accent">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-username" className="mx-2 hover:text-accent">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;