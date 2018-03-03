import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styles from "./index.module.css";

const Workshop = function({ frontmatter, fields, html }) {
  return (
    <div className={styles.workshop}>
      <div className={styles.date}>{frontmatter.date}</div>
      <Link to={frontmatter.workshop}>
        <h2>{frontmatter.title}</h2>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

Workshop.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired
};

const Workshops = function({ data }) {
  if (!data) return <div>There are no workshops</div>;

  return (
    <div>
      <Helmet title="Talks" />
      <h5>Workshops</h5>
      {data.allMarkdownRemark.edges.map(function({ node }) {
        return <Workshop key={node.id} {...node} />;
      })}
    </div>
  );
};

Workshops.propTypes = {
  data: PropTypes.object.isRequired
};

export default Workshops;

export const query = graphql`
  query WorkshopsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "workshop" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            workshop
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
