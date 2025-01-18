import React from "react";
import "animate.css";

const HomeServices = ({ homeServices }) => {
   const { heading, services } = homeServices;
   return (
      <div className="w-full px-5 md:px-10 animate__animated animate__fadeInUp">
         <div className="flex justify-center ">
            <h2 className="text-[25px] md:text-[40px] lg:text-[56px] max-w-[857px] md:leading-[67.2px] font-bold text-primary ">
               Our <span>Services</span>
            </h2>
         </div>

         {/* Center the cards using justify-center and items-center */}
         <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-full gap-4 sm:gap-5 mt-6 sm:mt-8">
            {services.map((service, index) => {
               return (
                  <div
                     className="parent mx-auto h-full w-full flex items-center justify-center p-2 sm:p-4"
                     key={index}
                  >
                     <div className="card h-full w-full flex flex-col justify-start items-center p-4 sm:p-6 overflow-hidden">
                        <div className="logo mb-2 sm:mb-4">
                           <span className="circle circle4"></span>
                           <span className="circle circle5 text-background text-base sm:text-xl font-bold">
                              {service.count}
                           </span>
                        </div>
                        <div className="glass"></div>
                        <div className="content flex flex-col justify-start text-center w-full">
                           <span className="text-gray-800 text-lg sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 line-clamp-2">
                              {service.label}
                           </span>
                           <span className="text-xs sm:text-sm lg:text-lg text-justify text-primary px-2 line-clamp-6">
                              {service.desc}
                           </span>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default HomeServices;
