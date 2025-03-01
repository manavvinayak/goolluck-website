import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CourseCards from "../components/CourseCards";

const StockMarketTraining = ({ training }) => {
   const { title, iit, mdi, hansraj } = training;

   const [availableCourse, setAvailableCourses] = useState([]);
   const courses = [
      {
         id: "excel",
         title: "Excel",
         description: "Learn Excel from scratch to advanced.",
         detail: "Work Smarter, Not Harder – Excel Made Easy!",
         price: "100",
         courseName: "Excel",
         Author: "Sameul Harry",
         Scheduled: "Live classes",
         imgpath: "Gula.png",
      },
      {
         id: "MS-Office",
         title: "MS Office",
         description:
            "Master MS Office tools like Word, PowerPoint, and Excel.",
         price: "120",
         detail:"Simplify Work & Enhance Productivity with MS Office!",
         courseName: "MS-Office",
         Author: "A.W Bravo",
         Scheduled: "Live classes",
         imgpath: "Join.png",
      },
   ];

   useEffect(() => {
      axios
         .get(
            `${import.meta.env.VITE_APP_API_ENDPOINT}/api/v1/admin/get-all-courses`
         )
         .then((response) => {
            setAvailableCourses(response.data.data);
            console.log(response.data.data);
         });
   }, []);
   return (
      <div>
         <div className="w-full px-5 lg:px-10">
            <div className="flex items-center justify-center w-full">
               <h2 className="font-semibold text-primary text-center mt-20 text-3xl md:text-4xl lg:text-5xl">
                  Available <span>Courses</span>
               </h2>
            </div>
            <div className="flex flex-wrap justify-center mt-14 gap-10 md:gap-28 px-5   ">
               {courses.map((course) => (
                  <CourseCards
                     courseName={course.courseName}
                     key={course.id}
                     price={course.price}
                     Author={course.Author}
                     Scheduled={course.Scheduled}
                     imgpath={course.imgpath}
                     description={course.detail}
                  />
               ))}
            </div>

            {/* <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full py-5">
               {availableCourse.map((course, idx) => {
                  return (
                     <Link to={`/stock-market-training/course/${course._id}`}>
                        <div className="flex flex-col items-start" key={idx}>
                           <img
                              src={course.imageUrl}
                              width={300}
                              className="rounded-xl"
                           />
                           <p>{course.name}</p>
                        </div>
                     </Link>
                  );
               })}
            </div> */}
         </div>
         <div className="w-full px-5 lg:px-10 mt-16">
            <div className="flex items-center justify-center w-full">
               <h2 className="text-4xl font-bold">{title}</h2>
            </div>

            <div className="flex flex-col items-center py-5">
               <h3 className="text-4xl font-bold">
                  Workshop @ <span>IIT - Guwahati</span>
               </h3>
               <div className="flex flex-wrap items-center justify-center gap-6 py-5 w-full">
                  {iit.map((image, idx) => {
                     return (
                        <img
                           src={image.photo}
                           width={300}
                           className="rounded-xl"
                           key={idx}
                        />
                     );
                  })}
               </div>
            </div>

            <div className="flex flex-col items-center py-5">
               <h3 className="text-4xl font-bold">
                  Corporate Training, <span>New Delhi</span>
               </h3>
               <div className="flex flex-wrap items-center justify-center gap-6 py-5 w-full">
                  {mdi.map((image, idx) => {
                     return (
                        <img
                           src={image.photo}
                           width={300}
                           className="rounded-xl"
                           key={idx}
                        />
                     );
                  })}
               </div>
            </div>

            <div className="flex flex-col items-center py-5">
               <h3 className="text-4xl font-bold">
                  Workshop @ <span>Hansraj College, New Delhi</span>
               </h3>
               <div className="flex flex-wrap items-center justify-center gap-6 py-5 w-full">
                  {hansraj.map((image, idx) => {
                     return (
                        <img
                           src={image.photo}
                           width={300}
                           className="rounded-xl"
                           key={idx}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default StockMarketTraining;
