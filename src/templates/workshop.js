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

// https://glyph.smarticons.co/
const ProjectorIcon = () => (
  <svg viewBox="0 0 17 17" width="17" height="17">
    <g>
      <g>
        <path d="M15.443,9.06 L14.002,10.004 L14.002,12.993 L15.443,13.937 C15.73,13.937 15.964,13.578 15.964,13.138 L15.964,9.86 C15.964,9.419 15.73,9.06 15.443,9.06 L15.443,9.06 Z" />
        <path d="M8.986,5.975 C10.623,5.975 11.953,4.639 11.953,2.992 C11.953,1.343 10.623,0.008 8.986,0.008 C7.346,0.008 6.017,1.343 6.017,2.992 C6.018,4.639 7.347,5.975 8.986,5.975 L8.986,5.975 Z M8.986,0.972 C10.094,0.972 10.992,1.877 10.992,2.992 C10.992,4.108 10.095,5.012 8.986,5.012 C7.875,5.012 6.977,4.109 6.977,2.992 C6.978,1.877 7.875,0.972 8.986,0.972 L8.986,0.972 Z" />
        <path d="M2.508,5.987 C3.875,5.987 4.985,4.879 4.985,3.511 C4.985,2.145 3.876,1.036 2.508,1.036 C1.14,1.036 0.031,2.144 0.031,3.511 C0.031,4.879 1.141,5.987 2.508,5.987 L2.508,5.987 Z M2.508,2.011 C3.337,2.011 4.01,2.683 4.01,3.512 C4.01,4.341 3.337,5.014 2.508,5.014 C1.68,5.014 1.006,4.341 1.006,3.512 C1.006,2.683 1.68,2.011 2.508,2.011 L2.508,2.011 Z" />
        <path d="M11.549,7.059 L1.414,7.059 C0.633,7.059 0,7.715 0,8.524 L0,14.537 C0,15.346 0.633,16.001 1.414,16.001 L11.549,16.001 C12.33,16.001 12.964,15.346 12.964,14.537 L12.964,12.971 L12.964,10.236 L12.964,8.525 C12.964,7.715 12.33,7.059 11.549,7.059 L11.549,7.059 Z" />
      </g>
    </g>
  </svg>
);

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

      <div dangerouslySetInnerHTML={{ __html: workshop.html }} />

      <div className={styles.navigation}>
        {previous && (
          <Link
            to={previous}
            className={`btn btn-outline-secondary ${styles.previous}`}
          >
            &lt; Previous
          </Link>
        )}

        {next && (
          <Link
            to={next}
            className={`btn btn-outline-secondary ${styles.next}`}
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
