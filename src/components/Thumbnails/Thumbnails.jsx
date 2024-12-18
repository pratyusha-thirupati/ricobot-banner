import React from "react";
import "./Thumbnails.css";

const Thumbnails = ({ thumbnails, activeIndex, onThumbnailClick }) => {
  return (
    <div className="thumbnail-list">
      {thumbnails.map((thumbnail, index) => (
        <div
          key={index}
          className={`thumbnail ${activeIndex === index ? "active" : ""}`}
          onClick={() => onThumbnailClick(index)}
        >
          <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
