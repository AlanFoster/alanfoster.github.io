import PropTypes from "prop-types";
import React from "react";
import { Player, BigPlayButton } from "video-react";

const Video = ({ src }) => (
  <Player playsInline preload src={src}>
    <BigPlayButton position="center" />
  </Player>
);

Video.propTypes = {
  src: PropTypes.string,
};

export default Video;
