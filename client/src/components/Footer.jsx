import {IconButton} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {

    let sosmedSection
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        sosmedSection = <div>
            <IconButton color='inherit' href="fb://page/?id=123349201038361" >
                <FacebookIcon />
            </IconButton>
            <IconButton color='inherit' href="https://www.instagram.com/ifgfhouston/?_a=1" target="_blank" rel="noreferrer">
                <InstagramIcon />
            </IconButton>
        </div>
      } else {
        sosmedSection = <div>
            <IconButton color='inherit' href="https://www.facebook.com/IFGFHouston" target="_blank" rel="noreferrer">
                <FacebookIcon />
            </IconButton>
            <IconButton color='inherit' href="https://www.instagram.com/ifgfhouston/?_a=1" target="_blank" rel="noreferrer">
                <InstagramIcon />
            </IconButton>
        </div>
      }

    return (
        <div>
            <footer className=" flex flex-col lg:hidden">
                <div className=" pt-6 font-bold text-2xl ">
                    IFGF HOUSTON
                </div>
                <div className=" font-thin text-lg">
                    ALIVE IN CALLING
                </div>
                <div className=" pt-4 font-thin text-base">
                    <span className=" font-bold">International Full Gospel</span> <br/> 6455 Wilcrest Dr <br/> Houston, TX 77072
                </div>
                <div className=" pt-4 font-thin text-base self-center">
                    <span className=' font-bold'>Phone:</span> +1 (281)922-4343
                </div>
                
                <div className=" pt-4 self-center">
                    {sosmedSection}
                </div>
                
                <div className=" pb-6 pt-4 font-thin text-base self-center">
                    ©2024 by IFGF Houston
                </div>
            </footer>
            <footer className=" hidden lg:grid grid-cols-4 px-2 py-4 ">
                <div className=" col-start-1 text-left font-bold text-2xl ">
                    IFGF HOUSTON
                </div>
                <div className=" col-start-1 text-left font-thin text-lg">
                    ALIVE IN CALLING
                </div>
                <div className=" row-start-3 col-start-1 text-left font-thin text-base self-center">
                    Phone: +1 (281)922-4343
                </div>
                <div className=" row-start-3 col-start-2 text-left font-thin text-base">
                    <span className=" font-bold">International Full Gospel</span> <br/> 6455 Wilcrest Dr <br/> Houston, TX 77072
                </div>
                <div className=" row-start-3 col-start-4 text-right font-thin text-base self-center">
                    ©2024 by IFGF Houston
                </div>
                <div className=" row-start-4 col-start-2 col-span-2 self-center">
                    {sosmedSection}
                </div>
                
                <p></p>
            </footer>
        </div>
        
    )
}

export default Footer;