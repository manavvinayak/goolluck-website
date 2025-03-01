import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "./ui/card";
import { FaUserCircle } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const CourseCards = ({
   courseName,
   price,
   Author,
   Scheduled,
   imgpath,
   description,
}) => {
   const navigate = useNavigate();
   return (
      <Tabs defaultValue="course" className="w-full md:w-[530px] p-4">
         <TabsList className="grid w-full grid-cols-2 bg-black rounded-xl shadow-md font-montserrat overflow-hidden">
            <TabsTrigger
               value="course"
               className="flex items-center justify-center py-3 px-6 font-semibold md:text-lg transition-all duration-300
               text-white data-[state=active]:bg-orange-500 data-[state=active]:text-white
               hover:bg-orange-500 hover:text-white"
            >
               Course
            </TabsTrigger>
            <TabsTrigger
               value="course-details"
               className="flex items-center justify-center py-3 px-6 font-semibold md:text-lg transition-all duration-300
               text-white data-[state=active]:bg-orange-500 data-[state=active]:text-white
               hover:bg-orange-500 hover:text-white"
            >
               Course Details
            </TabsTrigger>
         </TabsList>

         {/* Remove absolute positioning and adjust height */}
         <div className="mt-4 md:h-[650px] font-montserrat">
            <TabsContent value="course">
               <Card className="border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  <CardHeader className="p-0 relative">
                     <img
                        src={imgpath}
                        alt={`${courseName} image`}
                        className="w-full h-60 object-cover"
                     />
                  </CardHeader>
                  <CardContent className="p-4 flex-grow space-y-4">
                     <CardTitle className="text-2xl font-bold text-center text-gray-900">
                        {courseName}
                     </CardTitle>
                     <CardDescription className="text-gray-700 text-center text-lg">
                        {description}
                     </CardDescription>
                     <div className="space-y-4">
                        <div className="flex items-center space-x-2 justify-center text-lg">
                           <FaUserCircle className="text-gray-500" size={24} />
                           <h2 className="text-gray-700">{Author}</h2>
                        </div>
                        <div className="flex items-center space-x-2 justify-center text-lg">
                           <BsCalendar className="text-gray-500" size={24} />
                           <h1> date</h1>
                        </div>
                        <div className="flex justify-center">
                           <h2 className="bg-blue-300 text-gray-800 font-semibold py-1 px-3 rounded-full w-max">
                              {Scheduled}
                           </h2>
                        </div>
                     </div>
                  </CardContent>
                  <CardFooter className="p-4 flex justify-between items-center">
                     <Button
                        onClick={() =>
                           navigate(`/courses/${courseName}`, {
                              state: { price },
                           })
                        }
                        className="py-2 px-4 text-lg bg-green-500 text-white font-semibold rounded-lg border border-transparent hover:bg-gray-50 hover:text-green-500 hover:border-green-500 transition-colors"
                     >
                        Enroll
                     </Button>
                     <h2 className="text-lg font-bold text-gray-900">
                        ₹{price}
                     </h2>
                  </CardFooter>
               </Card>
            </TabsContent>

            <TabsContent value="course-details">
               <Card className="border-2 border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                     <CardHeader>
                        <CardTitle className="text-lg md:text-2xl font-bold mb-4 text-center">
                           Course Details
                        </CardTitle>
                        <CardDescription className="text-gray-700 text-center text-base sm:text-lg md:text-xl">
                           This course offers in-depth knowledge and practical
                           skills to help you master {courseName}. It covers
                           essential topics and advanced techniques, ensuring
                           you gain a comprehensive understanding.
                        </CardDescription>
                     </CardHeader>
                  </div>
                  <CardFooter className="mt-4">
                     <Button
                        onClick={() =>
                           navigate(`/courses/${courseName}`, {
                              state: { price },
                           })
                        }
                        className="block mx-auto py-2 text-lg bg-green-500 text-white font-semibold rounded-lg border border-transparent hover:bg-gray-50 hover:text-green-500 hover:border-green-500 transition-colors"
                     >
                        Enroll
                     </Button>
                  </CardFooter>
               </Card>
            </TabsContent>
         </div>
      </Tabs>
   );
};

export default CourseCards;