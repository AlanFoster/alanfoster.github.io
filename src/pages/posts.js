import React from "react"
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Post = function({ id, frontmatter, excerpt, fields }) {
  return (
    <div>
      <h5>{frontmatter.date}</h5>
      <Link to={fields.slug}>
        <h2>{frontmatter.title}</h2>
      </Link>
      <div>{excerpt}</div>
    </div>
  );
};

export default function({ data }) {
  if (!data) return <div>There are no posts</div>;

  return (
    <div>
      <Helmet title="Posts" />
      {data.allMarkdownRemark.edges.map(function ({ node }) {
        return (
          <Post key={node.id} {...node} />
        );
      })}
    </div>
  );
}

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {category: {eq: "post"}}}) {
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
          excerpt
        }
      }
    }
  }
`;
