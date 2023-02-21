import {IconButton} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
    return (
        <footer className=" grid grid-cols-4 px-2 py-4">
            <div className=" col-start-1 text-left font-bold text-2xl ">
                IFGF HOUSTON
            </div>
            <div className=" col-start-1 text-left font-thin text-lg">
                ALIVE IN CHARACTER
            </div>
            <div className=" row-start-3 col-start-1 text-left font-thin text-base self-center">
                Phone: +1 (281)922-4343
            </div>
            <div className=" row-start-3 col-start-2 text-left font-thin text-base">
                <span className=" font-bold">International Full Gospel</span> <br/> 6455 Wilcrest Dr <br/> Houston, TX 77072
            </div>
            <div className=" row-start-3 col-start-4 text-right font-thin text-base self-center">
                ©2023 by IFGF Houston
            </div>
            <div className=" row-start-4 col-start-2 col-span-2 self-center">
                <IconButton href="https://www.facebook.com/IFGFHouston" target="_blank" rel="noreferrer">
                    <FacebookIcon />
                </IconButton>
                <FacebookIcon />
            </div>
            
            <p></p>
        </footer>
    )
}

export default Footer;