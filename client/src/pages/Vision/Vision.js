import ImageText from "../../components/ImageText";
import prayerImage from "../../assets/vision/HouseOfPrayer.jpeg";

const Vision = () => {
  const prayer = {
    title: "House of Prayer",
    description: (
      <p>
        To build individuals, leaders, and church that pray. <br />
        Matthew 21:13-16; Luke 11:1-10; Acts 2:42, 4:32; James 5:7-18; 2
        Chronicles 7:14; Isaiah 56:7
      </p>
    )
  };
  return (
    <div>
      <h1>Vision</h1>
      <h2>Content</h2>
      <ImageText imgPath={prayerImage} text={prayer} />
    </div>
  );
};

export default Vision;
