// src/components/cards/SetupCard.jsx
import React from "react";
import Image from "next/image";
import { FaChevronDown,FaEllipsisV } from "react-icons/fa";
import warning from '../../../public/Warning.png';
import orgbar from '../../../public/orgBar.png';
import bluebar from '../../../public/blueBar.png';

const ProfitLossCard = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow flex flex-col">
  <div className="flex justify-between items-center mb-4">
    <h4 className="text-gray-800 text-sm" style={{fontFamily:'Roboto'}}>PROFIT & LOSS</h4>
    <p className="ml-1 text-xs text-gray-500">Last Month</p>
    <button className="text-gray-500 text-xs">
      <FaChevronDown />
    </button>
  </div>
  <p className="text-gray-600 text-sm" style={{fontFamily:'Roboto'}}>Net profit for may</p>
  <div className="flex items-center">
    <p className="font-bold mr-4 text-sm">د.م.0</p>
    <Image alt="warning" src={warning} className="h-4 w-auto mr-4" />
  </div>
  <p className="text-gray-600 text-sm" style={{fontFamily:'Roboto'}}>--% from prior month</p>
  <div className="flex items-center mt-4">
    <p className="text-gray-600 mr-4 text-sm" style={{fontFamily:'Roboto'}}>Income</p>
    <Image alt="orgbar" src={orgbar} className="h-4 w-auto mr-4" />
  </div>
  <p className="font-bold mr-4 text-sm">د.م.0</p>
  <div className="flex items-center">
    <p className="text-gray-600 mr-4 text-sm" style={{fontFamily:'Roboto'}}>Expenses</p>
    <Image alt="orgbar" src={bluebar} className="h-4 w-auto mr-4" />
  </div>

  {/* Spacer */}
  <div className="flex-grow"></div>

  {/* Bottom Section */}
  <div className="flex justify-between  mt-4">
    <p className="text-xs text-blue-500" style={{fontFamily:'Roboto'}}>Bring in transactions automatically</p>
    <FaEllipsisV className="text-gray-500 text-xs" />
  </div>
</div>
  );
};

export default ProfitLossCard;
