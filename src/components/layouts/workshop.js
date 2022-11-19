import Footer from "./footer";
import "./global";
import * as styles from "./index.module.css";
import WithDefaultHelmet from "./wrappers/with-default-helmet";
import WithTopNavigation from "./wrappers/with-top-navigation";
import PropTypes from "prop-types";
import React from "react";

const WorkshopLayout = (props) => {
  return (
    <WithDefaultHelmet>
      <WithTopNavigation>
        {props.children({
          history: props.history,
          location: props.location,

          wrapperClassName: styles.wrapper,
          menuClassName: `${styles.left} bg-light`,
          contentClassName: styles.content,
          Footer,
        })}
      </WithTopNavigation>
    </WithDefaultHelmet>
  );
};

WorkshopLayout.propTypes = {
  children: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default WorkshopLayout;
