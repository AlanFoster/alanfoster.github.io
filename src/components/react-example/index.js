import React from "react";
import PropTypes from "prop-types";
import theme from "components/presentations/theme";

let LoadedComponentPlayground;

class ReactExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      hasMounted: false
    };
  }

  getChildContext() {
    return {
      styles: theme.screen
    };
  }

  componentDidMount() {
      LoadedComponentPlayground = require("spectacle/lib/components/component-playground.js").default;
      this.setState({ hasMounted: true });
  }

  render() {
    if (!LoadedComponentPlayground) {
      return <div />
    }

    // We could use react-live directly, but for consistency between the presentation
    // and normal view this component depends on the spectacle wrapper
    return (
      <LoadedComponentPlayground theme="dark" code={this.props.code.toString()} />
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
