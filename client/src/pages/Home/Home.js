import "../../App.css";
import { useEffect } from "react";
import AboutUsShort from "./AboutUsShort";
import Slogan from "./Slogan";
import WelcomeHome from "./WelcomeHome";
import Event from "./Event";
import InfoPanel from "./InfoPanel";
import InstagramFeed from "./InstagramFeed";
import ifgfHoustonBuildingImage from "../../assets/ifgfHoustonBuilding.png";
import careGroupImage from "../../assets/CareGroup.jpeg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      Online Bible Study (Zoom) <br /> Wednesday - 7:00 PM to 8:00 PM
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
      {/* <Event /> */}
      <h1 className=" font-bold text-4xl pt-8 bg-black text-white">SERVICES</h1>
      <InfoPanel
        imagePath={ifgfHoustonBuildingImage}
        imageAlt="IFGF Houston Building Image"
        title="IFGF Houston"
        body={ifgfHouston}
        // style="white"
      />
      <InfoPanel
        imagePath={careGroupImage}
        imageAlt="Care Group Image"
        title="Care Group"
        body={careGroup}
      />
      <InfoPanel title="iGrow" body={iGrow} />
      <InfoPanel title="Prayer Meeting" body={prayerMeeting} />
      {/* <InstagramFeed /> */}
      <AboutUsShort />
    </div>
  );
  return toRender;
};

export default Home;
