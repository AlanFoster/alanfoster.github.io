import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "components/layouts/presentation";

let LoadedPresentation;

// Wrapper required to load Spectacle Presentation
// https://github.com/gatsbyjs/gatsby/issues/401
function WithoutServerSideRendering({ data }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(function () {
    setHasMounted(true);
    if (LoadedPresentation) return;

    // eslint-disable-next-line no-undef
    LoadedPresentation = require("./presentation").default;
  }, [hasMounted]);

  if (!hasMounted) {
    return <Layout />;
  }

  return (
    <Layout>
      <LoadedPresentation data={data} />
    </Layout>
  );
}

WithoutServerSideRendering.propTypes = {
  data: PropTypes.object
};

export default WithoutServerSideRendering;

export const query = graphql`
  query PostPresentationQuery($slug: String!) {
    content: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        workshop
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        slug
      }
      htmlAst
    }
  }
`;
