import React from "react";
import { Linkedin, Github, Mail } from "lucide-react"; // Import Lucide icons

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-background mb-8">
          Contact Me
        </h2>

        {/* Icons and Links */}
        <div className="flex justify-center space-x-8">
          {/* LinkedIn */}
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/ngkaihuatjason/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded hover:bg-background hover:bg-opacity-10 transition-colors duration-300"
            >
              <Linkedin className="w-12 h-12 mx-auto text-background" />
              <p className="mt-2 text-background">LinkedIn</p>
            </a>
          </div>

          {/* GitHub */}
          <div className="text-center">
            <a
              href="https://github.com/Ng-Kai-Huat-Jason"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded hover:bg-background hover:bg-opacity-10 transition-colors duration-300"
            >
              <Github className="w-12 h-12 mx-auto text-background" />
              <p className="mt-2 text-background">GitHub</p>
            </a>
          </div>

          {/* Gmail */}
          <div className="text-center">
            <a
              href="mailto:jasonngkh01@gmail.com"
              className="block p-4 rounded hover:bg-background hover:bg-opacity-10 transition-colors duration-300"
            >
              <Mail className="w-12 h-12 mx-auto text-background" />
              <p className="mt-2 text-background">Gmail</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;