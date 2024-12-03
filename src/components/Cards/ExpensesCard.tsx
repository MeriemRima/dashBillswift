// src/components/cards/SetupCard.jsx
import React from "react";
import Image from "next/image";
import { FaChevronDown,FaEllipsisV } from "react-icons/fa";
import warning from '../../../public/Warning.png';
const ExpensesCard = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow flex flex-col">
    {/* Title Section */}
    <div className="flex justify-between items-center mb-4">
<h4 className="text-gray-800 text-sm">EXPENSES</h4>
<p className="ml-1 text-sm text-gray-500">Last 30days</p>
<button className="text-gray-500 text-sm">
  <FaChevronDown />
</button>
</div>

    {/* Spending Amount */}
    <p className="text-gray-500 text-sm">Spending for last 30 days</p>

    <div className="flex items-center">
<p className="font-bold mr-4">د.م.0</p>
<Image alt="warning" src={warning} className="h-4 w-auto mr-4" />
</div>
    <p className="text-gray-500 text-sm">--% from prior 30 days</p>

    {/* Pie Chart Placeholder */}
    <div className="mt-4 mb-4 flex">
      <div className="w-20 h-20 rounded-full border-8 border-gray-300 flex items-center justify-center">
       
      </div>
    </div>

    {/* Add Expense Button */}
    <div className="flex justify-between  mt-4">
<p className="text-sm text-blue-500">Add an Expense</p>
<FaEllipsisV className="text-gray-500 " />
</div>
    {/* <p className="text-blue-500 text-sm cursor-pointer">Add an Expense</p> */}
  </div>
  );
};

export default ExpensesCard;
