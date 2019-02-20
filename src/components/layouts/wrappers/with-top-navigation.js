import React, { useState } from "react";
import PropTypes from "prop-types";

import NavBar from "../nav-bar";

import "prismjs/themes/prism-tomorrow.css";
import "bootstrap/dist/css/bootstrap.css";

const metadata = {
  name: "Alan Foster",
  website: "alanfoster.me",
  description:
    "This is the blog of Alan Foster; a developer with a passion for learning new programming languages, frameworks, and paradigms."
};

const Layout = function ({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <NavBar
        brand={metadata.name}
        onToggle={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      />

      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
