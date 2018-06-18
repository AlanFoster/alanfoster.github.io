import React from "react";
import { Deck, Slide, Heading } from "spectacle";
import {
  htmlAstToIntermediateRepresentation,
  renderNodeToSpectacle,
  theme
} from "components/presentations";
import ViewSectionIcon from "components/view-article/index";
import styles from "./styles.module.css";

import PropTypes from "prop-types";

const renderSection = section => {
  return section.map((node, node_index) => {
    return (
      <Slide
        key={`${section.link}__${node_index}`}
        transition={["zoom"]}
        bgColor="primary"
      >
        {renderNodeToSpectacle(node)}
      </Slide>
    );
  });
};

class Presentation extends React.PureComponent {
  render() {
    const { content } = this.props.data;
    if (!content) return null;

    const sections = [htmlAstToIntermediateRepresentation(content.htmlAst)];

    return (
      <Deck
        transition={["zoom", "slide"]}
        progress="bar"
        theme={theme}
        transitionDuration={500}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            {content.frontmatter.title}
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            The Blog Post
          </Heading>
        </Slide>

        {sections.map((section, index) => {
          return renderSection(section, index);
        })}

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} caps textColor="tertiary">
            le fin
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

Presentation.propTypes = {
  data: PropTypes.object
};

class PresentationWithQuickLinks extends React.Component {
  render() {
    return (
      <div>
        <a href="../">
          <ViewSectionIcon className={styles.viewSection} />
        </a>

        <Presentation {...this.props} />
      </div>
    );
  }
}

export default PresentationWithQuickLinks;
