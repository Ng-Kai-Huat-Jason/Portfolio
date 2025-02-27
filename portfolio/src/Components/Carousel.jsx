// Carousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slides, onSlideChange }) => {
  // Custom arrow components
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-next-arrow`}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-prev-arrow`}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: onSlideChange,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>{slide.content}</div>
        ))}
      </Slider>

      <style jsx global>{`
        /* Custom arrow styling */
        .custom-arrow {
          width: 40px;
          height: 40px;
          z-index: 1;
        }

        .custom-arrow:before {
          font-size: 30px;
          color: #f3701e; /* Vintage orange color */
          opacity: 0.8;
        }

        .custom-arrow:hover:before {
          color: #f3701e;
          opacity: 1;
        }

        /* Position the arrows */
        .custom-prev-arrow {
          left: -10px;
        }

        .custom-next-arrow {
          right: -10px;
        }

        /* Custom dots styling */
        .custom-dots {
          bottom: -30px;
        }

        .custom-dots li {
          margin: 0 5px;
        }

        .custom-dots li button {
          width: 12px;
          height: 12px;
        }

        .custom-dots li button:before {
          font-size: 12px;
          color: #4b607f; /* Vintage blue color */
          opacity: 0.5;
        }

        .custom-dots li.slick-active button:before {
          color: #f3701e; /* Vintage orange color */
          opacity: 1;
          font-size: 15px; /* Make active dot slightly larger */
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
