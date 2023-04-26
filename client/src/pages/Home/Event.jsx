import bkkihEasterImage from '../../assets/BKKIHPassOver2032.jpeg'
import InfoPanel from "./InfoPanel";

const Event = () => {
    const bkkihEasterService = (
        <p className=' pt-4'>
            <a href="https://bit.ly/easter_bkkih" className="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded" target="_blank" rel="noreferrer">
                RSVP Here
            </a>
        </p>
    )
    return (
        <div className=" bg-black text-white pb-4 ">
            <h1 className=" font-bold text-4xl pt-8">UPCOMING SPECIAL EVENTS</h1>
            <InfoPanel imagePath="https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1" imageAlt="IFGF Houston Bazzar May 6 2023 Promo Image" title="IFGF INDO MARKET" />
        </div>
    )
}

export default Event