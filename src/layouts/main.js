import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import Wrapper from "./wrapper";
import Footer from "./footer";
import styles from "./index.module.css";

const Main = ({ children }) => (
  <Wrapper>
    <Container className={`${styles.content}`}>{children()}</Container>
    <Footer />
  </Wrapper>
);

Main.propTypes = {
  children: PropTypes.func.isRequired
};

export default Main;
