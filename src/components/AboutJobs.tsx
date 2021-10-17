import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AboutSectionJobsProps } from "../types";

const AboutJobs: React.FC<AboutSectionJobsProps> = ({ jobs }) => {
  return (
    <>
      <h2 className="mt-8 mb-4">Experience</h2>
      <div className="text-left">
        {jobs.map((job) => {
          const { id, title, subtitle, description, image } = job;
          const imageData = getImage(image.src.childImageSharp.gatsbyImageData);
          return (
            <div
              key={id}
              className="flex py-4 border-t border-gray-200 border-solid first:border-t-0"
            >
              <div className="pr-4">
                {imageData ? (
                  <GatsbyImage
                    image={imageData}
                    alt={image.alt}
                    className="w-14 rounded-full overflow-hidden rounded-image-ios"
                  />
                ) : null}
              </div>
              <div>
                <h2 className="text-xl font-normal pb-0.5 leading-tight">
                  {title}
                </h2>
                <h3 className="mb-2 font-light tracking-wider">{subtitle}</h3>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutJobs;
