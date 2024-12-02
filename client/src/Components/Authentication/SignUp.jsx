import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/login");
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
            <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-lg font-medium text-white">
                  Commercial License
                </span>
              </li>
              {/* Additional benefits listed here */}
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up to Celebration
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-blue-600">
                Login
              </Link>
            </p>
            <form onSubmit={handleRegister} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    First & Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full py-4 pl-10 pr-4 border rounded-md bg-gray-50"
                  />
                </div>
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
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
