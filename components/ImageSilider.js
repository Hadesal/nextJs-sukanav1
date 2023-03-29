import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageSlider = (props) => {
  const { images } = props;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images?.map((image, index) => (
        <div className="object-cover bg-red h-250 w-250" key={index}>
          <Image src={image} alt={`Slide ${index + 1}`} fill />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
