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
    useCSS: 1,
    arrows: 1,
    autoplay: 1,
  };

  return (
    <Slider className="slider" {...settings}>
      {images?.map((image, index) => (
        <div className="image_container" key={index}>
          <Image
            className="slide_image"
            src={image}
            alt={`Slide ${index + 1}`}
            width={330}
            height={250}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
