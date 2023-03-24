import { useState, useEffect } from 'react';

const Slideshow = ({ images, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, interval);

    return () => clearTimeout(timeout);
  }, [currentSlide, images.length, interval]);

  return (
    <div className="relative h-60">
      {images.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Slideshow image ${index}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                />
      ))}
    </div>
  );
};

export default Slideshow;