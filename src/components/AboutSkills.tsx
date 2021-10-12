import * as React from "react";
import { AboutSectionSkillsProps } from "../types";
import IconWithLabel from "./IconWithLabel";

const AboutSkills: React.FC<AboutSectionSkillsProps> = ({ skills }) => {
  return (
    <>
      <h2 className="mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center md:justify-start">
        {skills.map(({ id, color, icon, name }) => (
          <IconWithLabel
            key={id}
            className={`skill ${id}`}
            iconBgColor={color}
            siIcon={icon}
            label={name}
          />
        ))}
      </div>
    </>
  );
};

export default AboutSkills;
