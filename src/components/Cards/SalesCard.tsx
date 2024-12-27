// src/components/cards/SalesCard.jsx
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image"; // If you're using Next.js
import refresh from '../../../public/refresh.png';

const SalesCard = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow">
  {/* Header Section */}
  <div className="flex justify-between items-center mb-2">
    <h4 className="text-gray-800 text-sm" style={{fontFamily:'Roboto'}}>SALES</h4>
    <Image alt="refresh" src={refresh} className="h-4 w-auto mr-4" />
    <p className="ml-1 text-xs text-gray-500">Last 30 days</p>
    <button className="text-gray-500 text-xs">
      <FaChevronDown />
    </button>
  </div>

  {/* Data Update Info */}
  <p className="text-gray-700 text-xs mb-4" style={{fontFamily:'Roboto'}}>Data updated a few seconds ago</p>

  {/* Total Sales Section */}
  <p className="text-gray-500 text-xs" style={{fontFamily:'Roboto'}}>Total Sales</p>
  <p className="font-bold mr-4">0.د.م.00</p>

  {/* Sales Lines Section */}
  <div className="mt-2">
    {Array(6)
      .fill(0)
      .map((_, index) => (
        <div key={index} className="flex justify-between items-center ">
          <span className="text-gray-500 text-sm">0.د.م.</span>
          <hr className="flex-grow border-gray-200 mx-2" />
        </div>
      ))}
  </div>
</div>
  );
};

export default SalesCard;
