import React from "react";
import {
  Deck,
  Slide,
  Heading,
  List,
  ListItem,
  Image,
  Link,
  ComponentPlayground
} from "spectacle";
import visit from "unist-util-visit";
import select from "unist-util-select";
import toHtml from "hast-util-to-html";

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

const htmlAstToIntermediateRepresentation = function(ast) {
  const result = [];
  const isHeader = node => node.tagName === "h1" || node.tagName === "h2" || node.tagName == 'h3';
  const isImage = node => node.tagName === "img";
  const isCode = node => node.tagName === "pre";
  const isList = node => node.tagName === "ul";

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
  });

  return result;
};

const extractLargestImage = srcSet => srcSet[srcSet.length - 1].split(" ")[0];

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
    return (
      <Image width="100%" src={extractLargestImage(node.properties.srcSet)} />
    );
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
};

const renderSection = (section, index) => {
  if (section.title === "Presentation") return null;

  const sectionIntroduction = (
    <Slide
      transition={["zoom"]}
      bgColor="primary"
      id={encodeURIComponent(section.link)}
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

  const slides = section.page.map((node, node_index) => {
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

  return [sectionIntroduction].concat(slides);
};

const Presentation = ({ data }) => {
  const { overview, content, sidebar } = data;
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
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          {overview.frontmatter.title}
        </Heading>
        <Heading size={4} caps textColor="tertiary">
          The workshop
        </Heading>
      </Slide>

      <Slide transition={["zoom"]} bgColor="primary">
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

      {sections.map(renderSection)}

      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={4} caps textColor="tertiary">
          le fin
        </Heading>
      </Slide>
    </Deck>
  );
};

Presentation.propTypes = {
  data: PropTypes.object
};

export default Presentation;
