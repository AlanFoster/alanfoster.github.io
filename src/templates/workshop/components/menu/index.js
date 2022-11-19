import * as styles from "./index.module.css";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const WorkshopMenu = ({ items }) => (
  <nav className="navbar">
    <ul className={`navbar-nav ${styles.list}`}>
      {items.map(function (item, index) {
        return (
          <li className="nav-item" key={item.title}>
            <Link
              to={item.link}
              exact
              activeClassName={styles.linkActive}
              className={styles.link}
            >
              {index}. {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

WorkshopMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default WorkshopMenu;
