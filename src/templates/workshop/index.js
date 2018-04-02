import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import ProjectorIcon from "./components/projector-icon";
import HtmlRenderer from "./components/html-renderer";

import styles from "./index.module.css";

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

      <a
        className={styles.viewPresentation}
        href={`/workshops/jest/presentation/#${encodeURIComponent(
          workshop.fields.slug
        )}`}
      >
        <ProjectorIcon />
      </a>

      <HtmlRenderer ast={workshop.htmlAst} />

      <div className={styles.navigation}>
        <span>
          {previous && (
            <Link
              to={previous}
              className={`btn btn-outline-secondary ${styles.previous}`}
            >
              &lt; Previous
            </Link>
          )}
        </span>

        <span>
          {next && (
            <Link
              to={next}
              className={`btn btn-outline-secondary ${styles.next}`}
            >
              Next &gt;
            </Link>
          )}
        </span>
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
      htmlAst
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
