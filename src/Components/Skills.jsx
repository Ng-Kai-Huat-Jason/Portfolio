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

import { ArrowDownFromLine, ArrowUpFromLine } from "lucide-react"; // Import Lucide icons

const Skills = () => {
  // Define a skills object that categorizes different skills
  const skills = {
    "Frontend Development": [
      { name: "React", image: reactLogo },
      { name: "Tailwind CSS (In Progress)", image: tailwindLogo },
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

  // Flatten the skills object into a single array
  const allSkills = Object.values(skills).flat();

  // State to manage whether the skills section is expanded or not
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills" className="py-20 bg-background text-center">
      <div className="container mx-auto px-4">
        {/* Skills section heading */}
        <h2 className="text-3xl font-bold text-primary">Skills</h2>
        <div className="mt-8">
          {/* Check when expanded or not and shows different skills*/}
          {!expanded ? (
            // Show a grid of 5 skills first when not expanded
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
            // Show all skills when expanded
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillsList]) => (
                <div key={category}>
                  {/* Category heading */}
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {category}
                  </h3>
                  {/* Grid of skills within the category */}
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
          {/* Button to toggle between expanded and collapsed view */}
          <div className="flex justify-center mt-6"> {/* Center the button */}
            <button
              className="px-6 py-2 bg-secondary text-background rounded-lg shadow-md hover:bg-opacity-80 transition-colors duration-300 flex items-center justify-center"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <ArrowUpFromLine className="w-5 h-5" /> // Icon for expanded state
              ) : (
                <ArrowDownFromLine className="w-5 h-5" /> // Icon for collapsed state
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;