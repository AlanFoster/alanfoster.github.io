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
