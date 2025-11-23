import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const user = true;

  const links = (
    <>
      <NavLink to={"/"} className={({isActive})=> isActive ? `underline` : ``}>
        <li className="font-medium">Home</li>
      </NavLink>
      <NavLink to={"/bills"} className={({isActive})=> isActive ? `underline` : ``}>
        <li className="font-medium">Bills</li>
      </NavLink>
      {user && (
        <NavLink to={"/my-pay-bills"} className={({isActive})=> isActive ? `underline` : ``}>
          <li className="font-medium">My pay bills</li>
        </NavLink>
      )}
    </>
  );

  return (
    <div>
      {" "}
      <div className="navbar z-10 shadow-sm lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm bg-white dropdown-content absolute rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="text-xl font-bold">UniBills</a>
        </div>
        <div className="navbar-end gap-2 lg:gap-5">
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-3 px-1">{links}</ul>
          </div>
          {user ? (
            <div className="dropdown dropdown-end dropdown-click">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white absolute rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                  </a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <a className="btn text-gray-400">Button</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
