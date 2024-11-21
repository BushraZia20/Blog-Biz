import React, { useEffect } from "react";
import MyPosts from "./MyPosts";
import { Link, useNavigate } from "react-router-dom";

const UserDashBoard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("authorName");
  const userEmail = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) navigate("/");
  }, [navigate]);
  return (
    <div>
      <section className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col xl:flex-row items-center">
            {/* User Info Section */}
            <div className="flex flex-col items-center w-full xl:w-1/3">
              <img
                className="h-48 w-48 sm:w-56 sm:h-56 object-cover rounded-full shadow-lg border-4 border-blue-500"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
                alt="User Profile"
              />
              <h2 className="text-2xl font-bold mt-4 text-gray-800">
                Welcome, {username}!
              </h2>
              <p className="text-gray-500">Full Stack Developer</p>
              <div className="flex mt-8 space-x-4">
                <a
                  href="#edit-profile"
                  className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
                >
                  Edit Profile
                </a>
                <a
                  href="#logout"
                  className="px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </div>
            </div>

            {/* Dashboard Details */}
            <div className="w-full mt-12 xl:mt-0 xl:ml-12 xl:w-2/3">
              {/* Account Information */}
              <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Account Information
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-700 font-medium">{userEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-700 font-medium">+1 234 567 8901</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Member Since</p>
                    <p className="text-gray-700 font-medium">January 2022</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-700 font-medium">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>

              {/* Simplified Quick Links */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Quick Links
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Link
                    to="/my-posts"
                    className="p-6 bg-blue-100 rounded-lg shadow hover:shadow-lg hover:bg-blue-200 transition duration-300 flex flex-col items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-10 h-10 text-blue-600 mb-3"
                    >
                      <path d="M4 4h16v2H4z" />
                      <path d="M4 7h16v2H4zM4 10h16v2H4zM4 13h16v2H4zM4 16h16v2H4zM4 19h16v2H4z" />
                    </svg>
                    <span className="text-blue-700 font-medium">My Posts</span>
                  </Link>

                  <Link
                    to="/create-post-form"
                    className="p-6 bg-green-100 rounded-lg shadow hover:shadow-lg hover:bg-green-200 transition duration-300 flex flex-col items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-10 h-10 text-green-600 mb-3"
                    >
                      <path d="M5 3h4v2H5zM3 5h2v4H3zM19 3h4v2h-4zM21 5h-2v4h2zM3 19h4v2H3zM5 21H3v-4h2zM19 19h4v2h-4zM21 21h-2v-4h2z" />
                    </svg>
                    <span className="text-green-700 font-medium">
                      Create New Post
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MyPosts />
    </div>
  );
};

export default UserDashBoard;
