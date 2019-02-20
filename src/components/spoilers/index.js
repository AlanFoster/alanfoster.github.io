import React, { useState } from "react";
import PropTypes from "prop-types";
import { Collapse } from "reactstrap";

const Spoilers = function ({ children  }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h5 className="card">
            <button className="btn btn-link" onClick={() => setIsOpen(!isOpen)}>
              View Spoiler?
            </button>
          </h5>
        </div>

        <Collapse isOpen={isOpen}>
          <div className="card-wrapper">
            <div className="card-body">{children}</div>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

Spoilers.propTypes = {
  children: PropTypes.node
};

export default Spoilers;
