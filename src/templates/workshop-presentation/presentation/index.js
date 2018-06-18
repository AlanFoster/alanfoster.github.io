import React from "react";
import { Deck, Slide, Heading, List, ListItem, Link } from "spectacle";
import {
  htmlAstToIntermediateRepresentation,
  renderNodeToSpectacle,
  theme
} from "components/presentations";
import ViewSectionIcon from "components/view-article/index";
import styles from "./styles.module.css";

import PropTypes from "prop-types";

const renderSection = (section, index, onEnterActiveSection) => {
  if (section.title === "Presentation") return null;

  const sectionIntroduction = (
    <Slide
      transition={["zoom"]}
      bgColor="primary"
      id={encodeURIComponent(section.link)}
      onActive={() => onEnterActiveSection(section)}
    >
      <Heading size={1} fit caps lineHeight={1} textColor="black">
        {section.title}
      </Heading>

      <Heading size={4} caps>
        <Link href={section.link} textColor="tertiary">
          Part {index + 1}
        </Link>
      </Heading>
    </Slide>
  );

  if (!section.page) {
    throw new Error(
      `Could not find section ${JSON.stringify(section, null, 4)}`
    );
  }

  const slides = section.page.map((node, node_index) => {
    return (
      <Slide
        key={`${section.link}__${node_index}`}
        transition={["zoom"]}
        onActive={() => onEnterActiveSection(section)}
        bgColor="primary"
      >
        {renderNodeToSpectacle(node)}
      </Slide>
    );
  });

  return [sectionIntroduction].concat(slides);
};

class Presentation extends React.PureComponent {
  render() {
    const { onEnterActiveSection, onExitActiveSection } = this.props;
    const { overview, content, sidebar } = this.props.data;
    if (!overview) return null;

    const sidebarItems = sidebar.fields.yml.items;
    const pages = content.edges.reduce(function(acc, edge) {
      acc[edge.node.fields.slug] = htmlAstToIntermediateRepresentation(
        edge.node.htmlAst
      );
      return acc;
    }, {});

    const sections = sidebarItems
      .map(item => {
        return {
          title: item.title,
          link: item.link,
          id: item.link,
          page: pages[item.link]
        };
      })
      .filter(section => section.title !== "Presentation");

    return (
      <Deck
        transition={["zoom", "slide"]}
        progress="bar"
        theme={theme}
        transitionDuration={500}
      >
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          onActive={onExitActiveSection}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            {overview.frontmatter.title}
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            The workshop
          </Heading>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          onActive={onExitActiveSection}
        >
          <List ordered>
            {sections.map(function(item) {
              return (
                <ListItem key={item.title}>
                  <Link href={item.link}>{item.title}</Link>
                </ListItem>
              );
            })}
          </List>
        </Slide>

        {sections.map((section, index) => {
          return renderSection(section, index, onEnterActiveSection);
        })}

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          onActive={this.onExitActiveSection}
        >
          <Heading size={4} caps textColor="tertiary">
            le fin
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

Presentation.propTypes = {
  data: PropTypes.object,
  onEnterActiveSection: PropTypes.func,
  onExitActiveSection: PropTypes.func
};

class PresentationWithQuickLinks extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeSection: null
    };
  }

  onEnterActiveSection = section => {
    this.setState({
      activeSection: section
    });
  };

  onExitActiveSection = () => {
    this.setState({
      activeSection: null
    });
  };

  render() {
    // const { overview, content, sidebar } = this.props.data;
    // if (!overview) return null;
    //
    // const sidebarItems = sidebar.fields.yml.items;
    // const pages = content.edges.reduce(function(acc, edge) {
    //   acc[edge.node.fields.slug] = (
    //     edge.node.htmlAst
    //   );
    //   return acc;
    // }, {});
    //
    // return <pre>{JSON.stringify(pages, null, 4)}</pre>

    const activeSection = this.state.activeSection;

    return (
      <div>
        {activeSection && (
          <a href={activeSection.link}>
            <ViewSectionIcon className={styles.viewSection} />
          </a>
        )}

        <Presentation
          {...this.props}
          onEnterActiveSection={this.onEnterActiveSection}
          onExitActiveSection={this.onExitActiveSection}
        />
      </div>
    );
  }
}

export default PresentationWithQuickLinks;
