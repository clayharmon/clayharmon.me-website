import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { HeroSectionProps } from "../types";
import IconButton from "./IconButton";

const Hero: React.FC<HeroSectionProps> = ({ socials }) => {
  return (
    <div
      id="hero"
      className="bg-accent text-white py-32 md:py-56 relative z-10"
    >
      <div className="grid grid-cols-1 max-w-lg mx-auto text-center px-4 md:grid-cols-4 lg:grid-cols-3 md:max-w-screen-lg md:text-left">
        <div>
          <StaticImage
            className="w-40 rounded-full overflow-hidden shadow-xl mx-auto my-4 md:w-42 lg:w-52"
            src="../images/clayharmon-profile.jpg"
            alt="Clay Harmon"
            layout="fullWidth"
          />
        </div>
        <div className="md:col-span-3 lg:col-span-2">
          <h1 className="py-3 text-shadow lg:py-6 lg:text-5xl">
            Hi, I'm Clay Harmon.👋
          </h1>
          <p className="text-md text-shadow font-light md:text-lg lg:text-2xl">
            I’m a full stack software engineer, ESL instructor, and
            ultra-marathon runner 🏃‍♂️💨. I am passionate about using my skills
            (technical and non-technical) to help solve problems for others and
            allow them to achieve their goals. I am currently in love with
            React.
          </p>
          <div className="mt-4">
            {socials.map(({ id, name, icon, url, bgcolor, iconcolor }) => (
              <IconButton
                key={id}
                isExternal={true}
                url={url}
                className="link"
                label={name}
                siIcon={icon}
                bgColor={bgcolor}
                iconBgColor={iconcolor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
