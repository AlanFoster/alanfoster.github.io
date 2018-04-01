import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styles from "./index.module.css";

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Helmet title={post.frontmatter.title} />
      <div>
        <div className={styles.date}>{post.frontmatter.date}</div>
        <Link to={post.fields.slug}>
          <h1>{post.frontmatter.title}</h1>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
};

Post.propTypes = {
  data: PropTypes.object
};

export default Post;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        slug
      }
    }
  }
`;
