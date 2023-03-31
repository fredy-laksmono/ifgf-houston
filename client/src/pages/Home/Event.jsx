import event1Image from '../../assets/GoodFridayEasterSunday.jpg'
import InfoPanel from "./InfoPanel";

const Event = () => {
    const event1 = (
    <p className=' pt-4'>
        <a href="https://forms.gle/U3EeieTdBc12UBNf9" class="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded" target="_blank" rel="noreferrer">
            RSVP Here
        </a>
    </p>
    )
    return (
        <div className=" bg-black text-white ">
            <h1 className=" font-bold text-4xl pt-4">UPCOMING EVENTS</h1>
            <InfoPanel imagePath={event1Image} imageAlt="Good Friday and Easter Sunday Service Promo Image" title="Good Friday & Easter Sunday Service" body={event1} />
        </div>
    )
}

export default Event