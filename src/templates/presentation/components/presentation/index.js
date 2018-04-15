import React from "react";
import {
  Deck,
  Slide,
  Heading,
  List,
  ListItem,
  Image,
  Text,
  Link,
  ComponentPlayground
} from "spectacle";
import visit from "unist-util-visit";
import select from "unist-util-select";
import toHtml from "hast-util-to-html";
import { Player, BigPlayButton } from "video-react";
import ViewSectionIcon from "../view-section-icon";
import styles from "./styles.module.css";

import createTheme from "spectacle/lib/themes/default";
import PropTypes from "prop-types";

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

const toText = function(node) {
  let text = "";

  visit(node, function(node) {
    if (node.type === "text") {
      text += node.value;
    }
  });

  return text;
};

class Asciinema extends React.Component {
  static defaultProps = {
    theme: "monokai",
    idleTimeLimit: 2,
    poster: "npt:0:3"
  };

  bindRef = ref => {
    this.ref = ref;
  };

  componentDidMount() {
    asciinema.player.js.CreatePlayer(this.ref, this.props.src, this.props);
  }

  componentWillUnmount() {
    if (!this.ref) return;

    asciinema.player.js.UnmountPlayer(this.ref);
    this.ref = null;
  }

  render() {
    return <div ref={this.bindRef} />;
  }
}

Asciinema.propTypes = {
  src: PropTypes.string
};

const Video = ({ src }) => (
  <Player playsInline preload src={src}>
    <BigPlayButton position="center" />
  </Player>
);

Video.propTypes = {
  src: PropTypes.string
};

const htmlAstToIntermediateRepresentation = function(ast) {
  const result = [];
  const isHeader = node =>
    node.tagName === "h1" || node.tagName === "h2" || node.tagName === "h3";
  const isImage = node => node.tagName === "img";
  const isCode = node => node.tagName === "pre";
  const isList = node => node.tagName === "ul";
  const isStrong = node => node.tagName === "strong";
  const isAsciinema = node => node.tagName === "asciinema";
  const isVideo = node => node.tagName === "video";

  const reactPrefix = "react-example->";
  const isReactExample = node =>
    node.value && node.value.indexOf("\nreact-example->") === 0;

  visit(ast, function(node) {
    if (isHeader(node)) {
      result.push(select(node, "text")[0]);
    }

    if (isImage(node)) {
      result.push(node);
    }

    if (isCode(node)) {
      result.push(node);
    }

    if (isList(node)) {
      result.push(node);
    }

    if (isReactExample(node)) {
      result.push({
        tagName: "react-example",
        value: node.value.split(reactPrefix)[1].replace(/Z/g, " ")
      });
    }

    if (isStrong(node)) {
      result.push(node);
    }

    if (isAsciinema(node)) {
      result.push(node);
    }

    if (isVideo(node)) {
      result.push(node);
    }
  });

  return result;
};

const extractLargestImage = function(srcSet) {
  if (!srcSet) return;

  return srcSet[srcSet.length - 1].split(" ")[0];
};

const renderNodeToSpectacle = node => {
  if (node.type === "text") {
    return (
      <Heading size={1} caps lineHeight={1} textColor="black">
        {node.value}
      </Heading>
    );
  }

  if (node.tagName === "pre") {
    return <div dangerouslySetInnerHTML={{ __html: toHtml(node) }} />;
  }

  if (node.tagName === "img") {
    const src = extractLargestImage(node.properties.srcSet);

    return <Image width="100%" src={src} alt={node.properties.title} />;
  }

  if (node.tagName === "ul") {
    return (
      <List>
        {node.children.map(function(child, index) {
          if (child.tagName !== "li") return null;
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: toHtml(child) }}
            />
          );
        })}
      </List>
    );
  }

  if (node.tagName === "react-example") {
    return <ComponentPlayground theme="dark" code={node.value.toString()} />;
  }

  if (node.tagName === "strong") {
    return <Text>{toText(node)}</Text>;
  }

  if (node.tagName === "asciinema") {
    return <Asciinema {...node.properties} />;
  }

  if (node.tagName === "video") {
    return <Video {...node.properties} />;
  }
};

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
