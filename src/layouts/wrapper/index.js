import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import NavBar from "../nav-bar";

import "prismjs/themes/prism-tomorrow.css";
import "bootstrap/dist/css/bootstrap.css";

const metadata = {
  name: "Alan Foster",
  website: "alanfoster.me",
  description:
    "This is the blog of Alan Foster; a developer with a passion for learning new programming languages, frameworks, and paradigms."
};

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        <Helmet
          titleTemplate={`%s | ${metadata.website}`}
          title="Welcome"
          meta={[
            {
              name: "description",
              content: metadata.description
            }
          ]}
        />

        <NavBar
          brand={metadata.name}
          onToggle={this.onToggle}
          isOpen={this.state.isOpen}
        />

        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
