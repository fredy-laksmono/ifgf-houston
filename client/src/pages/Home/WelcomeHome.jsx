import IFGFMain from "../../assets/Main.jpeg";
import WelcomeHomeSlideshow from "./WelcomeHomeSlideshow";
import CurrentTheme from "../../assets/aliveInCalling.png";

const WelcomeHome = () => {
    const images = [IFGFMain, CurrentTheme]
    return (
        <WelcomeHomeSlideshow images={images} />
    )
}

export default WelcomeHome;