import "../App.css";
import AboutUsShort from "../components/AboutUsShort";
import Slogan from "../components/Slogan";
import WelcomeHome from "../components/WelcomeHome";

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
