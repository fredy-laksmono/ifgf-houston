const ImageText = ({ imgPath, imageAlt = "Image", text }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={imgPath} className="w-full object-cover md:h-full" alt={imageAlt} />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">{text.title}</h2>
          <p className="text-lg">{text.description}</p>
        </div>
      </div>
    );
  };
  
  export default ImageText;