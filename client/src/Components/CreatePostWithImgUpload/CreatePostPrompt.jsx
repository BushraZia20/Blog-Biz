import React from "react";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CreatePostPrompt = () => {
  const navigate = useNavigate();

  const handleCreatePostClick = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      navigate("/create-post-form");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="w-full bg-gradient-to-br from-purple-50 to-blue-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 transform transition-all duration-300 hover:shadow-2xl">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Create your own blogs now
          </h2>
          <p className="text-lg text-gray-600">
            Share your stories, ideas, and expertise with the world. Start your
            blogging journey today and make your voice heard!
          </p>
        </div>
        <button
          onClick={handleCreatePostClick}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          aria-label="Create a new blog post"
        >
          <span className="flex items-center gap-2">
            <FaPen className="text-lg" />
            Create Post
          </span>
        </button>
      </div>
    </div>
  );
};

export default CreatePostPrompt;
