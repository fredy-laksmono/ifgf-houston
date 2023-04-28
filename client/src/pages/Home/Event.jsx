import InfoPanel from "./InfoPanel";
import { useNavigate } from "react-router-dom";

const Event = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/indomarket');
      };

    const indoMarket = (
        // <p className=' pt-4'>
        //     <a href="https://bit.ly/easter_bkkih" className="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded" target="_blank" rel="noreferrer">
        //         RSVP Here
        //     </a>
        // </p>
        <button className=" text-lg bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded" onClick={handleClick}>View Menu</button>
    )
    return (
        <div className=" bg-black text-white pb-4 ">
            <h1 className=" font-bold text-4xl pt-8">UPCOMING SPECIAL EVENTS</h1>
            <InfoPanel imagePath="https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1" imageAlt="IFGF Houston Bazzar May 6 2023 Promo Image" title="IFGF INDO MARKET" body={indoMarket}/>
        </div>
    )
}

export default Event