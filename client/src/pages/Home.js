import "../App.css";
import Slogan from "../components/Slogan";
import WelcomeHome from "../components/WelcomeHome";

const Home = () => {
  let toRender = (
    <div>
      <WelcomeHome />
      <Slogan />
      <div>
        <iframe
          title="Instagram Feeds"
          aria-label="Instagram Feeds"
          scrolling="no"
          src=""
        ></iframe>
      </div>
      <div>This is home page</div>;<div>This is home page</div>;
      <div>This is home page</div>;<div>This is home page</div>;
      <div>This is home page</div>;<div>This is home page</div>;
    </div>
  );
  return toRender;
};

export default Home;
