// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function SignUp() {
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:5000/api/auth/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: username,
//           email: email,
//           password: password,
//         }),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         setIsSignUp(false);
//         setUsername("");
//         setEmail("");
//         setPassword("");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const url = `http://localhost:5000/api/auth/login`;
//     const options = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     };

//     try {
//       const response = await fetch(url, options);
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         localStorage.setItem("jwt", data.token);
//         localStorage.setItem("userId", data.userId);
//         localStorage.setItem("authorName", data.authorName);
//         setEmail("");
//         setPassword("");
//         setIsSignUp(false);
//         navigate("/homepage");
//       }
//     } catch (error) {}
//   };

//   return (
//     <>
//       <section class="bg-white">
//         <div class="grid grid-cols-1 lg:grid-cols-2">
//           <div class="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
//             <div class="absolute inset-0">
//               <img
//                 class="object-cover w-full h-full"
//                 src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg"
//                 alt=""
//               />
//             </div>
//             <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

//             <div class="relative">
//               <div class="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
//                 <h3 class="text-4xl font-bold text-white">
//                   Join 35k+ web professionals & <br class="hidden xl:block" />
//                   build your website
//                 </h3>
//                 <ul class="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
//                   <li class="flex items-center space-x-3">
//                     <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
//                       <svg
//                         class="w-3.5 h-3.5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fill-rule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clip-rule="evenodd"
//                         ></path>
//                       </svg>
//                     </div>
//                     <span class="text-lg font-medium text-white">
//                       {" "}
//                       Commercial License{" "}
//                     </span>
//                   </li>
//                   <li class="flex items-center space-x-3">
//                     <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
//                       <svg
//                         class="w-3.5 h-3.5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fill-rule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clip-rule="evenodd"
//                         ></path>
//                       </svg>
//                     </div>
//                     <span class="text-lg font-medium text-white">
//                       {" "}
//                       Unlimited Exports{" "}
//                     </span>
//                   </li>
//                   <li class="flex items-center space-x-3">
//                     <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
//                       <svg
//                         class="w-3.5 h-3.5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fill-rule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clip-rule="evenodd"
//                         ></path>
//                       </svg>
//                     </div>
//                     <span class="text-lg font-medium text-white">
//                       {" "}
//                       120+ Coded Blocks{" "}
//                     </span>
//                   </li>
//                   <li class="flex items-center space-x-3">
//                     <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
//                       <svg
//                         class="w-3.5 h-3.5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fill-rule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clip-rule="evenodd"
//                         ></path>
//                       </svg>
//                     </div>
//                     <span class="text-lg font-medium text-white">
//                       {" "}
//                       Design Files Included{" "}
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
//             <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
//               <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
//                 {isSignUp ? "Sign up to Celebration" : "Login to Celebration"}
//               </h2>
//               <p class="mt-2 text-base text-gray-600">
//                 {isSignUp ? (
//                   <>
//                     Already have an account?{" "}
//                     <a
//                       href="#"
//                       onClick={() => setIsSignUp(false)}
//                       class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
//                     >
//                       Login
//                     </a>
//                   </>
//                 ) : (
//                   <>
//                     Don't have an account?{" "}
//                     <a
//                       href="#"
//                       onClick={() => setIsSignUp(true)}
//                       class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
//                     >
//                       Sign Up
//                     </a>
//                   </>
//                 )}
//               </p>

//               <form
//                 action="#"
//                 method="POST"
//                 class="mt-8"
//                 onSubmit={isSignUp ? handleRegister : handleLogin}
//               >
//                 <div class="space-y-5">
//                   {isSignUp && (
//                     <div>
//                       <label for="" class="text-base font-medium text-gray-900">
//                         {" "}
//                         First & Last name{" "}
//                       </label>
//                       <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
//                         <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                           <svg
//                             class="w-5 h-5"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               stroke-width="2"
//                               d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                             />
//                           </svg>
//                         </div>

//                         <input
//                           type="text"
//                           placeholder="Enter your full name"
//                           value={username}
//                           onChange={(e) => setUsername(e.target.value)}
//                           class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
//                         />
//                       </div>
//                     </div>
//                   )}

//                   <div>
//                     <label for="" class="text-base font-medium text-gray-900">
//                       {" "}
//                       Email address{" "}
//                     </label>
//                     <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
//                       <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                         <svg
//                           class="w-5 h-5"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                           />
//                         </svg>
//                       </div>

//                       <input
//                         type="email"
//                         placeholder="Enter your email address"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label for="" class="text-base font-medium text-gray-900">
//                       {" "}
//                       Password{" "}
//                     </label>
//                     <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
//                       <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                         <svg
//                           class="w-5 h-5"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M12 14v4m0 0h4m-4 0H8m0-6a4 4 0 118 0M4 12a8 8 0 0116 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z"
//                           />
//                         </svg>
//                       </div>

//                       <input
//                         type="password"
//                         placeholder="Enter your password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <button
//                       type="submit"
//                       class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-blue-600 hover:bg-blue-700 focus:bg-blue-700"
//                     >
//                       {isSignUp ? "Sign up" : "Log in"}
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
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
        navigate("/login"); // Redirect to login page after successful registration
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
