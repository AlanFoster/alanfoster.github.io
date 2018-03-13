import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const Workshop = ({ data }) => {
  const workshop = data.markdownRemark;
  return (
    <div>
      <Helmet title={workshop.frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: workshop.html }} />
    </div>
  );
};

Workshop.propTypes = {
  data: PropTypes.object
};

export default Workshop;

export const query = graphql`
  query WorkshopQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
