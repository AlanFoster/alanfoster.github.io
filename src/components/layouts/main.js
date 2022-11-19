import Footer from "./footer";
import "./global";
import * as styles from "./index.module.css";
import WithDefaultHelmet from "./wrappers/with-default-helmet";
import WithTopNavigation from "./wrappers/with-top-navigation";
import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";

const Main = ({ children }) => (
  <WithDefaultHelmet>
    <WithTopNavigation>
      <Container className={`${styles.content}`}>{children}</Container>
      <Footer />
    </WithTopNavigation>
  </WithDefaultHelmet>
);

Main.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Main;
