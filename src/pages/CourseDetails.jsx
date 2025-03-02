import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaChartLine } from "react-icons/fa";

const CourseDetails = () => {
  const { courseId } = useParams();
  const location = useLocation();
  const { price } = location.state;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with details:", formData);
  };

  return (
    <div className="min-h-screen  p-6 font-sans">
      <div className="max-w-8xl mx-auto bg-gray-900 shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-700 py-6 px-4 text-center font-montserrat">
               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white leading-tight">
                 {courseId} Trading Masterclass
               </h1>
               <p className="mt-2 text-lg sm:text-xl font-medium text-gray-200 px-2">
                 Unlock the secrets of successful trading and elevate your portfolio!
               </p>
             </div>

        {/* Form Section */}
        <div className="p-6 text-gray-300">
          <p className="mb-6 text-center md:text-xl font-georgia">
            Register now to secure your spot in the{" "}
            <b className="text-orange-500">{courseId}</b> masterclass.
          </p>
          <form className="space-y-6 font-georgia" onSubmit={handleSubmit} >
            {/* Name Field */}
            <div className="flex items-center space-x-2">
              <label htmlFor="name" className="block text-lg font-medium md:w-1/3  md:pl-6 ">
                <FaUser className="inline-block mr-6 " />
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-1/2 p-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            {/* Email Field */}
            <div className="flex items-center space-x-2">
              <label htmlFor="email" className="block text-lg font-medium  md:w-1/3  md:pl-6">
                <FaEnvelope className="inline-block mr-6" />
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-1/2 p-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Phone Field */}
            <div className="flex items-center space-x-2">
              <label htmlFor="phone" className="flex items-center  text-lg font-medium  md:w-1/3  md:pl-6">
                <FaPhone className="inline-block mr-6" />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-1/2 p-2 border border-gray-700 rounded-lg shadow-sm bg-gray-800 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Payment Section */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
              <h2 className="text-xl font-semibold mb-2">Payment Details</h2>
              <p className="text-gray-300 text-xl">
                Amount to be paid:{" "}
                <span className="text-orange-500 font-bold text-xl">₹{price}</span>
              </p>
            </div>
          {/* Submit Button */}
          <button
           type="submit"
           className=" block w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto py-3 px-6 rounded-lg shadow-lg bg-orange-500  text-white font-bold text-base sm:text-lg md:text-xl transition-all  hover:bg-transparent duration-300 hover:text-white"
           >
          Register and Pay
         </button>
          </form>
        </div>

        {/* What You'll Learn Section */}
        <div className="bg-gray-800 px-6 py-8 font-georgia">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-4">
            What You'll Learn
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-xl">
            <li>Master the fundamentals of {courseId} trading</li>
            <li>Advanced strategies for market analysis</li>
            <li>Risk management and portfolio optimization</li>
            <li>Real-world case studies and live trading sessions</li>
            <li>Exclusive access to trading tools and resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;