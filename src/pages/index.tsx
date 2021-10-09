import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../layout/Layout";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import {
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiWordpress,
} from "react-icons/si";
const IndexPage = () => {
  return (
    <Layout>
      <div id="about" className="bg-accent text-white py-32 md:py-56">
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
            <h1 className="py-3 text-shadow">Hi, I'm Clay Harmon.</h1>
            <p className="text-md text-shadow font-light md:text-lg lg:text-xl">
              I’m a full stack software engineer, ESL instructor, and
              ultra-marathon runner. I am passionate about using my skills
              (technical and non-technical) to help solve problems for others
              and allow them to achieve their goals. I am currently in love with
              React.
            </p>
            <div className="mt-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/clayharmon"
                className="link github"
              >
                <span className="icon">
                  <FaGithub />
                </span>
                <span>Github</span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/johncharmon/"
                className="link linkedin"
              >
                <span className="icon">
                  <FaLinkedinIn />
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/clayhermon"
                className="link twitter"
              >
                <span className="icon">
                  <FaTwitter />
                </span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="grid grid-cols-1 max-w-lg mx-auto text-center px-4 md:grid-cols-3 md:max-w-screen-lg md:text-left md:gap-x-6 md:auto-rows-fr">
          <div className="py-4 px-8 bg-white shadow-lg mt-8 md:-mt-8">
            <h2 className="mb-4">Information</h2>
            <div className="mb-3">
              <h3>Full Name</h3>
              <p>John Clayton Harmon</p>
            </div>
            <div className="mb-3">
              <h3>Education</h3>
              <p>
                Mississippi State University
                <br />
                B.S., Computer Science
              </p>
            </div>
            <div className="mb-3">
              <h3>Location</h3>
              <p>Charlottesville, VA</p>
            </div>
          </div>
          <div className="py-4 px-8 bg-white shadow-lg mt-8 md:-mt-8 col-span-2">
            <h2 className="mb-4">Skills</h2>
            <div className="flex flex-wrap justify-center md:justify-start">
              <span className="skill javascript">
                <span className="icon">
                  <SiJavascript />
                </span>
                <span>JavaScript</span>
              </span>
              <span className="skill nodejs">
                <span className="icon">
                  <SiNodedotjs />
                </span>
                <span>Node.js</span>
              </span>
              <span className="skill php">
                <span className="icon">
                  <SiPhp />
                </span>
                <span>PHP</span>
              </span>
              <span className="skill wordpress">
                <span className="icon">
                  <SiWordpress />
                </span>
                <span>WordPress</span>
              </span>
              <span className="skill reactjs">
                <span className="icon">
                  <SiReact />
                </span>
                <span>React.js</span>
              </span>
            </div>
            <h2 className="mt-4">Experience</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
