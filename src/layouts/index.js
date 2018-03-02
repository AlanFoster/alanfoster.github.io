import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {Container, Col, Row} from "reactstrap";
import Footer from "./footer/index";
import styles from "./index.module.css";
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

const WorkshopMenu = () => (
  <div className={styles.workshopMenu}>
    <div>
      <h4>Heading</h4>
    </div>
  </div>
);

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
    // Note: Gatsby provides custom layouts via the onCreatePage callback, KISS/YAGNI for now.
    const isWorkshop = this.props.location.pathname === "/workshops";

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

        {!isWorkshop && (
          <div>
            <Container className={`${styles.content}`}>
              {this.props.children()}
            </Container>
            <Footer/>
          </div>
        )}

        {isWorkshop && (
          <Row>
            <Col sm={4} md={2} className={`${styles.left} bg-light`}>
              <WorkshopMenu/>
            </Col>
            <Col className={`${styles.content}`}>
              <div>{this.props.children()}</div>
              <Footer/>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
