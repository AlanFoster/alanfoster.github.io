import * as styles from "./index.module.css";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const getNavigation = function (sidebar, workshop) {
  const links = sidebar.fields.yml.items.map((item) => item.link);
  const index = links.indexOf(workshop.fields.slug);

  return {
    previous: index <= 1 ? undefined : links[index - 1],
    next: links[index + 1],
  };
};

const QuickNavigation = ({ sidebar, workshop }) => {
  const { previous, next } = getNavigation(sidebar, workshop);

  return (
    <div>
      <div className={styles.navigation}>
        <span>
          {previous && (
            <Link
              to={previous}
              className={`btn btn-outline-secondary ${styles.previous}`}
            >
              &lt; Previous
            </Link>
          )}
        </span>

        <span>
          {next && (
            <Link
              to={next}
              className={`btn btn-outline-secondary ${styles.next}`}
            >
              Next &gt;
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

QuickNavigation.propTypes = {
  sidebar: PropTypes.object,
  workshop: PropTypes.object,
};

export default QuickNavigation;
