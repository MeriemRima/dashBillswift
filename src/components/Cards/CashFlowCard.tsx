// src/components/cards/CashFlowCard.jsx
import React from "react";
import lightbulb from '../../../public/LightBulb.png';
import Arrow from '../../../public/Arrow.png';

import Image from "next/image";
const CashFlowCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <h4 className="text-gray-900 text-lg ">
          CASH FLOW TREND
        </h4>
        <div className="flex flex-col text-xs text-right">
          <div className="flex items-center text-gray-500 mb-1">
            <span className="w-2 h-2 bg-gray-500 rounded-full inline-block mr-1"></span>
            Money in
          </div>
          <div className="flex items-center text-gray-400">
            <span className="w-2 h-2 bg-gray-400 rounded-full inline-block mr-1"></span>
            Money out
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-l mt-4 mb-4 font-semibold">
        Track how your money is doing
      </p>
      <p className="text-gray-500 text-sm mb-6">
        Seeing how money flows over time can help you plan for the future. Link
        your bank account to get started.
      </p>

      {/* Graph Section */}
      <div className="w-full h-24 flex items-center justify-between">
        {["MAR", "APR", "MAY", "JUN"].map((month, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-4 h-10 bg-gray-300 rounded-sm mb-1"></div>
            <p className="text-xs text-gray-500">{month}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 p-2 bg-white rounded-lg shadow-md">
  <div className="flex items-center text-gray-500 text-xs">
    <Image src={lightbulb} alt="Light" className="mr-4 w-4 h-4" />
    Learn about the Cash Flow Planner
  </div>
  <div className="flex items-center text-blue-500 text-xs hover:underline font-medium">
    <a href="#" className="mr-1">Learn more</a>
    <Image src={Arrow} alt="Arrow" className="w-2 h-2" />
  </div>
</div>


    </div>
  );
};

export default CashFlowCard;
