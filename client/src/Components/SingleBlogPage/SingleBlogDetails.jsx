import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleBlogDetails = () => {
  const [showPost, setShowPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const showPostDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/images/${id}`
        );
        setShowPost(response.data); // Ensure response.data is an array or adapt accordingly
      } catch (error) {
        console.error(error);
      }
    };
    showPostDetails();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          {showPost.map((post, index) => (
            <div key={index} className="mb-10">
              {/* Banner Section */}
              <div
                className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                style={{ height: "24em" }}
              >
                <div
                  className="absolute left-0 bottom-0 w-full h-full z-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                  }}
                ></div>
                <img
                  src={post.img} // Dynamic image URL
                  className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                  alt="blog-banner"
                />
                <div className="p-4 absolute bottom-0 left-0 z-20">
                  <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                    {post.category || "General"}
                  </span>
                  <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                    {post.title}
                  </h2>
                  <div className="flex mt-3">
                    <img
                      src={
                        post.authorImage ||
                        "https://randomuser.me/api/portraits/men/97.jpg"
                      }
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                      alt="author"
                    />
                    <div>
                      <p className="font-semibold text-gray-200 text-sm">
                        {post.authorName || "Unknown Author"}
                      </p>
                      <p className="font-semibold text-gray-400 text-xs">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                <p className="pb-6">{post.content}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default SingleBlogDetails;
