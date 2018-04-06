import React from "react";
import PropTypes from "prop-types";

// https://www.svgrepo.com/svg/941/right-arrow
const ViewSectionIcon = ({ className }) => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 490.4 490.4"
    className={className}
  >
    <g>
      <g>
        <path
          d="M245.2,490.4c135.2,0,245.2-110,245.2-245.2S380.4,0,245.2,0S0,110,0,245.2S110,490.4,245.2,490.4z M245.2,24.5
			c121.7,0,220.7,99,220.7,220.7s-99,220.7-220.7,220.7s-220.7-99-220.7-220.7S123.5,24.5,245.2,24.5z"
        />
        <path
          d="M138.7,257.5h183.4l-48,48c-4.8,4.8-4.8,12.5,0,17.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l68.9-68.9
			c4.8-4.8,4.8-12.5,0-17.3l-68.9-68.9c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l48,48H138.7c-6.8,0-12.3,5.5-12.3,12.3
			C126.4,252.1,131.9,257.5,138.7,257.5z"
        />
      </g>
    </g>
  </svg>
);

ViewSectionIcon.propTypes = {
  className: PropTypes.string
};

export default ViewSectionIcon;
