import "../../App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutUsShort from "./AboutUsShort";
import Slogan from "./Slogan";
import WelcomeHome from "./WelcomeHome";
import InfoPanel from "./InfoPanel";
import ifgfHoustonBuildingImage from "../../assets/ifgfHoustonBuilding.png";
import careGroupImage from "../../assets/CareGroup.jpeg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleDirection = () => {
    window.location.href =
      "https://www.google.com/maps/search/?api=1&query=IFGF+6455+Wilcrest+Dr,+Houston,+TX+77072";
  };

  const ifgfHouston = (
    <p>
      Onsite Service <br /> Sunday - 11:00 AM to 12:30 PM <br /> 6455 Wilcrest
      Dr, Houston, TX 77072 <br />
      <button
        className=" bg-white text-black self-center lg:self-start text-base mt-4 py-1 rounded-3xl w-40"
        onClick={handleDirection}
      >
        GET DIRECTION
      </button>
    </p>
  );

  const careGroup = (
    <p>
      House City (Youth) <br /> Sunday - 2:00 PM to 3:00 PM <br /> <br /> Higher
      Ground (Young Adult) <br /> Friday - 7:00 PM to 9:00 PM <br /> <br />{" "}
      Family Care Group (Family) <br /> Contact us for more information
    </p>
  );

  const iGrow = (
    <p>
      Online Bible Study (Zoom) <br /> Wednesday - 8:00 PM to 9:00 PM
    </p>
  );

  const prayerMeeting = (
    <p>
      Online Prayer Meeting (Zoom) <br /> Thursday - 7:30 PM to 9:00 PM
    </p>
  );

  let toRender = (
    <div className=" grid ">
      <WelcomeHome />
      <Slogan />
      <InfoPanel
        imagePath={ifgfHoustonBuildingImage}
        title="IFGF Houston"
        body={ifgfHouston}
      />
      <InfoPanel
        imagePath={careGroupImage}
        title="Care Group"
        body={careGroup}
      />
      <InfoPanel title="iGrow" body={iGrow} />
      <InfoPanel title="Prayer Meeting" body={prayerMeeting} />
      <AboutUsShort />
    </div>
  );
  return toRender;
};

export default Home;
