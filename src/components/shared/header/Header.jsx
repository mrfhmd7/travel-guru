import React, { useState } from "react";
import { Link } from "react-router-dom";
import travelLogo from "../../../assets/logo.svg";
import travelLogoB from "../../../assets/logo-b.svg";

const Header = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [searchTerm, setSearchTerm] = useState("");

     const toggleMenu = () => {
          setIsOpen(!isOpen);
     };

     const handleSearch = (event) => {
          setSearchTerm(event.target.value);
     };

     return (
          <header className="bg-transparent shadow-md  w-full z-10">
               <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex space-x-4">
                         <div className="h-10">
                              <Link to="/">
                                   <img src={travelLogo} alt="Travel Guru Logo" className="w-full h-full" />
                              </Link>
                         </div>
                         <div className="hidden lg:block">
                              <input
                                   type="text"
                                   value={searchTerm}
                                   onChange={handleSearch}
                                   placeholder="Search destinations..."
                                   className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                              />
                         </div>
                    </div>

                    <button
                         onClick={toggleMenu}
                         className="block lg:hidden text-gray-600 focus:outline-none"
                    >
                         <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   d="M4 6h16M4 12h16m-7 6h7"
                              ></path>
                         </svg>
                    </button>
                    <nav className="hidden lg:flex space-x-8">
                         <Link to="/news" className="text-gray-700">
                              News
                         </Link>
                         <Link to="/destination" className="text-gray-700">
                              Destination
                         </Link>
                         <Link to="/blog" className="text-gray-700">
                              Blog
                         </Link>
                         <Link to="/contact" className="text-gray-700">
                              Contact
                         </Link>
                         <Link to="/login" className="text-gray-700">
                              Login
                         </Link>
                         <Link to="/registration" className="text-gray-700">
                              Register
                         </Link>
                    </nav>
               </div>

               <div
                    className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                         } transition-transform duration-300 ease-in-out bg-white w-64 z-20`}
               >
                    <div className="flex items-center justify-between p-4 border-b">
                         {/* <h2 className="text-xl font-bold">Menu</h2> */}
                         <Link to="/">
                              <img src={travelLogoB} alt="Travel Guru Logo" className="w-full h-12" />
                         </Link>
                         <button onClick={toggleMenu} className="focus:outline-none">
                              <svg
                                   className="w-6 h-6"
                                   fill="none"
                                   stroke="currentColor"
                                   viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                   ></path>
                              </svg>
                         </button>
                    </div>

                    <div className="p-4">
                         <input
                              type="text"
                              value={searchTerm}
                              onChange={handleSearch}
                              placeholder="Search destinations..."
                              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                         />
                    </div>

                    <nav className="mt-4 space-y-4">
                         <Link
                              to="/news"
                              onClick={toggleMenu}
                              className="block text-gray-700 p-2"
                         >
                              News
                         </Link>
                         <Link
                              to="/destination"
                              onClick={toggleMenu}
                              className="block text-gray-700 p-2"
                         >
                              Destination
                         </Link>
                         <Link
                              to="/blog"
                              onClick={toggleMenu}
                              className="block text-gray-700 p-2"
                         >
                              Blog
                         </Link>
                         <Link
                              to="/contact"
                              onClick={toggleMenu}
                              className="block text-gray-700 p-2"
                         >
                              Contact
                         </Link>
                         <Link
                              to="/login"
                              onClick={toggleMenu}
                              className="block text-gray-700 p-2">
                              Login
                         </Link>
                         <Link to="/registration"
                              onClick={toggleMenu}
                              className="block text-gray-700 p-2">
                              Register
                         </Link>
                    </nav>
               </div>

               {isOpen && (
                    <div
                         onClick={toggleMenu}
                         className="fixed inset-0 bg-black opacity-50 z-10"
                    ></div>
               )}
          </header>
     );
};

export default Header;
