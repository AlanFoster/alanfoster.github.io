import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "reactstrap";

class Spoilers extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onToggle = this.onToggle.bind(this);
    this.state = { isOpen: false };
  }

  onToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h5 className="card">
              <button className="btn btn-link" onClick={this.onToggle}>
                View Spoiler?
              </button>
            </h5>
          </div>

          <Collapse isOpen={this.state.isOpen}>
            <div className="card-wrapper">
              <div className="card-body">{this.props.children}</div>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

Spoilers.propTypes = {
  children: PropTypes.node
};

export default Spoilers;
