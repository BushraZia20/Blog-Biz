import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("authorName", data.authorName);
        localStorage.setItem("email", data.email);
        console.log(data.email);
        setEmail("");
        setPassword("");
        navigate("/homepage");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Section */}
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative w-full max-w-xl xl:mx-auto xl:pr-24">
            <h3 className="text-4xl font-bold text-white">
              Join 35k+ web professionals & build your website
            </h3>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Login to Celebration
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don't have an account?{" "}
              <Link to="/" className="font-medium text-blue-600">
                Sign Up
              </Link>
            </p>
            <form onSubmit={handleLogin} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full py-4 pl-10 pr-4 border rounded-md bg-gray-50"
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full py-4 pl-10 pr-4 border rounded-md bg-gray-50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-white bg-blue-600 rounded-md"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
