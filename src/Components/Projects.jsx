import React, { useState } from "react";
import BannerBiteLogo from "../images/BannerBites.png"; // Import the image
import GenshinImpactLogo from "../images/GenshinImpact.png"; // Import the image
import Error404 from "../images/Error404.png"; // Import the placeholder image
import Popup from "./Popup"; // Import the Popup component
import SkillForgeLogo from "../images/skillforgeLogo.png"; // Import the image
import PocketPlanLogo from "../images/pocketplanLogo.png"; // Import the image
import nutriaidLogo from "../images/nutriaidLogo.png"; // Import the image

const Projects = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const projects = [
    {
      title: "BannerBites",
      image: BannerBiteLogo,
      description:
        "BannerBites is a web application for managing advertisements dynamically with real-time updates. The project utilizes a React.js frontend, a Node.js backend, and AWS DynamoDB/S3 Bucket for data storage with WebSocket support.",
      githubLink: "https://github.com/Koyonari/BannerBites_FSDIT03",
      demoLink: "https://youtu.be/pAA6HHHId9w",
      type: "github",
    },
    {
      title: "GenshinPromo",
      image: GenshinImpactLogo,
      description:
        'GenshinPromo is a collaborative work between MiHoYo and our company to promote official "Genshin Impact" branded merchandise as well as the "Genshin Impact" videogame to potential returning players and new players.',
      githubLink:
        "https://github.com/Ng-Kai-Huat-Jason/FED_GenshinPromo_website",
      demoLink:
        "https://drive.google.com/file/d/1wCEsWRCG7IbrVyfCfRt2HEUQlJSkP1z4/view?usp=sharing",
      type: "github",
    },
    {
      title: "NutriAid",
      image: nutriaidLogo,
      description:
        "NutriAid is a web application designed to bridge the gap between underprivileged individuals and volunteers willing to provide food aid.",
      githubLink: "https://github.com/Koyonari/BED2024Apr_P03_T05",
      demoLink: "https://www.youtube.com/watch?v=RLlnlZ1mpVU",
      type: "github",
    },
    {
      title: "SkillForge",
      image: SkillForgeLogo,
      description:
        "SkillForge aims to combat the issue of underemployment in Singapore directly, by empowering users to seek out learning opportunities, certifications and job vacancies based on their newly acquired or enhanced digital skills.",
      githubLink:
        "https://www.figma.com/design/sg3rw7WfjFikKCQphJtYsr/DUX_Assignment-1_Ng-Kai-Huat-Jason?node-id=0-1&t=70Bswq0PybaS3KGk-1",
      demoLink: "#", // No demo available
      type: "figma",
    },
    {
      title: "PocketPlan",
      image: PocketPlanLogo,
      description:
        "PocketPlan will be an application with comprehensive functionality across budgeting, tracking and analytics. Enhanced with gamified features, PocketPlan not only helps users manage their finances but also promotes financial literacy and discipline in a fun, engaging way.",
      githubLink:
        "https://www.figma.com/design/1Yy6RRCdoaGxmd8EDbGFtj/Vanguard_DUX_Asg2_Prototype?node-id=0-1&t=PwSWTCYrQKyLFnum-1",
      demoLink: "#", // No demo available
      type: "figma",
    },
  ];

  // Function to handle demo link click
  const handleDemoClick = (demoLink) => {
    if (demoLink === "#") {
      setShowPopup(true); // Show popup if no demo is available
    } else {
      window.open(demoLink, "_blank"); // Open demo link in a new tab
    }
  };

  return (
    <section id="projects" className="py-20 pt-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-background">
          Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer 
             transition-transform duration-300 transform hover:scale-105 flex flex-col"
            >
              {/* Project Image */}
              <div className="flex justify-center">
                <img
                  src={project.image || Error404}
                  alt={project.title}
                  className="rounded-2xl w-full h-48 object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="mt-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-black flex-1">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.githubLink}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.type === "github" ? "Github" : "View on Figma"}{" "}
                    {/* Dynamic link text */}
                  </a>
                  <button
                    onClick={() => handleDemoClick(project.demoLink)}
                    className="ml-4 text-accent hover:underline"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup for no demo available */}
      {showPopup && (
        <Popup
          message="No Demo Available"
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  );
};

export default Projects;
