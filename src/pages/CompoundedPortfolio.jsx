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
      <div className="w-full py-10 px-5   ">
         <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-10 ">
               <div className="flex flex-col items-center gap-5">
                  <div className="flex flex-col items-center justify-center bg-background shadow-md shadow-secondary p-5 rounded-lg max-h-[500px] md:sticky md:top-20">
                     <div className="flex flex-col items-center gap-2">
                        <div className="flex flex-col items-center justify-center gap-2">
                           <p>SIP Amount:</p>
                           <input
                              type="number"
                              className="input-field"
                              value={sipAmount === 0 ? "" : sipAmount}
                              onChange={handleSipAmountChange}
                           />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-2">
                           <p>Current Portfolio Value:</p>
                           <input
                              type="number"
                              className="input-field"
                              value={
                                 currentPortfolio === 0 ? "" : currentPortfolio
                              }
                              onChange={handleCurrentPortfolioChange}
                           />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-2">
                           <p>Growth Rate (in Percentage):</p>
                           <input
                              type="number"
                              step="0.1"
                              min="0"
                              max="100"
                              className="input-field min-w-[220px]"
                              value={growthRate === 0 ? "" : growthRate}
                              onChange={handleGrowthRateChange}
                           />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-2">
                           <p>Period (in years):</p>
                           <input
                              type="number"
                              min="1"
                              className="input-field"
                              value={period === 0 ? "" : period}
                              onChange={handlePeriodChange}
                           />
                        </div>

                        <Button onClick={calculatePortfolioValues}>
                           Calculate
                        </Button>
                     </div>

                     <div></div>
                  </div>
               </div>

               <div className="overflow-x-auto mt-4 rounded-xl border border-secondary">
                  <table className="min-w-full divide-background rounded-xl">
                     <thead className="bg-background text-primary">
                        <tr className="text-secondary border-b border-secondary">
                           <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                              Years
                           </th>
                           <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                              Initial Investment
                           </th>
                           <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                              Growth Rate
                           </th>
                           <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider mr-5">
                              Value
                           </th>
                           <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                              Annual SIP Investment
                           </th>
                           <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                              Portfolio Amount
                           </th>
                        </tr>
                     </thead>
                     <tbody className="bg-background divide-y divide-primary">
                        {portfolioValues.map((data, index) => (
                           <tr key={index}>
                              <td
                                 className={`px-6 py-0 whitespace-nowrap text-primary ${
                                    data.period % 5 === 0
                                       ? "font-bold text-secondary"
                                       : ""
                                 }`}
                              >
                                 {data.period}
                              </td>
                              <td
                                 className={`px-6 py-0 whitespace-nowrap text-primary ${
                                    data.period % 5 === 0
                                       ? "font-bold text-secondary"
                                       : ""
                                 }`}
                              >
                                 {data.initialValue}
                              </td>
                              <td
                                 className={`px-6 py-0 whitespace-nowrap text-primary ${
                                    data.period % 5 === 0
                                       ? "font-bold text-secondary"
                                       : ""
                                 }`}
                              >
                                 {data.growthRate}%
                              </td>
                              <td
                                 className={`px-6 py-0 whitespace-nowrap text-primary ${
                                    data.period % 5 === 0
                                       ? "font-bold text-secondary"
                                       : ""
                                 }`}
                              >
                                 {data.futureValue}
                              </td>
                              <td
                                 className={`px-6 py-0 whitespace-nowrap text-primary ${
                                    data.period % 5 === 0
                                       ? "font-bold text-secondary"
                                       : ""
                                 }`}
                              >
                                 {data.sipAmount}
                              </td>
                              <td
                                 className={`px-6 py-0 whitespace-nowrap text-primary ${
                                    data.period % 5 === 0
                                       ? "font-bold text-secondary"
                                       : ""
                                 }`}
                              >
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
