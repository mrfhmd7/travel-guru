import React, { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const Register = () => {

     const { signInWithGoogle, createUser } = useContext(AuthContext);

     const handleSubmit = event => {
          event.preventDefault();

          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          const confirmPassword = form.confirmPassword.value;
          console.log(name, email, password, confirmPassword);

          if (password !== confirmPassword) {
               toast.error('Passwords do not match');
               return;
          }
          else if (!/[A-Za-z]/.test(password)) {
               toast.error('Password must contain at least one uppercase or lowercase letter.');
               return;
          }
          else if (!/\d/.test(password)) {
               toast.error('Password must contain at least one number.');
               return;
          }
          else if (!/[@$!%*?&]/.test(password)) {
               toast.error('Password must contain at least one special character.');
               return;
          }
          else if (/\s/.test(password)) {
               toast.error('Password must not contain spaces.');
               return;
          }
          else if (password.length < 8 || password.length > 16) {
               toast.error('Password length should be between 8 and 16 characters.');
               return;
          }

          createUser(email, password)
               .then(result => {
                    const loggedUser = result.user;
                    // console.log(loggedUser);
                    toast.success('Account created successfully');
                    form.reset();
                    verifyEmail(loggedUser);
                    updateUserData(loggedUser, name)
               })
               .catch(error => {
                    console.log(error);
                    toast.error('Error creating account');
               })
     };

     const updateUserData = (user, name) => {
          updateProfile(user, {
               displayName: name,
          })
               .then(() => {
                    console.log('User name Updated');
               })
               .catch(error => {
                    console.log(error);
               }
               )
     };

     const verifyEmail = user => {
          sendEmailVerification(user)
               .then((result) => {
                    console.log(result);
                    toast.warn("Please varify your email");
               })
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
                                   Name
                              </label>
                              <input
                                   type="text"
                                   name="name"
                                   placeholder="name"
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
                              className="w-full py-2 px-4 hover:text-white border border-yellow-400 rounded-lg hover:bg-yellow-500"
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

                    <ToastContainer />

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
