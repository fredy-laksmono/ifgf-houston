const InfoPanel = ({imagePath, imageAlt, title, body, style}) => {
    return (
    <div className=" py-3 ">
        {imagePath ? <img src={imagePath} alt={imageAlt}/> : null}
        <h2 className=" text-2xl font-bold">{title}</h2>
        <p>{body}</p>
    </div>
    )
}

export default InfoPanel