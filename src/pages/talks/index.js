import * as styles from "./index.module.css";
import Layout from "components/layouts/main";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";

const Talk = function ({ frontmatter, html }) {
  return (
    <div className={styles.talk}>
      <div className={styles.date}>{frontmatter.date}</div>
      <a href={frontmatter.slides}>
        <h1>{frontmatter.title}</h1>
      </a>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

Talk.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired,
};

const Talks = function ({ data }) {
  if (!data)
    return (
      <Layout>
        <div>There are no talks</div>
      </Layout>
    );

  return (
    <Layout>
      <div>
        <Helmet title="Talks" />
        <h5>Talks</h5>
        {data.allMarkdownRemark.edges.map(function ({ node }) {
          return <Talk key={node.id} {...node} />;
        })}
      </div>
    </Layout>
  );
};

Talks.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Talks;

export const query = graphql`
  query TalksQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "talk" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slides
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`;
