import React, { useState } from "react";
import Thumbnails from "../Thumbnails/Thumbnails";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import { HomeText } from "../../enums/HomeText.enum";

import "./Banner.css";

import background1 from "../../assets/1-background.png";
import background2 from "../../assets/2-background.png";
import background3 from "../../assets/3-background.png";
import background4 from "../../assets/4-background.png";
import background5 from "../../assets/5-background.png";
import background6 from "../../assets/6-background.png";

import thumbnail1 from "../../assets/1-thumbnail.png";
import thumbnail2 from "../../assets/2-thumbnail.png";
import thumbnail3 from "../../assets/3-thumbnail.png";
import thumbnail4 from "../../assets/4-thumbnail.png";
import thumbnail5 from "../../assets/5-thumbnail.png";
import thumbnail6 from "../../assets/6-thumbnail.png";

import foreground from "../../assets/1-foreground-cutout.png";

const backgrounds = [
  background1,
  background2,
  background3,
  background4,
  background5,
  background6,
];
const thumbnails = [
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
];
const foregrounds = [foreground];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <main className="styled-main">
      <BackgroundImage
        background={backgrounds[currentImage]}
        foreground={foregrounds[currentImage]}
      />
      <div className="content">
        <h1 className="more_from">{HomeText.MORE_FROM}</h1>
        <button className="ricoback">{HomeText.RICO_BACK}</button>
        <h1 className="title">{HomeText.TITLE}</h1>
        <p>{HomeText.DESCRIPTION}</p>
        <button className="learn">{HomeText.LEARN_MORE}</button>
        <Thumbnails
          thumbnails={thumbnails}
          activeIndex={currentImage}
          onThumbnailClick={setCurrentImage}
        />
      </div>
    </main>
  );
};

export default Banner;
