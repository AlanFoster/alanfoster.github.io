import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import WithDefaultHelmet from "./wrappers/with-default-helmet";
import WithNavigation from "./wrappers/with-navigation";
import Footer from "./footer";
import styles from "./index.module.css";

const Main = ({ children }) => (
  <WithDefaultHelmet>
    <WithNavigation>
      <Container className={`${styles.content}`}>{children()}</Container>
      <Footer />
    </WithNavigation>
  </WithDefaultHelmet>
);

Main.propTypes = {
  children: PropTypes.func.isRequired
};

export default Main;
