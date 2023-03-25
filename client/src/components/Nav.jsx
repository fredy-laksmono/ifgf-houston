import { Link } from "react-router-dom"
import { useState } from "react"
import {motion} from "framer-motion"

const Nav = ({authenticated, user}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    let authenticatedOptions

    const menuShow = (
        <section id="mobile-menu" className=" lg:hidden absolute z-30 top-0 right-0 bg-black bg-opacity-70 w-60 text-2xl flex flex-col justify-center rounded-md">
                    <button className=" text-6xl self-end px-6" onClick={closeMenu}>
                        &times;
                    </button>
                    <div className=" flex flex-col h-auto py-4 items-center" aria-label="mobile">
                        <Link className=' w-full text-center py-1 hover:opacity-90' to="/" style={{textDecoration: 'none'}}>HOME</Link>
                        <Link className='w-full text-center py-1 hover:opacity-90' to="/" style={{textDecoration: 'none'}}>OUR VISION</Link>
                        <Link className='w-full text-center py-1 hover:opacity-90' to="/aboutus" style={{textDecoration: 'none'}}>ABOUT US</Link>
                    </div>
                </section>
    )

    const menuCollapsed = (
        <button id="hamburger-button" className=" col-start-2 justify-self-end pr-4  text-3xl lg:hidden cursor-pointer" onClick={openMenu}>
            &#9776;
        </button>
    )

    const publicOptions = (
        <div className=" top-0 ">
            <nav className=" grid grid-cols-2 lg:grid-cols-9 ">
                <Link className='margin-10 pl-5  self-center ' to="/" style={{textDecoration: 'none'}}><img src="https://static.wixstatic.com/media/2422f3_16511ef06d1d4501a36369929a55c937~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IFGF-logo-01.png" alt="IFGF-logo=01.png"/></Link>
                
                {menuOpen ? menuShow : menuCollapsed}
                
                <div className=" hidden lg:flex col-span-7 gap-x-8 self-center ">
                    <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>HOME</Link>
                    <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>OUR VISION</Link>
                    <Link className='margin-10' to="/aboutus" style={{textDecoration: 'none'}}>ABOUT US</Link>
                </div>    

            </nav>
        </div>

      )

    return (
        <header>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </header>
    )
}

export default Nav;