import { useNavigate } from "react-router-dom";
import ifgfHoustonImage from '../../assets/IFGFHouston-2.jpeg'

const AboutUsShort = () => {
    const navigate = useNavigate();

    const handleMoreInfo = () => {
        navigate('/aboutus')
    }
    return (
    <section>
        <div className=" flex flex-col lg:grid grid-cols-2 pt-4">
            <img src={ifgfHoustonImage} alt="IFGFCommunity.png" />
            <div className=" flex flex-col p-12  bg-white text-black place-content-between">
                <div></div>
                <h3 className=" font-bold text-4xl">ABOUT IFGF HOUSTON</h3>
                <p className=" text-left pt-4 lg:pt-0 ">It began with a movement in the 80s that gave birth to one church, and later on spreading throughout the world. Today we are in 36 nations. People redeemed by the blood of Jesus Christ, empowered by His Holy Spirit and transformed by His Word, laboring as workers in His Kingdom with united vision and values. God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission, to show love and Compassion because he is a GOD of Covenant, who declare our purpose in creation. We are called to be a cutting edge church that follows God’s progressive vision, made into champions by the promises of His Word.</p>
                <button className=" bg-black text-white self-center lg:self-start text-base mt-4 lg:mt-0 py-1 rounded-3xl w-32" onClick={handleMoreInfo}>MORE INFO</button>
            </div>

        </div>        
    </section>
    );
}

export default AboutUsShort