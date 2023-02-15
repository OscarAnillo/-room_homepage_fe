import { useState } from "react";

const mobileImages = [
  "images/mobile-image-hero-1.jpg",
  "images/mobile-image-hero-2.jpg",
  "images/mobile-image-hero-3.jpg",
];

const desktopImages = [
  "images/desktop-image-hero-1.jpg",
  "images/desktop-image-hero-2.jpg",
  "images/desktop-image-hero-3.jpg",
];

export const HeroComponent = () => {
  const [picPlace, setPicPlace] = useState(0);

  const clickHandlerNext = () => {
    setPicPlace((prevState) => prevState + 1);
  };

  const clickHandlerPrev = () => {
    setPicPlace((prevState) => prevState - 1);
  };

  return (
    <div className="hero">
      <div className="col1">
        <img src={mobileImages[picPlace]} alt="" className="mobile-img" />
        <img src={desktopImages[picPlace]} alt="" className="desktop-img" />
        <div className="mobile-btn">
          <button onClick={clickHandlerPrev} disabled={picPlace === 0}>
            <img src="images/icon-angle-left.svg" alt="" />
          </button>
          <button onClick={clickHandlerNext} disabled={picPlace === 2}>
            <img src="images/icon-angle-right.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="col2">
        <div className="hero-text">
          <h1>Discover innovative ways to decorate</h1>
          <p>
            We provide unmatched quality, comfort, and style for property owners
            accross the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <span>Shop Now</span>
          <img src="images/icon-arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
