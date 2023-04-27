import React, { useState } from "react";

const Lightbox = ({ images, selectedIndex, onClose }) => {
  const [currentImage, setCurrentImage] = useState(selectedIndex);

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
      <img
        src={images[currentImage]}
        alt=""
        className="max-h-full max-w-full object-contain"
      />
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-4 py-2 bg-black bg-opacity-50"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white px-4 py-2 bg-black bg-opacity-50"
        onClick={handleNext}
      >
        &gt;
      </button>
      <button
        className="absolute top-0 right-0 text-white px-4 py-2 bg-black bg-opacity-50"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default Lightbox;
