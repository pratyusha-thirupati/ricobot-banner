import React from "react";
import "./BackgroundImage.css";

const BackgroundImage = ({ background, foreground }) => {
  return (
    <div
      className="styled-background"
      style={{
        background: `
          linear-gradient(to left, rgba(0, 0, 0, 0) 40%, #000000 90.92%),
          linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, #000000 100%),
          url(${background})
        `,
      }}
    >
      {foreground && (
        <div className="foreground">
          <img src={foreground} alt="Foreground" />
        </div>
      )}
    </div>
  );
};

export default BackgroundImage;
