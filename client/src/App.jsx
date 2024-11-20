import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import SingleBlogDetails from "./Components/SingleBlogPage/SingleBlogDetails";
import CreatePostForm from "./Components/CreatePostWithImgUpload/CreatePostForm";
import SignUp from "./Components/Authentication/SignUp";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Authentication/Login";
import UserDashBoard from "./Components/UserDashBoard/UserDashBoard";
import EditPost from "./Components/EditPostModal/EditPostModal";
import MyPosts from "./Components/UserDashBoard/MyPosts";

function App() {
  const token = localStorage.getItem("jwt");

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#F4F5FF" }}>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/homepage" element={<HomePage />} />

          <Route
            path="/single-blog-details/:id"
            element={<SingleBlogDetails />}
          />

          <Route path="/create-post-form" element={<CreatePostForm />} />
          <Route path="/user-dashboard" element={<UserDashBoard />} />
          <Route path="/my-posts" element={<MyPosts />} />
          {/* <Route path="/" element={<EditPost />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
