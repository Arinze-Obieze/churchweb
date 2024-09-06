import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-[60vh] max-h-[500px] overflow-hidden relative">
      <Slider {...settings}>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/assets/wednesday.png"
            alt="Slide 1"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/assets/1.jpeg"
            alt="Slide 2"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/assets/Booking.jpg"
            alt="Slide 3"
            className="w-full h-full object-contain"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
