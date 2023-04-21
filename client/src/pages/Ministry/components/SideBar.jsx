import { Link } from "react-router-dom"

const SideBar = () => {
    return (
        <div>
            <div className=" flex flex-col h-auto py-4 items-center" aria-label="SideBar">
                <Link className='w-full text-center py-1 hover:opacity-90' to="/ministry" style={{textDecoration: 'none'}}>Ministry Schedule</Link>
                <Link className='w-full text-center py-1 hover:opacity-90' to="/ministry" style={{textDecoration: 'none'}}>My Schedule</Link>
                <Link className='w-full text-center py-1 hover:opacity-90' to="/ministry" style={{textDecoration: 'none'}}>My Availability</Link>
                <Link className='w-full text-center py-1 hover:opacity-90' to="/ministry" style={{textDecoration: 'none'}}>Manage Schedules</Link>
                <Link className='w-full text-center py-1 hover:opacity-90' to="/ministry/users" style={{textDecoration: 'none'}}>Users</Link>
                <Link className='w-full text-center py-1 hover:opacity-90' to="/ministry" style={{textDecoration: 'none'}}>Roles</Link>
                <Link className='w-full text-center py-1 hover:opacity-90' to="/ministry" style={{textDecoration: 'none'}}>Events</Link>
            </div>
        </div>
    )
}
 export default SideBar