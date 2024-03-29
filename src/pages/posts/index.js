import * as styles from "./index.module.css";
import Layout from "components/layouts/main";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";

const Post = function ({ frontmatter, excerpt, fields }) {
  return (
    <article className={styles.post}>
      <div className={styles.heading}>
        <Link to={fields.slug}>
          <h1 className={styles.title}>{frontmatter.title}</h1>
        </Link>
        <div className={styles.date}>{frontmatter.date}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </article>
  );
};

Post.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
};

const Posts = function ({ data }) {
  if (!data)
    return (
      <Layout>
        <div>There are no posts</div>
      </Layout>
    );

  return (
    <Layout>
      <div>
        <Helmet title="Posts" />
        <h5>Posts</h5>
        {data.allMarkdownRemark.edges.map(function ({ node }) {
          return <Post key={node.id} {...node} />;
        })}
      </div>
    </Layout>
  );
};

Posts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Posts;

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { eq: "post" }, published: { ne: false } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(format: HTML)
        }
      }
    }
  }
`;
