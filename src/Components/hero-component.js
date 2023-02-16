import { useState } from "react";
import "animate.css";

const mobileImages = [
  {
    id: 1,
    image: "images/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners accross the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    image: "images/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using out store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    image: "images/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With theree decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const desktopImages = [
  {
    id: 1,
    image: "images/desktop-image-hero-1.jpg",
  },
  {
    id: 2,
    image: "images/desktop-image-hero-2.jpg",
  },
  {
    id: 3,
    image: "images/desktop-image-hero-3.jpg",
  },
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
        <img src={mobileImages[picPlace].image} alt="" className="mobile-img" />
        <img
          src={desktopImages[picPlace].image}
          alt=""
          className="desktop-img"
        />
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
        <div className="hero-text animate__animated animate__slideInRight">
          <h1>{mobileImages[picPlace].title}</h1>
          <p>{mobileImages[picPlace].text}</p>
          <span>Shop Now</span>
          <img src="images/icon-arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
