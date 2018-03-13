import React from "react";
import PropTypes from "prop-types";
import {Row, Col} from "reactstrap";
import Footer from "./footer";
import WithDefaultHelmet from "./wrappers/with-default-helmet";
import WithNavigation from "./wrappers/with-navigation";
import WorkshopMenu from "./workshop-menu";
import jestWorkshop from "../pages/workshops/jest/sidebar.yaml";
import styles from "./index.module.css";
import "./globals.css";

const Workshop = ({ children }) => (
  <WithDefaultHelmet>
    <WithNavigation>
      <Row>
        <Col sm={4} md={3} className={`${styles.left} bg-light`}>
          <WorkshopMenu items={jestWorkshop.items}/>
        </Col>
        <Col className={`${styles.content}`}>
          <div>{children()}</div>
          <Footer/>
        </Col>
      </Row>
    </WithNavigation>
  </WithDefaultHelmet>
);

Workshop.propTypes = {
  children: PropTypes.func.isRequired
};

export default Workshop;
