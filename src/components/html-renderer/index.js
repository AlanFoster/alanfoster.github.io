import Asciinema from "components/asciinema";
import Spoilers from "components/spoilers";
import Video from "components/video";
import PropTypes from "prop-types";
import React from "react";
import rehype2react from "rehype-react";

const reactCompiler = new rehype2react({
  createElement: React.createElement,
  components: {
    spoilers: Spoilers,
    asciinema: Asciinema,
    video: Video,
  },
}).Compiler;

const HtmlRenderer = function ({ debug, ast }) {
  return (
    <div>
      {debug && <pre>{JSON.stringify(ast, null, 4)}</pre>}
      <div>{reactCompiler(ast)}</div>
    </div>
  );
};

HtmlRenderer.propTypes = {
  ast: PropTypes.object,
  debug: PropTypes.bool,
};

export default HtmlRenderer;
