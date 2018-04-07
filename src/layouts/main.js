import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import WithDefaultHelmet from "./wrappers/with-default-helmet";
import WithTopNavigation from "./wrappers/with-top-navigation";
import Footer from "./footer";
import styles from "./index.module.css";
import "./global";

const Main = ({ children }) => (
  <WithDefaultHelmet>
    <WithTopNavigation>
      <Container className={`${styles.content}`}>{children()}</Container>
      <Footer />
    </WithTopNavigation>
  </WithDefaultHelmet>
);

Main.propTypes = {
  children: PropTypes.func.isRequired
};

export default Main;
