import { ImageDataLike } from "gatsby-plugin-image";
import { PageProps } from "gatsby";
import React from "react";
import { IconType } from "react-icons";

export interface Skill {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Social {
  id: string;
  name: string;
  icon: string;
  url: string;
  bgcolor: string;
  iconcolor: string;
}

export interface Job {
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

export interface Project {
  id: string;
  headline: string;
  github_url: string;
  image_thumbnail: {
    alt: string;
    src: {
      childImageSharp: {
        gatsbyImageData: ImageDataLike;
      };
    };
  };
}
export interface IndexPageProps extends PageProps {
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
    projects: {
      nodes: Project[];
    };
  };
}

export interface HeroSectionProps {
  socials: Social[];
}

export interface AboutSectionProps {
  skills: Skill[];
  jobs: Job[];
}
export interface AboutSectionSkillsProps {
  skills: Skill[];
}
export interface AboutSectionJobsProps {
  jobs: Job[];
}
export interface ProjectsSectionProps {
  projects: Project[];
}

export interface IconAndTextProps {
  label: string;
  siIcon: string | IconType;
  iconColor?: string;
  iconBgColor?: string;
}

export interface IconWithLabelProps
  extends IconAndTextProps,
    React.HTMLAttributes<HTMLSpanElement> {
  bgColor?: string;
}

export interface IconButtonProps
  extends IconAndTextProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  url: string;
  isExternal?: boolean;
  bgColor?: string;
}

export interface SeoProps {
  title?: string;
  description?: string;
}
