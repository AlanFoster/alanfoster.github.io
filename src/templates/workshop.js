import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styles from "./workshop.module.css";

const getNavigation = function(sidebar, workshop) {
  const links = sidebar.fields.yml.items.map(item => item.link);
  const index = links.indexOf(workshop.fields.slug);

  return {
    previous: index <= 1 ? undefined : links[index - 1],
    next: links[index + 1]
  };
};

const Workshop = ({ data }) => {
  const { sidebar, workshop } = data;
  const { previous, next } = getNavigation(sidebar, workshop);

  return (
    <div>
      <Helmet title={workshop.frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: workshop.html }} />

      <div className={`clearfix ${styles.navigation}`}>
        {previous && (
          <Link
            to={previous}
            className={`btn btn-outline-secondary float-left ${
              styles.previous
            }`}
          >
            &lt; Previous
          </Link>
        )}
        {next && (
          <Link
            to={next}
            className={`btn btn-outline-secondary float-right ${styles.next}`}
          >
            Next &gt;
          </Link>
        )}
      </div>
    </div>
  );
};

Workshop.propTypes = {
  data: PropTypes.object
};

export default Workshop;

export const query = graphql`
  query WorkshopQuery($slug: String!) {
    sidebar: file(relativePath: { eq: "pages/workshops/jest/sidebar.yaml" }) {
      fields {
        yml {
          items {
            title
            link
          }
        }
      }
    }

    workshop: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      headings {
        value
      }
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
