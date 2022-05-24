import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import red from '../../assets/image/app.png'
const Carusel = () => {
  let settings = {
    dot: true,
    ifinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
              <img src={red} alt="" />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carusel;
