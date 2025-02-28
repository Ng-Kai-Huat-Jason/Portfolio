import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background text-primary py-8 text-center">
      <p>&copy; {new Date().getFullYear()} Ng Kai Huat Jason. All rights reserved.</p>
    </footer>
  );
};

export default Footer;