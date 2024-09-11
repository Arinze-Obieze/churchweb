import React from "react";
import Slider from "react-slick";

// Custom arrow components with improved styling
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md z-10"
  >
    &#10094;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md z-10"
  >
    &#10095;
  </button>
);

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="px-4 md:px-[32px]">
      <h1 className="mt-12 mb-6 text-2xl text-center text-gray-700">Gallery</h1>

      <hr className="border-t border-gray-300 mt-4 mx-auto w-[85%] mb-6" />

      <section className="py-6 bg-gray-100 text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 relative">
          {/* Carousel for the first image */}
          <div className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square relative overflow-hidden">
            <Slider {...settings}>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/p1.jpg"
                  alt="Gallery Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/h2.jpg"
                  alt="Gallery Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/h4.jpg"
                  alt="Gallery Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/h5.jpg"
                  alt="Gallery Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/h6.jpg"
                  alt="Gallery Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/h7.jpg"
                  alt="Gallery Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/h8.jpg"
                  alt="Gallery Image 2"
                  className="w-full  object-cover"
                />
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/h3.jpg"
                  alt="Gallery Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>

          {/* Rest of the images */}
          <img
            alt="Gallery Image 4"
            className="w-full h-full object-cover rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/wifep.jpg"
          />
          <img
            alt="Gallery Image 5"
            className="w-full h-full object-cover rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/p.jpg"
          />
          <img
            alt="Gallery Image 6"
            className="w-full h-full object-cover rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/devfest.jpg"
          />
          <img
            alt="Gallery Image 7"
            className="w-full h-full object-cover rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/wife&p.jpg"
          />
          <img
            alt="Gallery Image 8"
            className="w-full h-full object-cover rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/fam.jpg"
          />
          <img
            alt="Gallery Image 9"
            className="w-full h-full object-cover rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/p4.jpg"
          />
          <img
            src="/p5.jpg"
            alt="Gallery Image 10"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
