import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Modal } from "antd";

const ImageSlider = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { images, className } = props;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: 1,
    arrows: 1,
    autoplay: 0,
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Slider className="slider" {...settings}>
        {images?.map((image, index) => (
          <div className="image_container" key={index}>
            <Image
              className={className}
              src={image}
              alt={`Slide ${index + 1}`}
              width={1500}
              height={1000}
              onClick={() => handleOpenModal(image)}
            />
          </div>
        ))}
      </Slider>
      <Modal
        className="modal_container"
        visible={modalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        {selectedImage && (
          <Image
            className="modal_image"
            src={selectedImage}
            alt="Selected Image"
            width={5000}
            height={5000}
          />
        )}
      </Modal>
    </>
  );
};

export default ImageSlider;
