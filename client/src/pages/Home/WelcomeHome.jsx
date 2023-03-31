import IFGFMain from "../../assets/Main.jpeg";
import WelcomeHomeSlideshow from "./WelcomeHomeSlideshow";
import AliveInCharacter from "../../assets/AliveInCharacter.png";

const WelcomeHome = () => {
    const images = [IFGFMain, AliveInCharacter]
    return (
        <WelcomeHomeSlideshow images={images} />
    )
}

export default WelcomeHome;