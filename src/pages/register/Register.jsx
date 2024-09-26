import React, { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {

     const { signInWithGoogle } = useContext(AuthContext);

     const handleSubmit = (e) => {
          e.preventDefault();
     };

     const handleGoogleSignUp = () => {
          signInWithGoogle()
              .then(result => {
                  const loggedUser = result.user;
                  console.log("Google Sign-In Successful:", loggedUser);
              })
              .catch(error => {
                  console.error("Google Sign-In Error:", error.message); // Log the specific error message
              });
      };
      

     return (
          <div className="flex justify-center items-center pt-8 pb-8 bg-gray-100">
               <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-center text-2xl font-bold">Create an account</h2>
                    <form className="space-y-4 text-left" onSubmit={handleSubmit}>
                         <div>
                              <label className="block text-sm font-medium text-gray-700">
                                   First Name
                              </label>
                              <input
                                   type="text"
                                   name="firstName"
                                   placeholder="first name"
                                   required
                                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                              />
                         </div>

                         <div>
                              <label className="block text-sm font-medium text-gray-700">
                                   Last Name
                              </label>
                              <input
                                   type="text"
                                   name="lastName"
                                   placeholder="last name"
                                   required
                                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                              />
                         </div>

                         <div>
                              <label className="block text-sm font-medium text-gray-700">
                                   Username or Email
                              </label>
                              <input
                                   type="email"
                                   name="email"
                                   placeholder="email"
                                   required
                                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                              />
                         </div>

                         <div>
                              <label className="block text-sm font-medium text-gray-700">
                                   Password
                              </label>
                              <input
                                   type="password"
                                   name="password"
                                   placeholder="password"
                                   required
                                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                              />
                         </div>

                         <div>
                              <label className="block text-sm font-medium text-gray-700">
                                   Confirm Password
                              </label>
                              <input
                                   type="password"
                                   name="confirmPassword"
                                   placeholder="confirm password"
                                   required
                                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                              />
                         </div>

                         <button
                              type="submit"
                              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
                         >
                              Create an account
                         </button>
                    </form>

                    <div className="text-center">
                         Already have an account?{" "}
                         <Link to="/login" className="text-yellow-500 hover:underline">
                              Login
                         </Link>
                    </div>

                    <div className="relative">
                         <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-300"></div>
                         </div>
                         <div className="relative flex justify-center text-sm">
                              <span className="px-2 bg-white text-gray-500">Or</span>
                         </div>
                    </div>

                    <div className="grid gap-4 mt-6">
                         <button className="flex items-center justify-center px-4 py-2 text-sm font-medium border border-blue-400 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
                              <FaFacebookF className="mr-2" /> Continue with Facebook
                         </button>
                         <button
                              onClick={handleGoogleSignUp}
                              className="flex items-center justify-center px-4 py-2 text-sm font-medium border border-red-400 text-red-400 hover:text-white rounded-full hover:bg-red-500">
                              <FaGoogle className="mr-2" /> Continue with Google
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Register;
