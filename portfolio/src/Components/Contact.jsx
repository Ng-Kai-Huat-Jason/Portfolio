import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-background">Contact Me</h2>
        <p className="mt-4 text-background text-center">Feel free to reach out!</p>
        <div className="mt-8 text-center">
          <a href="mailto:jasonngkh01@gmail.com" className="text-background hover:underline">
            jasonngkh01@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;