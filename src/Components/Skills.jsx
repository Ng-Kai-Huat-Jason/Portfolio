import React, { useState } from "react";
import reactLogo from "../images/reactLogo.svg";
import tailwindLogo from "../images/tailwindLogo.svg";
import csharpLogo from "../images/csharpLogo.svg";
import htmlLogo from "../images/htmlLogo.svg";
import cssLogo from "../images/cssLogo.svg";
import cplusLogo from "../images/c++Logo.svg";
import figmaLogo from "../images/figmaLogo.svg";
import githubLogo from "../images/githubLogo.svg";
import nodejsLogo from "../images/nodejsLogo.svg";
import javascriptLogo from "../images/javascriptLogo.svg";

const Skills = () => {
  const skills = {
    "Frontend Development": [
      { name: "React", image: reactLogo },
      { name: "Tailwind CSS", image: tailwindLogo },
      { name: "HTML", image: htmlLogo },
      { name: "CSS", image: cssLogo },
    ],
    "Backend Development": [{ name: "Node.js", image: nodejsLogo }],
    "Programming Languages": [
      { name: "JavaScript", image: javascriptLogo },
      { name: "C++", image: cplusLogo },
      { name: "C#", image: csharpLogo },
    ],
    "Tools & Technologies": [
      { name: "Figma", image: figmaLogo },
      { name: "Github", image: githubLogo },
    ],
  };

  const allSkills = Object.values(skills).flat();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills" className="py-20 bg-background text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary">Skills</h2>
        <div className="mt-8">
          {!expanded ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {allSkills.slice(0, 5).map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-primary text-background rounded-lg shadow-md flex flex-col items-center justify-center"
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillsList]) => (
                <div key={category}>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {skillsList.map((skill, index) => (
                      <div
                        key={index}
                        className="p-4 bg-primary text-background rounded-lg shadow-md flex flex-col items-center justify-center"
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-12 h-12 mb-2"
                        />
                        <span className="text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            className="mt-6 px-6 py-2 bg-secondary text-background rounded-lg shadow-md hover:bg-opacity-80 transition-colors duration-300"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Expand"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;