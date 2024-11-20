import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://blog-biz.onrender.com/api/images`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-[#F4F5FF] font-[sans-serif] my-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
            LATEST BLOGS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
          {posts.map((post) => (
            <Link
              to={`/single-blog-details/${post.id}`}
              key={post.id}
              className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">
                  {new Date(post.createdAt).toLocaleDateString()} |{" "}
                  {post.username}
                </span>
                <h3 className="text-xl font-bold text-gray-800">
                  {post.title}
                </h3>
                <hr className="my-4" />
                <p className="text-gray-400 text-sm line-clamp-2 overflow-hidden text-ellipsis">
                  {post.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
