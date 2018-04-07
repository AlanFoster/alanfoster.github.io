import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import WithDefaultHelmet from "./wrappers/with-default-helmet";
import WithTopNavigation from "./wrappers/with-top-navigation";
import styles from "./index.module.css";
import "./global";

const WorkshopLayout = props => {
  return (
    <WithDefaultHelmet>
      <WithTopNavigation>
        {props.children({
          history: props.history,
          location: props.location,

          wrapperClassName: styles.wrapper,
          menuClassName: `${styles.left} bg-light`,
          contentClassName: styles.content,
          Footer
        })}
      </WithTopNavigation>
    </WithDefaultHelmet>
  );
};

WorkshopLayout.propTypes = {
  children: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default WorkshopLayout;
