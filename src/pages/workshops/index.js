import * as styles from "./index.module.css";
import Layout from "components/layouts/main";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";

const Workshop = function ({ frontmatter, html }) {
  return (
    <div className={styles.workshop}>
      <div className={styles.date}>{frontmatter.date}</div>
      <Link to={frontmatter.workshop}>
        <h1>{frontmatter.title}</h1>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

Workshop.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired,
};

const Workshops = function ({ data }) {
  if (!data)
    return (
      <Layout>
        <div>There are no workshops</div>
      </Layout>
    );

  return (
    <Layout>
      <div>
        <Helmet title="Talks" />
        <h5>Workshops</h5>
        {data.allMarkdownRemark.edges.map(function ({ node }) {
          return <Workshop key={node.id} {...node} />;
        })}
      </div>
    </Layout>
  );
};

Workshops.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Workshops;

export const query = graphql`
  query WorkshopsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { eq: "workshop" }, published: { ne: false } }
      }
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
