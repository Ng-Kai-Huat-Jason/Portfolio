import React from "react";

const Skills = () => {
  const skills = {
    "Frontend Development": ["React", "Tailwind CSS", "HTML", "CSS"],
    "Backend Development": ["Node.js"],
    "Programming Languages": ["JavaScript","C++"],
    "Tools & Technologies": ["Figma","Github"],
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary">Skills</h2>
        <div className="mt-8 space-y-8">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center">
                {skillsList.map((skill, index) => (
                  <div
                    key={index}
                    className="m-2 px-4 py-2 bg-primary text-background rounded-lg shadow-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;