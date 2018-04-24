import React from "react";
import { Heading, List, Image, Text, ComponentPlayground } from "spectacle";
import visit from "unist-util-visit";
import select from "unist-util-select";
import toHtml from "hast-util-to-html";
import Asciinema from "components/asciinema";
import Video from "components/video";
import theme from "./theme";

const toText = function(node) {
  let text = "";

  visit(node, function(node) {
    if (node.type === "text") {
      text += node.value;
    }
  });

  return text;
};

const htmlAstToIntermediateRepresentation = function(ast) {
  const result = [];
  const isHeader = node =>
    node.tagName === "h1" || node.tagName === "h2" || node.tagName === "h3";
  const isImage = node => node.tagName === "img";
  const isCode = node => node.tagName === "pre";
  const isList = node => node.tagName === "ul";
  const isStrongText = (node, parent) =>
    node.tagName === "strong" && parent.tagName !== "li";

  const isAsciinema = node => node.tagName === "asciinema";
  const isVideo = node => node.tagName === "video";

  const reactPrefix = "react-example->";
  const isReactExample = node =>
    node.value && node.value.indexOf("\nreact-example->") === 0;

  visit(ast, function(node, index, parent) {
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

export { htmlAstToIntermediateRepresentation, renderNodeToSpectacle, theme };
