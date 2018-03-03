import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import Wrapper from "./wrapper";
import Footer from "./footer";
import WorkshopMenu from "./workshop-menu";
import jestWorkshop from "../pages/workshops/jest/sidebar.yaml";
import styles from "./index.module.css";

const Workshop = ({ children }) => (
  <Wrapper>
    <Row>
      <Col sm={4} md={2} className={`${styles.left} bg-light`}>
        <WorkshopMenu items={jestWorkshop.items} />
      </Col>
      <Col className={`${styles.content}`}>
        <div>{children()}</div>
        <Footer />
      </Col>
    </Row>
  </Wrapper>
);

Workshop.propTypes = {
  children: PropTypes.func.isRequired
};

export default Workshop;
