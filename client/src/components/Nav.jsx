import React from "react";
import { Link } from "react-router-dom";


export default function Nav() {
    return (
        <div id='navbar'className="navbar bg-base-200">
            <div className="flex-1">
                <Link to='/Home'className="btn btn-ghost btn-lg text-6xl">CookBook</Link>
            </div>
            <div>
                <ul className="menu menu-ghost menu-lg menu-horizontal rounded-box">
                    <li><Link to="/MyRecipes" className="btn btn-ghost">My Recipes</Link></li>
                    <li><Link to="/Random" className="btn btn-ghost">Random Recipe</Link></li>
                    <li><Link to="/External" className="btn btn-ghost">External Links</Link></li>
                </ul>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};