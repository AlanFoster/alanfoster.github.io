import * as styles from "./index.module.css";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : null;
};

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "nav-link active" } : null;
};

const NavLinkTag = (props) => (
  <Link {...props} to={props.href} activeClassName="active" />
);

NavLinkTag.propTypes = {
  href: PropTypes.string.isRequired,
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
          <NavLink getProps={isActive} tag={NavLinkTag} href="/">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink getProps={isPartiallyActive} tag={NavLinkTag} href="/posts">
            Posts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink getProps={isPartiallyActive} tag={NavLinkTag} href="/talks">
            Talks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            getProps={isPartiallyActive}
            tag={NavLinkTag}
            href="/workshops"
          >
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
  isOpen: PropTypes.bool.isRequired,
};

export default TopBar;
