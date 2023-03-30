import { useEffect } from "react";
import ImageText from "../../components/ImageText";
import prayerImage from "../../assets/vision/HouseOfPrayer.jpeg";
import powerImage from "../../assets/vision/HouseOfPower.jpeg";
import worshipImage from "../../assets/vision/HouseOfWorship.jpeg";
import covenantImage from "../../assets/vision/HouseOfCovenant.jpeg";
import wordImage from "../../assets/vision/HouseOfWord.jpeg";
import missionImage from "../../assets/vision/HouseOfMission.jpeg";
import balanceImage from "../../assets/vision/HouseOfBalance.jpeg";
import givingImage from "../../assets/vision/HouseOfGiving.jpeg";
import excellenceImage from "../../assets/vision/HouseOfExcellence.jpeg";
import leadershipImage from "../../assets/vision/HouseOfLeadership.jpeg";

const Vision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  const worship = {
    title: "House of Worship",
    description: (
      <p>
        To build individuals, leaders, and church that like to praise and
        worship. <br /> <br />
        Matthew 21:15-16; John 4:23-24; Acts 2:47, 16:15-34; Psalms 149:6-9
      </p>
    )
  };

  const covenant = {
    title: "House of Covenant",
    description: (
      <p>
        To build individuals, leaders, and church that are united in covenant.
        <br /> <br />
        Matthew 13:47; John 17:20-23; Acts 2:44,46; Ephesians 2:21-22; Psalms
        133; Ecclesiastes 4:9-12
      </p>
    )
  };

  const word = {
    title: "House of Word",
    description: (
      <p>
        To build individuals, leaders, and church that are rooted in the Word.
        <br /> <br />
        John 8:32; Acts 2:42, 17:10-11; Ephesians 4:11-15; Isaiah 2:2-3
      </p>
    )
  };

  const mission = {
    title: "House of Covenant",
    description: (
      <p>
        To build individuals, leaders, and church that have world mission.
        <br /> <br />
        Matthew 28:19-20; John 3:16; Acts 1:8; 1 John 5:1; Psalms 2:8
      </p>
    )
  };

  const balance = {
    title: "House of Covenant",
    description: (
      <p>
        To build individuals, leaders, and church that are balanced.
        <br /> <br />
        Proverbs 11:1, 16:11, 20:23
      </p>
    )
  };

  const giving = {
    title: "House of Covenant",
    description: (
      <p>
        To build individuals, leaders, and church that give.
        <br /> <br />
        Acts 2:44-45, 4:34-35; 2 Corinthians 8:1-12, 9:6-8; Malachi 3:10
      </p>
    )
  };

  const excellence = {
    title: "House of Excellence",
    description: (
      <p>
        To build individuals, leaders, and church that are excellent.
        <br /> <br />
        Ephesians 5:27; 2 Kings 10:1-19; Haggai 2:9
      </p>
    )
  };

  const leadership = {
    title: "House of Godly and Skillful Leadership",
    description: (
      <p>
        To build individuals, leaders, and church that are godly and skillful.
        <br /> <br />
        Acts 6:3; 1 Timothy 3:1-7; Titus 1:5-9; Hebrews 3:1-6; Exodus 18:21
      </p>
    )
  };

  return (
    <div className=" py-4 px-8 bg-white text-black">
      <h1 className=" text-3xl mb-5">Our Vision</h1>
      <div className=" grid grid-cols-1 md:px-20 lg:px-0 xl:pr-14 xl:pl-10 lg:grid-cols-2 gap-4">
        <ImageText imgPath={prayerImage} text={prayer} />
        <ImageText imgPath={powerImage} text={power} />
        <ImageText imgPath={worshipImage} text={worship} />
        <ImageText imgPath={covenantImage} text={covenant} />
        <ImageText imgPath={wordImage} text={word} />
        <ImageText imgPath={missionImage} text={mission} />
        <ImageText imgPath={balanceImage} text={balance} />
        <ImageText imgPath={givingImage} text={giving} />
        <ImageText imgPath={excellenceImage} text={excellence} />
        <ImageText imgPath={leadershipImage} text={leadership} />
      </div>
    </div>
  );
};

export default Vision;
