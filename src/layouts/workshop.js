import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import WithDefaultHelmet from "./wrappers/with-default-helmet";
import WithTopNavigation from "./wrappers/with-top-navigation";
import WorkshopMenu from "./workshop-menu";
import jestWorkshop from "../pages/workshops/jest/sidebar.yaml";
import styles from "./index.module.css";
import "./globals.css";

const Workshop = ({ children }) => (
  <WithDefaultHelmet>
    <WithTopNavigation>
      <div className={styles.wrapper}>
        <div className={`${styles.left} bg-light`}>
          <WorkshopMenu items={jestWorkshop.items} />
        </div>
        <div className={styles.content}>
          <div>{children()}</div>
          <Footer />
        </div>
      </div>
    </WithTopNavigation>
  </WithDefaultHelmet>
);

Workshop.propTypes = {
  children: PropTypes.func.isRequired
};

export default Workshop;
