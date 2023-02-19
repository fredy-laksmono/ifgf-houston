import { Link } from "react-router-dom"

const Nav = ({authenticated, user}) => {

    let authenticatedOptions

    const publicOptions = (
        <div className=" top-0 ">
            <nav className=" grid grid-cols-2 lg:grid-cols-9  ">
                <Link className='margin-10 pl-5 ' to="/" style={{textDecoration: 'none'}}><img src="https://static.wixstatic.com/media/2422f3_16511ef06d1d4501a36369929a55c937~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IFGF-logo-01.png" alt="IFGF-logo=01.png"/></Link>
                <button id="hamburger-button" className=" col-start-2 justify-self-end pr-4 text-3xl lg:hidden cursor-pointer">
                    &#9776;
                </button>
                <div className=" col-span-7 ">
                    <div className=" hidden lg:flex gap-x-8 pt-4 ">
                        <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>HOME</Link>
                        <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>ABOUT US</Link>
                        <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>PASTORAL CARE</Link>
                        <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>GROW</Link>
                        <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>LOCATION</Link>
                        <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>MISSION</Link>
                        <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>EVENT</Link>
                        <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>GIVING</Link>
                    </div>
                    
                </div>
                
                {/* <section id="mobile-menu" className=" col-span-7 absolute top-0 bg-black w-full text-5xl flex flex-col justify-center">
                    <button className=" text-6xl self-end px-6">
                        &times;
                    </button>
                    <div className=" flex flex-col min-h-screen items-center py-8" aria-label="mobile">
                        <Link className=' w-full text-center py-6 hover:opacity-90' to="/" style={{textDecoration: 'none'}}>HOME</Link>
                        <Link className='w-full text-center py-6 hover:opacity-90' to="/" style={{textDecoration: 'none'}}>ABOUT US</Link>
                        <Link className='w-full text-center py-6 hover:opacity-90' to="/" style={{textDecoration: 'none'}}>PASTORAL CARE</Link>
                        <Link className='w-full text-center py-6 hover:opacity-90' to="/" style={{textDecoration: 'none'}}>GROW</Link>
                        <Link className='w-full text-center py-6 hover:opacity-90' to="/" style={{textDecoration: 'none'}}>LOCATION</Link>
                        <Link className='w-full text-center py-6 hover:opacity-90' to="/" style={{textDecoration: 'none'}}>MISSION</Link>
                        <Link className='w-full text-center py-6 hover:opacity-90' to="/" style={{textDecoration: 'none'}}>EVENT</Link>
                        <Link className='w-full text-center py-6 hover:opacity-90' to="/" style={{textDecoration: 'none'}}>GIVING</Link>
                    </div>
                </section> */}
                <div></div>
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