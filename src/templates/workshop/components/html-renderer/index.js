import React from "react";
import PropTypes from "prop-types";
import rehype2react from "rehype-react";
import visit from "unist-util-visit";
import ReactExample from "./components/react-example";
import { Player, BigPlayButton } from "video-react";
import Spoilers from "./components/spoilers";

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

const reactCompiler = new rehype2react({
  createElement: React.createElement,
  components: {
    "react-example": ReactExample,
    spoilers: Spoilers,
    asciinema: Asciinema,
    video: Video
  }
}).Compiler;

// An unfortunate hack required to ensure that the markdown parser
// doesn't attempt to treat react as HTML, and instead leaves it as
// a plain text string that we will then swap with a react component
// based on a magic marker at the start of the text node.
const extractReactExamples = function(node) {
  visit(node, "text", node => {
    const reactPrefix = "\nreact-example->";
    const isReactExample = node => node.value.indexOf(reactPrefix) === 0;
    if (!isReactExample(node)) return;

    node.type = "element";
    node.tagName = "react-example";
    node.properties = {
      code: node.value.split(reactPrefix)[1].replace(/Z/g, " ")
    };
    node.children = [];
  });

  return node;
};

const HtmlRenderer = function({ debug, ast }) {
  return (
    <div>
      {debug && <pre>{JSON.stringify(ast, null, 4)}</pre>}
      <div>{reactCompiler(extractReactExamples(ast))}</div>
    </div>
  );
};

HtmlRenderer.propTypes = {
  ast: PropTypes.object,
  debug: PropTypes.bool
};

export default HtmlRenderer;
