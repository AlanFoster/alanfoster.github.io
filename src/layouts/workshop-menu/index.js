import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styles from "./index.module.css";

const WorkshopMenu = ({ items }) => (
  <nav className="navbar">
    <ul className={`navbar-nav ${styles.list}`}>
      {items.map(function(item) {
        return (
          <li className="nav-item" key={item.title}>
            <Link
              to={item.link}
              exact
              activeClassName={styles.linkActive}
              className={styles.link}
            >
              {item.title}
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
      title: PropTypes.string.isRequired
    })
  )
};

export default WorkshopMenu;
