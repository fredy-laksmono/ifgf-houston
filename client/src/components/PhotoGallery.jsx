import React, { useState } from "react";
import Lightbox from "./Lightbox";

const PhotoGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="flex flex-col lg:grid grid-cols-7 pt-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="cursor-pointer object-fill px-6 lg:px-0 pt-6 h-full w-full lg:h-60 lg:w-60"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      {selectedImage !== null && (
        <Lightbox
          images={images}
          selectedIndex={selectedImage}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
