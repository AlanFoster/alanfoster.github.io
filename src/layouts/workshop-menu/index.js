import React from "react";
import Link from "gatsby-link";
import styles from "./index.module.css";

const WorkshopMenu = ({ items }) => (
  <div className={styles.workshopMenu}>
    {items.map(function (item) {
      return (
        <Link to={item.link} key={item.title}>
          <h5>{item.title}</h5>
        </Link>
      )
    })}
  </div>
);

export default WorkshopMenu;
