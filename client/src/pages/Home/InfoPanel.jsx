const InfoPanel = ({imagePath, imageAlt, title, body, style}) => {

    let toRender = <div></div>
    switch (style) {
        case "white":
            toRender = (
                <div className=" py-3 grid place-items-center gap-2 bg-white text-black ">
                    <h2 className=" pt-4 text-2xl font-bold">{title}</h2>
                    {imagePath ? <img className="  bg-cover bg-center px-8 pt-4 pb-2 box-border" src={imagePath} alt={imageAlt}/> : null}
                    {body}
                </div>
            );
            break;
        default:
            toRender = (
                <div className=" py-3 grid place-items-center gap-2 bg-black text-white ">
                    <h2 className=" pt-4 text-2xl font-bold">{title}</h2>
                    {imagePath ? <img className="  bg-cover bg-center px-8 pt-4 pb-2 box-border" src={imagePath} alt={imageAlt}/> : null}
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