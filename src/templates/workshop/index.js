import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { ComponentPlayground } from "spectacle";

import createTheme from "spectacle/lib/themes/default";

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

class ReactExample extends React.Component {
  getChildContext() {
    return {
      styles: theme.screen
    };
  }

  render() {
    return (
      <ComponentPlayground theme="dark" code={this.props.code.toString()} />
    );
  }
}

ReactExample.childContextTypes = {
  styles: PropTypes.object
};

import { Collapse } from "reactstrap";

class Spoilers extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onToggle = this.onToggle.bind(this);
    this.state = { isOpen: false };
  }

  onToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h5 className="card">
              <button className="btn btn-link" onClick={this.onToggle}>
                View Spoiler?
              </button>
            </h5>
          </div>

          <Collapse isOpen={this.state.isOpen}>
            <div className="card-wrapper">
              <div className="card-body">{this.props.children}</div>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

const rehype2react = require("rehype-react");
const visit = require("unist-util-visit");

const reactCompiler = new rehype2react({
  createElement: React.createElement,
  components: {
    "react-example": ReactExample,
    spoilers: Spoilers
  }
}).Compiler;

const extractHackyReactElements = function(node) {
  visit(node, "text", node => {
    const reactPrefix = "react-example->";
    const isReactExample = node =>
      node.value.indexOf("\nreact-example->") === 0;

    if (isReactExample(node)) {
      node.type = "element";
      node.tagName = "react-example";
      node.properties = {
        code: node.value.split(reactPrefix)[1].replace(/Z/g, " ")
      };
      node.children = [];
    }
  });

  return node;
};

const renderAst = function(node) {
  return reactCompiler(extractHackyReactElements(node));
};

import styles from "./index.module.css";

const getNavigation = function(sidebar, workshop) {
  const links = sidebar.fields.yml.items.map(item => item.link);
  const index = links.indexOf(workshop.fields.slug);

  return {
    previous: index <= 1 ? undefined : links[index - 1],
    next: links[index + 1]
  };
};

// https://www.svgrepo.com/svg/569/projector
const ProjectorIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 297 297"
    arialLabel="View presentation"
  >
    <title>View Presentation</title>
    <desc>Open presentation associated with this section</desc>
    <g>
      <path
        d="M128.62,164.724c1.385,0.742,2.905,1.109,4.42,1.109c1.818,0,3.63-0.529,5.198-1.574l46.377-30.918
		c2.607-1.737,4.172-4.663,4.172-7.795c0-3.133-1.565-6.058-4.172-7.795l-46.377-30.918c-2.874-1.918-6.57-2.097-9.618-0.465
		c-3.046,1.63-4.948,4.805-4.948,8.26v61.836C123.672,159.919,125.574,163.093,128.62,164.724z M142.41,112.134l20.118,13.411
		l-20.118,13.411V112.134z"
      />
      <path
        d="M287.631,7.495H9.369C4.195,7.495,0,11.69,0,16.864v31.386c0,5.174,4.195,9.369,9.369,9.369h21.549v145.221
		c0,5.174,4.195,9.369,9.369,9.369h98.844v29.48c-9.058,3.706-15.459,12.61-15.459,22.987c0,13.69,11.138,24.828,24.828,24.828
		s24.828-11.138,24.828-24.828c0-10.376-6.401-19.281-15.459-22.987v-29.48h98.844c5.174,0,9.369-4.195,9.369-9.369V57.62h21.549
		c5.174,0,9.369-4.195,9.369-9.369V16.864C297,11.69,292.805,7.495,287.631,7.495z M148.5,270.767c-3.358,0-6.09-2.732-6.09-6.09
		c0-3.358,2.732-6.09,6.09-6.09s6.09,2.732,6.09,6.09C154.59,268.034,151.858,270.767,148.5,270.767z M247.344,193.472H49.656V57.62
		h197.688V193.472z M18.738,38.882V26.233h259.524v12.648H18.738z"
      />
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

      {renderAst(workshop.htmlAst)}

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
