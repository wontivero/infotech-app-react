import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 bg-blue-300">
            <div className="flex-1">
                <span className="btn btn-ghost normal-case text-xl">Info-Tech</span>
            </div>
            <div className="flex-none">
                <CartWidget />

                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
                        </div>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <span className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </span>
                        </li>
                        <li><span>Settings</span></li>
                        <li><span>Logout</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar