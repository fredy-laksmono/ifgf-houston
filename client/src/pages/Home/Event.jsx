import gfesImage from '../../assets/GoodFridayEasterSunday.jpg'
import womenMinistryImage from '../../assets/IFGFWomensMinistryApril2023.jpeg'
import bkkihEasterImage from '../../assets/BKKIHPassOver2032.jpeg'
import InfoPanel from "./InfoPanel";

const Event = () => {
    const gfes = (
        <p className=' pt-4'>
            <a href="https://forms.gle/U3EeieTdBc12UBNf9" className="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded" target="_blank" rel="noreferrer">
                RSVP Here
            </a>
        </p>
    )
    const womenMinistry = (
        <p className=' pt-4'>
            <a href="https://forms.gle/oEK5NHqmxjnRATaj6" className="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded" target="_blank" rel="noreferrer">
                RSVP Here
            </a>
        </p>
    )
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
            <InfoPanel imagePath={gfesImage} imageAlt="Good Friday and Easter Sunday Service Promo Image" title="Good Friday & Easter Sunday Service" body={gfes} />
            <InfoPanel imagePath={womenMinistryImage} imageAlt="IFGF Women's Ministry Promo Image" title="IFGF Women's Ministry" body={womenMinistry} />
            <InfoPanel imagePath={bkkihEasterImage} imageAlt="BKKIH Easter Service Promo Image" title="BKKIH Easter Service" body={bkkihEasterService} />
        </div>
    )
}

export default Event