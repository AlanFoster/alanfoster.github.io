import React from "react";

let LoadedPresentation;

// Wrapper required to load Spectacle Presentation
// https://github.com/gatsbyjs/gatsby/issues/401
class WithoutServerSideRendering extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      hasMounted: false
    }
  }

  componentDidMount() {
    LoadedPresentation = require('./presentation');
    this.setState({ hasMounted: true })
  }

  render() {
    if (!this.state.hasMounted) {
      return null;
    }

    return <LoadedPresentation/>
  }
}

export default WithoutServerSideRendering;
