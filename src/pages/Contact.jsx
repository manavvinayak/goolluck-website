import React from "react";
import { useForm } from "@formspree/react";

const Contact = () => {
   const [state, handleSubmit] = useForm("xeoqovok");

   if (state.succeeded) {
      return (
         <div className="flex items-center justify-center h-screen">
            <p className="text-lg font-semibold text-green-600">
               Thanks for submitting your message! We'll get back to you shortly.
            </p>
         </div>
      );
   }

   return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50 px-5">
         <div className="bg-white shadow-md rounded-lg w-full max-w-[600px] p-8">
            <h2 className="text-4xl font-bold text-primary text-center mb-4">
               Contact <span>Us</span>
            </h2>
            <p className="text-xl text-gray-500 text-center mb-8 font-serif">
            For any questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
            </p>
            <form
               onSubmit={handleSubmit}
               className="space-y-6"
            >
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                     <label
                        htmlFor="name"
                        className="text-xl font-medium text-gray-700 mb-2"
                     >
                        Full Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="your name"
                     />
                  </div>
                  <div className="flex flex-col">
                     <label
                        htmlFor="email"
                        className="text-xl font-medium text-gray-700 mb-2"
                     >
                        Email Address
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="your email address"
                     />
                  </div>
               </div>
               <div className="flex flex-col">
                  <label
                     htmlFor="tel"
                     className="text-xl font-medium text-gray-700 mb-2"
                  >
                     Phone Number
                  </label>
                  <input
                     type="tel"
                     id="tel"
                     name="tel"
                     className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     placeholder="Your Phone-number "
                  />
               </div>
               <div className="flex flex-col">
                  <label
                     htmlFor="message"
                     className="text-xl font-medium text-gray-700 mb-2"
                  >
                     Message
                  </label>
                  <textarea
                     id="message"
                     name="message"
                     className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     placeholder="Type your message here..."
                     rows="4"
                  />
               </div>
               <div className="flex items-start">
                  <input
                     type="checkbox"
                     id="terms"
                     name="terms"
                     className="mt-1"
                  />
                  <label
                     htmlFor="terms"
                     className="text-xl text-gray-500 ml-2"
                  >
                     Creating an account means you agree with our{" "}
                     <a
                        href="#"
                        className="text-indigo-500 hover:underline"
                     >
                        Terms and Conditions
                     </a>{" "}
                     and{" "}
                     <a
                        href="#"
                        className="text-indigo-500 hover:underline"
                     >
                        Privacy Policy
                     </a>
                     .
                  </label>
               </div>
               <div className="text-center">
                  <button
                     className="bg-orange-500 text-white font-medium px-6 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 duration-300"
                     type="submit"
                     disabled={state.submitting}
                  >
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Contact;
