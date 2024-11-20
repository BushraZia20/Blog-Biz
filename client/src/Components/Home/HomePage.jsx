import React, { useEffect } from "react";
import Navbar from "../Header/Navbar";
import LatestBlogs from "../LatestBlogs/LatestBlogs";
import CreatePostPrompt from "../CreatePostWithImgUpload/CreatePostPrompt";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) navigate("/");
  }, [navigate]);
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* Left Side Image */}
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60 w-full lg:w-1/2 h-96 lg:h-[42.1em] mb-10 lg:mb-0">
            <img
              src="https://readymadeui.com/images/food22.webp"
              alt="Blog Post 3"
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
              <span className="text-sm block mb-2 text-yellow-400 font-semibold">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 className="text-xl font-bold text-white">
                Trends and Predictions
              </h3>
              <div className="mt-4">
                <p className="text-gray-200 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="flex flex-col w-full lg:w-1/2 lg:pl-12 gap-6">
            {/* Card 1 */}
            <div className="flex bg-white bg-opacity-20 backdrop-blur-lg shadow-xl rounded-lg overflow-hidden h-[13em]">
              <img
                src="https://readymadeui.com/images/food33.webp"
                alt="Technology Article"
                className="w-1/3 h-full object-cover"
              />
              <div className="p-6 flex flex-col justify-center w-2/3">
                <span className="text-sm text-blue-600 font-semibold mb-2">
                  Technology
                </span>
                <h2 className="text-gray-900 text-lg font-bold mb-2">
                  Want a Career in Technology? Make This Your Secret Weapon
                </h2>
                <span className="text-sm text-gray-500">June 28, 2021</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex bg-white bg-opacity-20 backdrop-blur-lg shadow-xl rounded-lg overflow-hidden h-[13em]">
              <img
                src="https://readymadeui.com/images/food44.webp"
                alt="Health Article"
                className="w-1/3 h-full object-cover"
              />
              <div className="p-6 flex flex-col justify-center w-2/3">
                <span className="text-sm text-green-600 font-semibold mb-2">
                  Health
                </span>
                <h2 className="text-gray-900 text-lg font-bold mb-2">
                  The Health Industry Is Changing Fast. Here’s How to Keep Pace
                </h2>
                <span className="text-sm text-gray-500">June 28, 2021</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex bg-white bg-opacity-20 backdrop-blur-lg shadow-xl rounded-lg overflow-hidden h-[13em]">
              <img
                src="https://readymadeui.com/images/food11.webp"
                alt="Technology Article"
                className="w-1/3 h-full object-cover"
              />
              <div className="p-6 flex flex-col justify-center w-2/3">
                <span className="text-sm text-blue-600 font-semibold mb-2">
                  Technology
                </span>
                <h2 className="text-gray-900 text-lg font-bold mb-2">
                  Everything You Ever Wanted to Know About Technology
                </h2>
                <span className="text-sm text-gray-500">June 28, 2021</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LatestBlogs />
      <CreatePostPrompt />
    </>
  );
};

export default HomePage;
