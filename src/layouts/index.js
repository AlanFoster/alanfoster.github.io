import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Container } from "reactstrap";
import Footer from "./footer/index";
// Bug: Gatsby seems to have a bug where `/nav-bar/index` doesn't work, and it
// is chosen as the the default layout for some reason
import NavBar from "./nav-bar/root";

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
      <div>
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

        <Container>{this.props.children()}</Container>

        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
