import { graphql } from "gatsby";
import * as React from "react";

import { IndexPageProps } from "../types";
import Layout from "../layout/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

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

const IndexPage = (props: IndexPageProps) => {
  const socials = props.data.socials.nodes;
  const skills = props.data.skills.nodes;
  const jobs = props.data.jobs.nodes;
  return (
    <Layout>
      <Hero socials={socials} />
      <About skills={skills} jobs={jobs} />
    </Layout>
  );
};

export default IndexPage;
