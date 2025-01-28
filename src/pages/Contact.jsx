import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoMailSharp } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
   const [name, setName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [number, setNumber] = useState("");
   const [termsOn, setTermsOn] = useState(false);
   const [submitted, setSubmitted] = useState(false);

   const socials = [
    {
       path: "https://www.instagram.com/goolluck_investments",
       icon: <FaInstagram />,
       key: 1
    },
    {
       path: "https://www.facebook.com/goolluckinvestment/",
       icon: <FaFacebookF />,
       key: 2
    },
    {
       path: "https://www.linkedin.com/in/goolluck-investments-8a5a862a0",
       icon: <FaLinkedinIn />,
       key: 3
    },
    {
       path: "https://x.com/Goolluck_Invest",
       icon: <FaXTwitter />,
       key: 4
    },
 ];

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
         console.log(name, email, message, number, termsOn);
         console.log(import.meta.env.VITE_APP_API_ENDPOINT);

         const response = await axios.post(`${import.meta.env.VITE_APP_API_ENDPOINT}/api/v1/users/contact-us`, {
            name,
            lastName,
            email,
            message,
            number,
            termsOn: termsOn ? "true" : "false"
         });

         if (response.status === 200) {
            setSubmitted(true);
         }
      } catch (error) {
         console.error('Error submitting form:', error.response?.data || error.message);
      }
   };

   if (submitted) {
      return (
         <div className="flex items-center justify-center h-screen">
            <p className="text-lg font-semibold text-green-600">
               Thanks for submitting your message! We'll get back to you shortly.
            </p>
         </div>
      );
   }

  return (
    // <main className="flex-grow">
    <section className="w-full p-5">
      {/* <div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-background" style="width: 0%; transform: translateX(0%) translateZ(0px);"></div> */}
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-10"></div>
          <h2 className="text-5xl font-bold font-playfair">Contact <span>Us</span></h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-10">
          <div className="flex flex-col items-center lg:items-start gap-3 mb-20 text-lg">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="flex items-center gap-2 ">
                <FaLocationDot size={30} className="text-secondary" />
                <p className="w-full max-w-[30rem] text-base sm:text-xl lg:text-2xl font-medium text-center    md:text-start">
                 Unit-15, Ground Floor, Star Tower, Sector 30, Gurugram, Haryana, 122001
                  </p>

              </div>

              <div className="flex items-center gap-2">
                <FaPhone size={30} className="text-secondary" />
                <p className="text-center text-lg lg:text-2xl font-medium lg:text-start">
                  9999974265
                </p>
              </div>

              <div className="flex items-center gap-3">
                <TbDeviceLandlinePhone size={30} className="text-secondary" />
                <div className="flex flex-col items-start text-lg lg:text-2xl font-medium">
                  <p>0124-4200901 /</p>
                  <p>0124-4200903</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <IoMailSharp size={30} className="text-secondary" />
                <p className="lg:w-[30rem] text-lg lg:text-2xl font-medium text-center lg:text-start">
                  goollucktraining@gmail.com
                </p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.626498699067!2d77.0528296!3d28.460673500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c6fa02b4b1%3A0xa7b111d6d6499b27!2sGoolluck%20Investments%20-%20Stock%20Market%20Training%20Institute!5e0!3m2!1sen!2sin!4v1701067179802!5m2!1sen!2sin"
                width="500"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                       
              />
               <div className="flex items-center gap-5 mt-3">
                        {socials.map((link) => (
                           <div
                              key={link.key}
                              className="bg-secondary text-black rounded-full p-3"
                           >
                              <a href={link.path} target="_blank">
                                 <div>{link.icon}</div>
                              </a>
                           </div>
                        ))}
                     </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-5 gap-5 text-xl  lg:mt-0">
            <p className="  text-xl lg:text-4xl font-bold font-playfair ">
              Our teams are here to help
            </p>
            <p className="lg:w-[30rem] text-center ">
              For any questions, comments, or suggestions? Simply fill in the
              form and we’ll be in touch shortly.
            </p>

            <form
  className="bg-background shadow-lg border border-primary p-5 rounded-xl flex flex-col items-center mt-5 gap-5 w-350"
  onSubmit={(e) => handleFormSubmit(e)}
>
  <div className="flex flex-col lg:flex-row items-center gap-5">
    <div className="flex flex-col">
      <label htmlFor="first-name" className="text-sm text-gray-600">
        
      </label>
      <input
        id="first-name"
        type="text"
        placeholder="First Name"
        required
        className="p-3 rounded-lg bg-transparent border"
        name="first-name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="last-name" className="text-sm text-gray-600">
       
      </label>
      <input
        id="last-name"
        type="text"
        placeholder="Last Name"
        required
        className="p-3 rounded-lg bg-transparent border"
        name="last-name"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
    </div>
  </div>

  <div className="flex flex-col items-center gap-5">
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm text-gray-600">
      
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        required
        name="email"
        className="p-3 rounded-lg bg-transparent border lg:min-w-[30rem]"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="mobile-number" className="text-sm text-gray-600">
       
      </label>
      <input
        id="mobile-number"
        type="text"
        placeholder="Enter your mobile number"
        required
        name="mobile-number"
        className="p-3 rounded-lg bg-transparent border lg:min-w-[30rem]"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="message" className="text-sm text-gray-600">
       
      </label>
      <textarea
        id="message"
        placeholder="Your message"
        name="message"
        className="p-3 rounded-lg bg-transparent border lg:min-w-[30rem]"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
    </div>
    
    <div className="flex items-start mt-3">
      <input
        type="checkbox"
        id="terms"
        checked={termsOn}
        onChange={(e) => setTermsOn(e.target.checked)}
        className="mt-1"
      />
      <label htmlFor="terms" className="text-lg text-gray-600 ml-2">
        Creating an account means you agree with our{" "}
        <a href="#" className="text-indigo-500 hover:underline">
          Terms and Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="text-indigo-500 hover:underline">
          Privacy Policy
        </a>.
      </label>
    </div>

    <button
      className="py-2 px-5 bg-secondary text-black font-lexend font-medium text-lg rounded-full hover:bg-transparent border border-secondary duration-300 hover:text-primary lg:min-w-[30rem]"
      disabled={submitted}
    >
      Send
    </button>
  </div>
</form>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
