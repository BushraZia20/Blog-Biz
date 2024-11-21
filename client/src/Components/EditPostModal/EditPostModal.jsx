import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const EditPost = ({ post, isOpen, onClose, onEdit }) => {
  const [category, setCategory] = useState(post?.category || "");
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (post) {
      setCategory(post.category);
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  // const handleSaveChanges = async () => {
  //   const formData = new FormData();
  //   formData.append("category", category);
  //   formData.append("title", title);
  //   formData.append("content", content);
  //   if (image) formData.append("image", image);

  //   try {
  //     const response = await axios.patch(
  //       `http://localhost:5000/api/images/${post._id}`
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setIsModalOpen(false);
  // };

  const handleEdit = (e) => {
    e.preventDefault();
    onEdit({
      id: post._id,
      category,
      title,
      content,
      image,
    });
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="bg-white p-6 w-full max-w-lg rounded-lg relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FiX size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Edit Post</h2>
        <form onSubmit={handleEdit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium">Category</span>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Title</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Content</span>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
              rows="5"
              required
            ></textarea>
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Image</span>
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-2 block w-full text-gray-500 border border-gray-300 rounded-lg shadow-sm"
              accept="image/*"
            />
          </label>

          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="object-cover w-full h-52 rounded-lg shadow-md"
              />
            </div>
          )}

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
