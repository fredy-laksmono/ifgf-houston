const InfoPanel = ({imagePath, imageAlt, title, body, style}) => {
    return (
    <div className=" py-3 grid place-items-center gap-2 bg-white text-black ">
        {imagePath ? <img className=" justify-center" src={imagePath} alt={imageAlt}/> : null}
        <h2 className=" text-2xl font-bold">{title}</h2>
        <p>{body}</p>
        
    </div>
    )
}

export default InfoPanel