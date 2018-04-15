import React from "react";
import PropTypes from "prop-types";

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

export default Asciinema;
