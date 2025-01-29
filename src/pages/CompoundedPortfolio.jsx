import Button from "../utils/Button";
import { useState } from "react";

const CompoundedPortfolio = () => {
   const [sipAmount, setSipAmount] = useState(10000);
   const [currentPortfolio, setCurrentPortfolio] = useState(100000);
   const [growthRate, setGrowthRate] = useState(14);
   const [period, setPeriod] = useState(40);
   const [portfolioValues, setPortfolioValues] = useState([]);

   const handleSipAmountChange = (e) => {
      const cleanedValue = e.target.value.replace(/,/g, "");
      if (cleanedValue === "" || isNaN(cleanedValue)) {
         setSipAmount(0); // Set to 0 if input is empty or not a number
      } else {
         setSipAmount(parseFloat(cleanedValue));
      }
   };

   const handleCurrentPortfolioChange = (e) => {
      const cleanedValue = e.target.value.replace(/,/g, "");
      if (cleanedValue === "" || isNaN(cleanedValue)) {
         setCurrentPortfolio(0); // Set to 0 if input is empty or not a number
      } else {
         setCurrentPortfolio(parseFloat(cleanedValue));
      }
   };

   const handleGrowthRateChange = (e) => {
      if (e.target.value === "") {
         setGrowthRate(0); // Set to 0 if input is empty
      } else {
         setGrowthRate(Math.round(parseFloat(e.target.value) * 10) / 10);
      }
   };

   const handlePeriodChange = (e) => {
      if (e.target.value === "") {
         setPeriod(0); // Set to 0 if input is empty
      } else {
         setPeriod(parseInt(e.target.value));
      }
   };

   const multiplier = (growthRate) => {
      return 1 + growthRate / 100;
   };

   const calculatePortfolioValues = () => {
      const calculatedValues = [];
      let previousPortfolioValue = currentPortfolio;

      for (let i = 1; i <= period; i++) {
         const futureValue = previousPortfolioValue * (1 + growthRate / 100);
         const sipAmountValue = parseFloat(
            sipAmount.toString().replace(/,/g, "")
         );

         let initialInvestment;
         if (i === 1) {
            initialInvestment = currentPortfolio;
         } else {
            initialInvestment = calculatedValues[i - 2]?.portfolioAmount;
         }

         const futureValueWithoutComma = parseFloat(
            futureValue.toString().replace(/,/g, "")
         );
         const portfolioAmount = sipAmountValue * 12 + futureValueWithoutComma;

         calculatedValues.push({
            period: i,
            initialValue: initialInvestment.toLocaleString("en-IN", {
               maximumFractionDigits: 0,
            }),
            futureValue: futureValue.toLocaleString("en-IN", {
               maximumFractionDigits: 0,
            }),
            sipAmount: sipAmountValue.toLocaleString("en-IN", {
               maximumFractionDigits: 0,
            }),
            growthRate: growthRate.toFixed(1),
            portfolioValue: previousPortfolioValue.toLocaleString("en-IN", {
               maximumFractionDigits: 0,
            }),
            multiplier: multiplier(growthRate).toLocaleString("en-IN", {
               maximumFractionDigits: 0,
            }),
            portfolioAmount: portfolioAmount.toLocaleString("en-IN", {
               maximumFractionDigits: 0,
            }),
         });

         previousPortfolioValue = portfolioAmount;
      }

      setPortfolioValues(calculatedValues);
   };

   return (
      <div className="w-full py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 ">
   <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row lg:gap-16 gap-10">
         {/* Input Section */}
         <div className="flex flex-col items-center gap-8 w-full lg:w-1/3">
            <div className="flex flex-col items-center justify-center bg-background shadow-lg shadow-secondary p-8 rounded-2xl w-full max-w-md">
               <div className="flex flex-col items-center gap-4 w-full">
                  <div className="flex flex-col items-center gap-3 w-full">
                     <p className="text-base md:text-xl font-medium">SIP Amount:</p>
                     <input
                        type="number"
                        className="input-field w-full px-4 py-3 text-lg border border-secondary rounded-lg"
                        value={sipAmount === 0 ? "" : sipAmount}
                        onChange={handleSipAmountChange}
                     />
                  </div>

                  <div className="flex flex-col items-center gap-3 w-full">
                     <p className="text-base md:text-xl font-medium">Current Portfolio Value:</p>
                     <input
                        type="number"
                        className="input-field w-full px-4 py-3 text-lg border border-secondary rounded-lg"
                        value={currentPortfolio === 0 ? "" : currentPortfolio}
                        onChange={handleCurrentPortfolioChange}
                     />
                  </div>

                  <div className="flex flex-col items-center gap-3 w-full">
                     <p className="text-base md:text-xl font-medium">Growth Rate (%):</p>
                     <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="100"
                        className="input-field w-full px-4 py-3 text-lg border border-secondary rounded-lg"
                        value={growthRate === 0 ? "" : growthRate}
                        onChange={handleGrowthRateChange}
                     />
                  </div>

                  <div className="flex flex-col items-center gap-3 w-full">
                     <p className="text-base md:text-xl font-medium">Period (Years):</p>
                     <input
                        type="number"
                        min="1"
                        className="input-field w-full px-4 py-3 text-lg border border-secondary rounded-lg"
                        value={period === 0 ? "" : period}
                        onChange={handlePeriodChange}
                     />
                  </div>

                  <Button className="w-auto py-3 text-base md:text-lg" onClick={calculatePortfolioValues}>
                     Calculate
                  </Button>
               </div>
            </div>
         </div>

         {/* Table Section */}
         <div className="w-full lg:w-2/3 overflow-x-auto bg-white shadow-lg rounded-2xl border border-secondary">
            <table className="min-w-full border-collapse">
               <thead className="bg-background text-primary text-lg">
                  <tr className="border-b border-secondary">
                     <th className="px-5 py-2 text-center text-base md:text-xl font-bold  uppercase tracking-wider text-orange-500 ">Years</th>
                     <th className="px-5 py-2 text-center text-base md:text-xl font-bold  uppercase tracking-wider text-orange-500  ">Initial Investment</th>
                     <th className="px-5 py-2 text-center text-base md:text-xl font-bold  uppercase tracking-wider text-orange-500  ">Growth Rate</th>
                     <th className="px-5 py-2 text-center text-base md:text-xl font-bold  uppercase tracking-wider text-orange-500  ">Value</th>
                     <th className="px-5 py-2 text-center text-base md:text-xl font-bold  uppercase tracking-wider text-orange-500 ">Annual SIP</th>
                     <th className="px-5 py-2 text-center text-base md:text-xl font-bold  uppercase tracking-wider text-orange-500 ">Portfolio Amount</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-primary text-lg">
                  {portfolioValues.map((data, index) => (
                     <tr key={index}>
                        <td className={`px-6 py-3 text-center text-primary ${data.period % 5 === 0 ? "font-bold text-secondary" : ""}`}>
                           {data.period}
                        </td>
                        <td className={`px-6 py-3 text-center text-primary ${data.period % 5 === 0 ? "font-bold text-secondary" : ""}`}>
                           {data.initialValue}
                        </td>
                        <td className={`px-6 py-3 text-center text-primary ${data.period % 5 === 0 ? "font-bold text-secondary" : ""}`}>
                           {data.growthRate}%
                        </td>
                        <td className={`px-6 py-3 text-center text-primary ${data.period % 5 === 0 ? "font-bold text-secondary" : ""}`}>
                           {data.futureValue}
                        </td>
                        <td className={`px-6 py-3 text-center text-primary ${data.period % 5 === 0 ? "font-bold text-secondary" : ""}`}>
                           {data.sipAmount}
                        </td>
                        <td className={`px-6 py-3 text-center text-primary ${data.period % 5 === 0 ? "font-bold text-secondary" : ""}`}>
                           {data.portfolioAmount}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   </div>
</div>

   );
};

export default CompoundedPortfolio;