import React from "react";

const Skills = () => {
  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Git",
    "HTML",
    "CSS",
  ];

  return (
    <section id="skills" className="py-20 bg-vintage-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-vintage-blue">Skills</h2>
        <div className="mt-8 flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="m-2 px-4 py-2 bg-vintage-blue text-vintage-cream rounded-lg shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;