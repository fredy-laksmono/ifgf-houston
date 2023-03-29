const ImageText = ({ imgPath, imageAlt = "Image", text }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="  flex justify-center items-center ">
            <img src={imgPath} className=" justify-center items-center md:h-full" alt={imageAlt} />
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-xl font-bold mb-4">{text.title}</h2>
          <p className="text-lg md:text-base text-left">{text.description}</p>
        </div>
      </div>
    );
  };
  
  export default ImageText;