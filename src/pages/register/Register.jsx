import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {

     const handleSubmit = (e) => {
          e.preventDefault();
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
                                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
                                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
                                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
                                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
                                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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

                    <div className="flex items-center justify-center space-x-2 mt-4">
                         <div className="border-b w-1/4"></div>
                         <div className="text-gray-500">Or</div>
                         <div className="border-b w-1/4"></div>
                    </div>

                    <div className="grid gap-4 mt-6">
                         <button className="flex items-center justify-center px-4 py-2 text-sm font-medium border border-blue-400 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
                              <FaFacebookF className="mr-2" /> Continue with Facebook
                         </button>
                         <button className="flex items-center justify-center px-4 py-2 text-sm font-medium border border-red-400 text-red-400 hover:text-white rounded-full hover:bg-red-500">
                              <FaGoogle className="mr-2" /> Continue with Google
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Register;
