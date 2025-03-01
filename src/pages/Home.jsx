import React from "react";
import data from "../data/landing-page.json";
import HomeServices from "../components/HomeServices";
import Testimonials from "../components/Testimonials";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <>
         <div className="w-full px-5 md:px-10 py-5 md:py-10">
            <div className="flex flex-col items-center justify-center w-full">
               <div className="flex flex-col items-center gap-2">
                  <h2 className="animate__animated animate__fadeInUp md:text-center text-[40px] md:text-[95px] font-bold leading-[3rem] md:leading-[6.5rem]">
                     Goolluck <span>Investments</span>
                  </h2>
                  <p className="max-w-[900px] text-start md:text-center animate__animated animate__fadeInUp text-xl font-serif mb-4">
                     Goolluck Investments is a portfolio advisory firm and stock
                     market training institute. Here, you will learn about real
                     time trading and strategies used by the traders of our
                     institution. Learn directly from trader. Come & learn
                     directly from traders.
                  </p>
                  <Link to="/stock-market-training">
                  
                     <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border border-transparent hover:bg-gray-50 hover:text-orange-500 hover:border-orange-500" children="Get Started !!" />
                  </Link>
               </div>
            </div>
         </div>

         <HomeServices homeServices={data.homeService} />
         <Testimonials testimonials={data.testimonials} />
      </>
   );
};

export default Home;
