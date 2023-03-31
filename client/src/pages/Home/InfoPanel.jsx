const InfoPanel = ({imagePath, imageAlt, title, body, style}) => {

    let toRender = <div></div>
    switch (style) {
        case "white":
            toRender = (
                <div className=" py-3 grid place-items-center gap-2 bg-white text-black ">
                    {imagePath ? <img className="  bg-cover bg-center p-8 box-border" src={imagePath} alt={imageAlt}/> : null}
                    <h2 className=" text-2xl font-bold">{title}</h2>
                    {body}
                </div>
            );
            break;
        default:
            toRender = (
                <div className=" py-3 grid place-items-center gap-2 text-white ">
                    {imagePath ? <img className="  bg-cover bg-center p-8 box-border" src={imagePath} alt={imageAlt}/> : null}
                    <h2 className=" text-2xl font-bold">{title}</h2>
                    {body}
                </div>
            );
            break;
    }
    return (
        toRender
    )
}

export default InfoPanel