import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styles from "./index.module.css";

const Talk = function({ frontmatter, html }) {
  return (
    <div className={styles.talk}>
      <div className={styles.date}>{frontmatter.date}</div>
      <a href={frontmatter.slides}>
        <h2>{frontmatter.title}</h2>
      </a>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

Talk.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired
};

const Talks = function({ data }) {
  if (!data) return <div>There are no talks</div>;

  return (
    <div>
      <Helmet title="Talks" />
      <h5>Talks</h5>
      {data.allMarkdownRemark.edges.map(function({ node }) {
        return <Talk key={node.id} {...node} />;
      })}
    </div>
  );
};

Talks.propTypes = {
  data: PropTypes.object.isRequired
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
