import React from "react";
import PropTypes from "prop-types";

let LoadedPresentation;

// Wrapper required to load Spectacle Presentation
// https://github.com/gatsbyjs/gatsby/issues/401
class WithoutServerSideRendering extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      hasMounted: false
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    LoadedPresentation = require("./presentation");
    this.setState({ hasMounted: true });
  }

  render() {
    if (!this.state.hasMounted) {
      return <div />;
    }

    return <LoadedPresentation data={this.props.data} />;
  }
}

WithoutServerSideRendering.propTypes = {
  data: PropTypes.object
};

export default WithoutServerSideRendering;

export const query = graphql`
  query WorkshopPresentationQuery(
    $workshopRegex: String!
    $overviewPathRegex: String!
    $sidebarPath: String!
  ) {
    overview: markdownRemark(fileAbsolutePath: { regex: $overviewPathRegex }) {
      fileAbsolutePath
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

    sidebar: file(relativePath: { eq: $sidebarPath }) {
      fields {
        yml {
          items {
            title
            link
          }
        }
      }
    }

    content: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: $workshopRegex } } }
    ) {
      edges {
        node {
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
    }
  }
`;
