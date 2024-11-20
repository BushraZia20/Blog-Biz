import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePostForm = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("authorName");
  // Get dominant color for background
  const getDominantColor = (imgEl) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = imgEl.width;
    canvas.height = imgEl.height;
    context.drawImage(imgEl, 0, 0, imgEl.width, imgEl.height);

    const imgData = context.getImageData(0, 0, imgEl.width, imgEl.height).data;
    const color = { r: 0, g: 0, b: 0, count: 0 };

    for (let i = 0; i < imgData.length; i += 4) {
      color.r += imgData[i];
      color.g += imgData[i + 1];
      color.b += imgData[i + 2];
      color.count++;
    }

    color.r = Math.floor(color.r / color.count);
    color.g = Math.floor(color.g / color.count);
    color.b = Math.floor(color.b / color.count);

    return `rgb(${color.r}, ${color.g}, ${color.b})`;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);

        const imgEl = new Image();
        imgEl.src = reader.result;
        imgEl.onload = () => {
          const dominantColor = getDominantColor(imgEl);
          setBgColor(dominantColor);
        };
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setBgColor("#ffffff");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("userId", userId);
    formData.append("username", username);

    try {
      const response = await axios.post(
        `${apiUrl}/api/images/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert(response.data.message);
      navigate("/homepage");
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="flex justify-center items-center min-h-screen transition-all duration-500"
        style={{ backgroundColor: bgColor }}
      >
        {imagePreview && (
          <div
            className="fixed inset-0 z-0 bg-cover bg-center opacity-20 filter blur-lg"
            style={{
              backgroundImage: `url(${imagePreview})`,
            }}
          ></div>
        )}

        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col md:flex-row w-full max-w-4xl bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden p-8"
        >
          <div className="w-full md:w-1/3 p-4 flex items-center justify-center">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="object-cover w-52 h-52 rounded-xl shadow-xl"
              />
            ) : (
              <div className="text-gray-200 text-center">
                <p className="text-xl font-semibold">No Image Selected</p>
                <p className="text-sm">Image preview will appear here</p>
              </div>
            )}
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
              Upload Blog Post
            </h2>

            <label className="block">
              <span className="text-gray-700 font-medium">Category</span>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-lg focus:outline-none"
                placeholder="Enter category"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Title</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-lg focus:outline-none"
                placeholder="Enter title"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Content</span>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-lg focus:outline-none"
                rows="5"
                placeholder="Write your content here"
                required
              ></textarea>
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Image</span>
              <input
                type="file"
                onChange={handleImageChange}
                className="mt-2 block w-full text-gray-500 border border-gray-300 rounded-lg shadow-lg"
                accept="image/*"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg shadow-lg hover:bg-purple-600 focus:outline-none transition duration-300"
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePostForm;
