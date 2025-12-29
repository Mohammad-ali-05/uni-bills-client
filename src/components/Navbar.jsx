import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Login from "../pages/Login";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "tight");
  const { user, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (checked) => {
    console.log(checked);
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? `underline` : ``)}>
        <li className="font-medium">Home</li>
      </NavLink>
      <NavLink
        to={"/bills"}
        className={({ isActive }) => (isActive ? `underline` : ``)}>
        <li className="font-medium">Bills</li>
      </NavLink>
      {user && (
        <NavLink
          to={"/my-pay-bills"}
          className={({ isActive }) => (isActive ? `underline` : ``)}>
          <li className="font-medium">My pay bills</li>
        </NavLink>
      )}
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then((/* result */) => {
        /* console.log(result); */
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <Link to={"/"} className="text-xl font-bold">
            UniBills
          </Link>
        </div>
        <div className="navbar-end gap-2 ">
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
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content border border-gray-300 absolute rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <Link to={"/profile"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <p onClick={handleLogout}>Logout</p>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"} className="btn btn-sm btn-outline btn-primary">
              login
            </Link>
          )}
          <label className="toggle text-base-content">
            <input
              onClick={(e) => handleThemeChange(e.target.checked)}
              type="checkbox"
              checked={theme === "dark" ? true : false}
              value="synthwave"
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
