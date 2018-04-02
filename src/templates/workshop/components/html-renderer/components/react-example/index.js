import React from "react";
import PropTypes from "prop-types";
// Import the playground directly to avoid createHashHistory clashes
// during gatsby production compilation cycle when the topmost spectacle
// component is imported.
import ComponentPlayground from "spectacle/lib/components/component-playground.js";
import createTheme from "spectacle/lib/themes/default";
const theme = createTheme();

class ReactExample extends React.Component {
  getChildContext() {
    return {
      styles: theme.screen
    };
  }

  render() {
    // We could use react-live directly, but for consistency between the presentation
    // and normal view this component depends on the spectacle wrapper
    return (
      <ComponentPlayground theme="dark" code={this.props.code.toString()} />
    );
  }
}

ReactExample.propTypes = {
  code: PropTypes.string
};

// The spectacle components depends on a style object accessed within its context object
// Let's mimic this functionality so that we can use Spectacle components outside of a presentation
ReactExample.childContextTypes = {
  styles: PropTypes.object
};

export default ReactExample;
