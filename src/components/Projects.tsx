import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { ProjectsSectionProps } from "../types";

const About: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div id="projects" className="bg-gray-100 pt-8 pb-20 overflow-hidden">
      <div className="grid grid-cols-1 px-4 max-w-lg mx-auto text-center sm:max-w-full relative z-20 sm:text-left sm:grid-cols-3 sm:gap-x-4 md:gap-x-6 md:max-w-screen-lg">
        {projects.map(({ id, headline, image_thumbnail, github_url }) => {
          const imageData = getImage(
            image_thumbnail.src.childImageSharp.gatsbyImageData
          );
          return (
            <a
              key={id}
              href={github_url ? github_url : "#"}
              target="_blank"
              rel="norefferer"
              className="project-card"
            >
              <div className="overflow-hidden relative z-30 -mx-8">
                {imageData ? (
                  <GatsbyImage
                    image={imageData}
                    alt={image_thumbnail.alt}
                    className="project-image"
                  />
                ) : null}
              </div>
              <div className="relative z-30 project-details">
                <h2 className="pb-2 pt-4 sm:text-lg md:text-2xl">{headline}</h2>
                <h3>View Project Details</h3>
              </div>
              <div className="absolute left-0 top-0 h-full w-full bg-white z-20 rounded-3xl"></div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default About;
