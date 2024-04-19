import React, { useState, useEffect } from "react";
import "./Carrousel.css";

let imageText =
  "deepak-kumar-nUz0DmVFbeI-unsplash.jpg    vizag-explore-MsQqVwnF8Pw-unsplash.jpg veronica-white-uGuT4A2GlJw-unsplash.jpg";
let images = imageText.split(" ");
for (let i = 0; i < images.length; i++) {
//   images[i] = "./images/" + images[i];
images[i]= "https://source.unsplash.com/random/1480X640";
}

// let images = [];
const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Slide after each 2 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  images[0]= "https://source.unsplash.com/random/1480X640";

  return (
    <div className="carrousel" style={{ height: 70 + "vh" }}>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carrousel;
