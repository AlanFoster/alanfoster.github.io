import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const metadata = {
  name: "Alan Foster",
  website: "alanfoster.me",
  description:
    "This is the blog of Alan Foster; a developer with a passion for learning new programming languages, frameworks, and paradigms."
};

const DefaultHelmet = ({ children }) => (
  <div>
    <Helmet
      titleTemplate={`%s | ${metadata.website}`}
      title="Welcome"
      meta={[
        {
          name: "description",
          content: metadata.description
        }
      ]}
    />
    {children}
  </div>
);

DefaultHelmet.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default DefaultHelmet;
