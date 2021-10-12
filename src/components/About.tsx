import * as React from "react";
import { AboutSectionProps } from "../types";
import AboutInformation from "./AboutInformation";
import AboutJobs from "./AboutJobs";
import AboutSkills from "./AboutSkills";

const About: React.FC<AboutSectionProps> = ({ skills, jobs }) => {
  return (
    <div id="about" className="bg-gray-100">
      <div className="grid grid-cols-1 max-w-lg mx-auto text-center px-4 relative z-20 md:grid-cols-3 md:max-w-screen-lg md:text-left md:gap-x-6 md:auto-rows-fr">
        <div className="py-4 px-8 bg-white shadow-lg -mt-8 rounded-3xl md:-my-8">
          <AboutInformation />
        </div>
        <div className="py-4 px-8 bg-white shadow-lg mt-8 rounded-3xl md:-my-8 col-span-2">
          <AboutSkills skills={skills} />
          <AboutJobs jobs={jobs} />
        </div>
      </div>
    </div>
  );
};

export default About;
