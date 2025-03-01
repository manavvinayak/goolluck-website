import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import data from "./data/landing-page.json";
import Contact from "./pages/Contact";
import StockMarketTraining from "./pages/StockMarketTraining";
import CompoundedPortfolio from "./pages/CompoundedPortfolio";
import LifeAtGoolluck from "./pages/LifeAtGoolluck";
import SingleCoursePage from "./pages/SingleCoursePage";
import CourseDetails from "./pages/CourseDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Terms&Conditions";


const App = () => {
   const { id } = useParams();

   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About about={data.about} />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/privacy" element= {<PrivacyPolicy/>}/>
               <Route path="/termsandconditions" element= {<TermsAndConditions/>}/>

               <Route
                  path="/stock-market-training"
                  element={
                     <StockMarketTraining training={data.previousTraining} />
                  }
               />

               <Route path="/courses/:courseName" element={<CourseDetails />} />
               <Route
                  path="/compounded-portfolio"
                  element={<CompoundedPortfolio />}
               />
               <Route
                  path="/life-at-goolluck"
                  element={<LifeAtGoolluck gallery={data.gallery} />}
               />
               <Route
                  path="/stock-market-training/course/:id"
                  element={<SingleCoursePage />}
               />
            </Routes>
         </Layout>
      </BrowserRouter>
   );
};

export default App;
