import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const Navbar = () => {
    return (
        <div className="navbar bg-blue-300 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/categoria/Notebooks">Notebooks</Link></li>
                        <li><Link to="/categoria/Impresoras">Impresoras</Link></li>
                        <li><Link to="/categoria/Tablets">Tablets</Link></li>
                    </ul>
                </div>
                <span className="btn btn-ghost normal-case text-xl"><Link to={'/'}>Info-Tech</Link></span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/categoria/Notebooks">Notebooks</Link></li>
                    <li><Link to="/categoria/Impresoras">Impresoras</Link></li>
                    <li><Link to="/categoria/Tablets">Tablets</Link></li>
                </ul>
            </div>

            <div className="navbar-end">
                <Link to="/cart" > <CartWidget /> </Link>
                <div className="dropdown dropdown-end">
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
                        </div>
                    </label>
                </div>
            </div>
        </div>

    )
}
export default Navbar