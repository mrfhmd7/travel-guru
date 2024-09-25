import { useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const Login = () => {
     const [rememberMe, setRememberMe] = useState(false);

     const handleLogin = (e) => {
          e.preventDefault();
     };

     return (
          <div className="flex justify-center items-center h-screen bg-gray-100">
               <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
                    <div className="text-left">
                         <h2 className="text-2xl font-semibold">Login</h2>
                    </div>
                    <form onSubmit={handleLogin} className="mt-6 space-y-4">
                         <div>
                              <label className="block text-sm font-medium text-gray-700 text-left">Username or Email</label>
                              <input
                                   type="email"
                                   placeholder="email"
                                   name="email"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                   required
                              />
                         </div>
                         <div>
                              <label className="block text-sm font-medium text-gray-700 text-left">Password</label>
                              <input
                                   type="password"
                                   placeholder="password"
                                   name="password"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                   required
                              />
                         </div>
                         <div className="flex items-center justify-between">
                              <label className="flex items-center">
                                   <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={() => setRememberMe(!rememberMe)}
                                        className="form-checkbox"
                                   />
                                   <span className="ml-2 text-sm text-gray-700">Remember Me</span>
                              </label>
                              <a href="#" className="text-sm text-yellow-500 hover:underline">
                                   Forgot Password?
                              </a>
                         </div>
                         <div>
                              <button
                                   type="submit"
                                   className="w-full px-4 py-2 text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring"
                              >
                                   Login
                              </button>
                         </div>
                    </form>
                    <div className="text-center text-sm text-gray-600">
                         Don’t have an account?{' '}
                         <a href="registration" className="text-yellow-500 hover:underline">
                              Create an account
                         </a>
                    </div>
                    <div className="relative mt-6">
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
                         <button className="flex items-center justify-center px-4 py-2 text-sm font-medium border border-red-400 text-red-400 hover:text-white rounded-full hover:bg-red-500">
                              <FaGoogle className="mr-2" /> Continue with Google
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Login;
