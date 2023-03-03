import React from "react";
import { Player, BigPlayButton } from "video-react";

const VideoPlayer = ({ src }) => {
  return (
    <Player src={src} autoPlay>
      <BigPlayButton position="center" />
    </Player>
  );
};

export default VideoPlayer;
