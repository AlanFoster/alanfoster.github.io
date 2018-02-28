import React from "react";
import Helmet from "react-helmet";
import styles from "./talks.module.css";

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

export default function({ data }) {
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
}

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
