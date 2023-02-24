import "../../App.css";
import AboutUsShort from "./AboutUsShort";
import Slogan from "./Slogan";
import WelcomeHome from "./WelcomeHome";

const Home = () => {
  let toRender = (
    <div>
      <WelcomeHome />
      <Slogan />
      <AboutUsShort />
    </div>
  );
  return toRender;
};

export default Home;
