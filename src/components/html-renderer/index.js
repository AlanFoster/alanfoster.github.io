import React from "react";
import PropTypes from "prop-types";
import rehype2react from "rehype-react";
import Spoilers from "components/spoilers";
import Asciinema from "components/asciinema";
import Video from "components/video";

const reactCompiler = new rehype2react({
  createElement: React.createElement,
  components: {
    spoilers: Spoilers,
    asciinema: Asciinema,
    video: Video
  }
}).Compiler;

const HtmlRenderer = function({ debug, ast }) {
  return (
    <div>
      {debug && <pre>{JSON.stringify(ast, null, 4)}</pre>}
      <div>{reactCompiler(ast)}</div>
    </div>
  );
};

HtmlRenderer.propTypes = {
  ast: PropTypes.object,
  debug: PropTypes.bool
};

export default HtmlRenderer;
