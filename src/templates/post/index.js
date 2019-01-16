import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Layout from "components/layouts/main";
import Helmet from "react-helmet";
import EditIcon from "components/edit-icon";
import ProjectorIcon from "components/projector-icon";
import styles from "./index.module.css";

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Helmet title={post.frontmatter.title} />
        <div>
          <div className={styles.date}>{post.frontmatter.date}</div>

          <a
            className={styles.quickLink}
            href={post.fields.editURL}
            target="_blank"
          >
            <EditIcon />
          </a>

          <a className={styles.quickLink} href="presentation/">
            <div className={styles.viewPresentation}>
              <ProjectorIcon />
            </div>
          </a>

          <Link to={post.fields.slug}>
            <h1>{post.frontmatter.title}</h1>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
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
        editURL
      }
    }
  }
`;
