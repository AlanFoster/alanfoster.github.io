import theme from "./theme";
import Asciinema from "components/asciinema";
import Video from "components/video";
import toHtml from "hast-util-to-html";
import React from "react";
import { Heading, List, Image, Text } from "spectacle";
import { select } from "unist-util-select";
import visit from "unist-util-visit";

const isHeader = (node) =>
  node.tagName === "h1" || node.tagName === "h2" || node.tagName === "h3";
const isImage = (node) => node.tagName === "img";
const isMermaid = (node) =>
  node.tagName === "div" &&
  (node.properties.className || []).indexOf("mermaid") > -1;
const isCodeTitle = (node) =>
  node.tagName === "code" &&
  (node.properties.className || []).indexOf("code-snippet__title") > -1;
const isCodeSnippet = (node) => node.tagName === "pre";
const isList = (node) => node.tagName === "ul";
const isStrongText = (node, parent) =>
  node.tagName === "strong" && parent.tagName !== "li";

const isAsciinema = (node) => node.tagName === "asciinema";
const isVideo = (node) => node.tagName === "video";

const toText = function (node) {
  let text = "";

  visit(node, function (node) {
    if (node.type === "text") {
      text += node.value;
    }
  });

  return text;
};

const htmlAstToIntermediateRepresentation = function (ast) {
  const result = [];

  visit(ast, function (node, index, parent) {
    if (isHeader(node)) {
      result.push(select("text", node));
    }

    if (isImage(node)) {
      result.push(node);
    }

    if (isMermaid(node)) {
      result.push(node);
    }

    if (isCodeTitle(node)) {
      result.push(node);
    }

    if (isCodeSnippet(node)) {
      result.push(node);
    }

    if (isList(node)) {
      result.push(node);
    }

    if (isStrongText(node, parent)) {
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

const extractLargestImage = function (srcSet) {
  if (!srcSet) return;

  return srcSet[srcSet.length - 1].split(" ")[0];
};

const renderNodeToSpectacle = (node) => {
  if (node.type === "text") {
    return (
      <Heading size={1} caps lineHeight={1} textColor="black">
        {node.value}
      </Heading>
    );
  }

  if (isMermaid(node)) {
    return <div dangerouslySetInnerHTML={{ __html: toHtml(node) }} />;
  }

  if (isCodeTitle(node)) {
    return <div dangerouslySetInnerHTML={{ __html: toHtml(node) }} />;
  }

  if (isCodeSnippet(node)) {
    return <div dangerouslySetInnerHTML={{ __html: toHtml(node) }} />;
  }

  if (isImage(node)) {
    const src = extractLargestImage(node.properties.srcSet);

    return <Image width="50%" src={src} alt={node.properties.title} />;
  }

  if (isList(node)) {
    return (
      <List>
        {node.children.map(function (child, index) {
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

  if (isStrongText(node)) {
    return <Text>{toText(node)}</Text>;
  }

  if (isAsciinema(node)) {
    return <Asciinema {...node.properties} />;
  }

  if (isVideo(node)) {
    return <Video {...node.properties} />;
  }
};

export { htmlAstToIntermediateRepresentation, renderNodeToSpectacle, theme };
