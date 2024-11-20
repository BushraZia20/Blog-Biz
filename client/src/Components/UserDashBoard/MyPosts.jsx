import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";
import EditPostModal from "../EditPostModal/EditPostModal";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const getMyPosts = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          setError("User not logged in");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/images/myposts`,
          {
            params: { userId },
          }
        );

        setPosts(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    getMyPosts();
  }, []);

  console.log(selectedPost);
  const handleDeletePost = async (postId) => {
    try {
      const confirmation = window.confirm(
        "Are you sure you want to delete this post?"
      );
      if (!confirmation) return;
      const response = await axios.delete(
        `http://localhost:5000/api/images/${postId}`
      );
      if (response.status === 200) {
        setPosts((prev) => prev.filter((post) => post._id !== postId));
        alert("Post deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPost = async (postData) => {
    try {
      const formData = new FormData();
      formData.append("category", postData.category);
      formData.append("title", postData.title);
      formData.append("content", postData.content);
      if (postData.image) formData.append("image", postData.image);

      const response = await axios.patch(
        `${apiUrl}/api/images/${postData.id}`,
        formData
      );
      setPosts((prev) =>
        prev.map((post) =>
          post._id === postData.id ? { ...post, ...response.data.post } : post
        )
      );

      setIsModalOpen(false);
      alert("Post Updated Successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white font-[sans-serif] my-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
            MY BLOGS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300 group"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute top-4 right-4 hidden group-hover:flex gap-3">
                <FiEdit
                  className="text-gray-700 cursor-pointer text-3xl p-2 rounded-full shadow-lg transition duration-200"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                  onClick={() => {
                    setSelectedPost(post);
                    setIsModalOpen(true);
                  }}
                />
                <FiX
                  className="text-gray-700 cursor-pointer text-3xl p-2 rounded-full shadow-lg transition duration-200"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                  onClick={() => {
                    setSelectedPost(post);
                    handleDeletePost(post._id);
                  }}
                />
              </div>
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">
                  {new Date(post.createdAt).toLocaleDateString()} | BY{" "}
                  {post.username || "Anonymous"}
                </span>
                <h3 className="text-xl font-bold text-gray-800">
                  {post.title}
                </h3>
                <hr className="my-4" />
                <p className="text-gray-400 text-sm">
                  {post.content.length > 100
                    ? post.content.substring(0, 100) + "..."
                    : post.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EditPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        post={selectedPost}
        onEdit={handleEditPost}
      />
    </div>
  );
};

export default MyPosts;
