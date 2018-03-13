import React from "react";
import PropTypes from "prop-types";
import WithDefaultHelmet from "./wrappers/with-default-helmet";
import Helmet from 'react-helmet'

const Presentation = ({ children }) => (
  <WithDefaultHelmet>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lobster+Two:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>

    {children()}
  </WithDefaultHelmet>
);

Presentation.propTypes = {
  children: PropTypes.func.isRequired
};

export default Presentation;
