import "../../App.css";
import AboutUsShort from "./AboutUsShort";
import Slogan from "./Slogan";
import WelcomeHome from "./WelcomeHome";
import InfoPanel from "./InfoPanel";
import ifgfHoustonBuildingImage from "../../assets/ifgfHoustonBuilding.png";
import careGroupImage from "../../assets/CareGroup.jpeg";

const Home = () => {
  const ifgfHouston = (
    <p>
      Onsite Service <br /> Sunday - 11:00 AM to 12:30 PM <br /> 6455 Wilcrest
      Dr, Houston, TX 77073{" "}
    </p>
  );

  const careGroup = (
    <p>
      House City (Youth) <br /> Sunday - 2:00 PM to 3:00 PM <br /> <br /> Higher
      Ground (Young Adult) <br /> Friday - 7:00 PM to 9:00 PM
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
