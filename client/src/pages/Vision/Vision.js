import ImageText from "../../components/ImageText";
import prayerImage from "../../assets/vision/HouseOfPrayer.jpeg";
import powerImage from "../../assets/vision/HouseOfPower.jpeg";

const Vision = () => {
  const prayer = {
    title: "House of Prayer",
    description: (
      <p>
        To build individuals, leaders, and church that pray. <br /> <br />
        Matthew 21:13-16; Luke 11:1-10; Acts 2:42, 4:32; James 5:7-18; 2
        Chronicles 7:14; Isaiah 56:7
      </p>
    )
  };

  const power = {
    title: "House of Power",
    description: (
      <p>
        To build individuals, leaders, and church that have power. <br /> <br />
        Matthew 21:14, 28:18-20; Mark 16:17; Luke 10:19; Acts 2:43
      </p>
    )
  };

  return (
    <div className=" py-4 px-8 bg-white text-black">
      <h1 className=" text-3xl mb-5">Our Vision</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageText imgPath={prayerImage} text={prayer} />
        <ImageText imgPath={powerImage} text={power} />
      </div>
    </div>
  );
};

export default Vision;
