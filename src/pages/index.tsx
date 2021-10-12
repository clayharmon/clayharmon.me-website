import {
  GatsbyImage,
  getImage,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../layout/Layout";
import * as Icon from "react-icons/si";
import { IconType } from "react-icons";

export const query = graphql`
  query {
    skills: allSkillsJson {
      nodes {
        id
        name
        icon
        color
      }
    }
    socials: allSocialsJson {
      nodes {
        id
        name
        icon
        url
        bgcolor
        iconcolor
      }
    }
    jobs: allJobsJson {
      nodes {
        id
        title
        subtitle
        description
        image {
          alt
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

interface Skill {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface Social {
  id: string;
  name: string;
  icon: string;
  url: string;
  bgcolor: string;
  iconcolor: string;
}

interface Job {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    alt: string;
    src: {
      childImageSharp: {
        gatsbyImageData: ImageDataLike;
      };
    };
  };
}
interface IndexPageProps extends PageProps {
  data: {
    skills: {
      nodes: Skill[];
    };
    socials: {
      nodes: Social[];
    };
    jobs: {
      nodes: Job[];
    };
  };
}

const IndexPage = (props: IndexPageProps) => {
  const socials = props.data.socials.nodes;
  const skills = props.data.skills.nodes;
  const jobs = props.data.jobs.nodes;
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
              {socials.map((social) => {
                const { id, name, icon, url, bgcolor, iconcolor } = social;

                const IconComponent = (Icon as any)[icon] as IconType;
                return (
                  <a
                    key={id}
                    target="_blank"
                    rel="noreferrer"
                    href={url}
                    className="link"
                    style={{ backgroundColor: bgcolor }}
                  >
                    <span
                      className="icon"
                      style={{ backgroundColor: iconcolor }}
                    >
                      <IconComponent />
                    </span>
                    <span>{name}</span>
                  </a>
                );
              })}
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
              {skills.map((skill) => {
                const { id, color, icon, name } = skill;

                const IconComponent = (Icon as any)[icon] as IconType;
                return (
                  <span key={id} className={`skill ${id}`}>
                    <span className="icon" style={{ backgroundColor: color }}>
                      <IconComponent />
                    </span>
                    <span>{name}</span>
                  </span>
                );
              })}
            </div>
            <h2 className="mt-8 mb-4">Experience</h2>
            <div className="text-left">
              {jobs.map((job) => {
                const { id, title, subtitle, description, image } = job;
                const imageData = getImage(
                  image.src.childImageSharp.gatsbyImageData
                );
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
                          className="w-14 rounded-full overflow-hidden"
                        />
                      ) : null}
                    </div>
                    <div>
                      <h2 className="text-xl font-normal pb-0.5 leading-tight">
                        {title}
                      </h2>
                      <h3 className="mb-2 font-light tracking-wider">
                        {subtitle}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
