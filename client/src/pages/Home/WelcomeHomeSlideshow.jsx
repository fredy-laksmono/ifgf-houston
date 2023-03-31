import { useState, useEffect } from 'react';

const WelcomeHomeSlideshow = ({ images, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, interval);

    return () => clearTimeout(timeout);
  }, [currentSlide, images.length, interval]);

  const welcomeHomeTitle = (

    <div className="absolute inset-0 flex items-center justify-center">
    <div className="px-2 py-2 bg-gray-900 bg-opacity-25 text-white rounded-lg">
      <h2 className="text-center font-bold text-3xl sm:text-5xl md:text-7xl lg:text-9xl">WELCOME HOME</h2>
    </div>
  </div>
  )

  return (
    <div className="relative h-48 overflow-hidden sm:h-72 md:h-96 lg:h-screen">
      {images.map((image, index) => (
        <div key={index}>           
            <img              
                src={image}
                alt={`Slideshow image ${index}`}
                className={`absolute top-0 left-0 w-full h-48 sm:h-72 md:h-96 lg:h-screen transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            />
            {index === 0 ? welcomeHomeTitle : null}
        </div>
            
      ))}
    </div>
  );
};

export default WelcomeHomeSlideshow;