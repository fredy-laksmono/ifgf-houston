const InfoPanel = ({imagePath, imageAlt, title, body, style}) => {
    return (
    <div>
        {imagePath ? <img src={imagePath} alt={imageAlt}/> : null}
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
    )
}

export default InfoPanel