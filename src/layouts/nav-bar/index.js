import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styles from "./index.module.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavLinkTag = props => (
  <Link {...props} to={props.href} activeClassName="active" />
);

NavLinkTag.propTypes = {
  href: PropTypes.string.isRequired
};

const TopBar = ({ brand, onToggle, isOpen }) => (
  <Navbar
    color="faded"
    light
    className={`${styles.navbar} navbar-expand-sm sticky-top`}
  >
    <NavbarBrand href="/">{brand}</NavbarBrand>
    <NavbarToggler onClick={onToggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink exact tag={NavLinkTag} href="/">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink strict tag={NavLinkTag} href="/posts">
            Posts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink strict tag={NavLinkTag} href="/talks">
            Talks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink strict tag={NavLinkTag} href="/workshops">
            Workshops
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

TopBar.propTypes = {
  brand: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default TopBar;
