import React from "react";

const Video = ({ src }) => {
  return (
    <video autoPlay loop muted className="h-full w-full object-cover">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
