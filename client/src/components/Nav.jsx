import { Link } from "react-router-dom"

const Nav = ({authenticated, user}) => {

    let authenticatedOptions

    const publicOptions = (
        <nav className=" fixed top-0 grid grid-cols-5 ">
            <Link className='margin-10' to="/" style={{textDecoration: 'none'}}><img src="https://static.wixstatic.com/media/2422f3_16511ef06d1d4501a36369929a55c937~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IFGF-logo-01.png" alt="IFGF-logo=01.png"/></Link>
          <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>HOME</Link>
          <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>ABOUT US</Link>
          <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>PASTORAL CARE</Link>
          <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>GROW</Link>
          <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>LOCATION</Link>
          <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>MISSION</Link>
          <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>EVENT</Link>
          <Link className='margin-10' to="/" style={{textDecoration: 'none'}}>GIVING</Link>
        </nav>
      )

    return (
        <header>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </header>
    )
}

export default Nav;