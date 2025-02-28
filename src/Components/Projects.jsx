import React from "react";
import BannerBiteLogo from "../images/BannerBites.png"; // Import the image
import GenshinImpactLogo from "../images/GenshinImpact.png"; // Import the image
import Error404 from "../images/Error404.png"; // Import the placeholder image

const Projects = () => {
  const projects = [
    {
      title: "BannerBites",
      image: BannerBiteLogo,
      description:
        "BannerBites is a web application for managing advertisements dynamically with real-time updates.",
      githubLink: "https://github.com/Koyonari/BannerBites_FSDIT03",
      demoLink: "#",
    },
    {
      title: "GenshinPromo",
      image: GenshinImpactLogo,
      description: "Front-end web application for a Genshin Impact fan site.",
      githubLink:
        "https://github.com/Ng-Kai-Huat-Jason/FED_GenshinPromo_website",
      demoLink: "#",
    },
    {
      title: "Dummy Project",
      description: "Dummy project description",
      githubLink: "https://roblox.com/",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-background">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 flex flex-col"
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
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                <p className="mt-2 text-black flex-1">
                  {project.description}
                </p>
                <div className="mt-4">
                  <a
                    href={project.githubLink}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="ml-4 text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;