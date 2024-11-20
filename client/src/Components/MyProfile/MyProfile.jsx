import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const username = localStorage.getItem("authorName");
  const userEmail = localStorage.getItem("email");
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const token = localStorage.getItem("jwt");

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownUserAvatarButton"
        onClick={toggleDropdown}
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
          alt="user photo"
        />
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownAvatar"
          className="z-10 absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-52 border border-gray-200"
        >
          <div className="px-4 py-3 text-sm text-gray-900 bg-white rounded-t-lg">
            <div className="font-semibold">{username}</div>
            <div className="text-sm text-gray-500 truncate">{userEmail}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 bg-white">
            <li>
              <Link
                to={token ? "/user-dashboard" : "/login"}
                className="block px-4 py-2 hover:bg-gray-100 rounded-md transition-all duration-150"
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="py-2 bg-white rounded-b-lg">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-md transition-all duration-150"
              onClick={handleLogout}
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
