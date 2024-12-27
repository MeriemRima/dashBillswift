import React from "react";
import Image from "next/image";
import { FaChevronDown, FaEllipsisV } from "react-icons/fa";
import warning from "../../../public/Warning.png";

import { Doughnut } from "react-chartjs-2"; // Importing Doughnut chart from react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesCard = () => {
  const data = {
    labels: ["Blue", "Red", "Green"], // Labels for the segments
    datasets: [
      {
        data: [60, 25, 15], // Percentages or values for each segment
        backgroundColor: ["#E5E5E5", "#E5E5E5", "#E5E5E5"], // Colors for each segment
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false, // Disables the legend
      },
      tooltip: {
        enabled: false, // Optionally, disable tooltips as well
      },
    },
    responsive: true, // Ensures the chart is responsive to container size
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow ">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-gray-800 text-sm" style={{ fontFamily: "Roboto" }}>
          EXPENSES
        </h4>
        <p className="text-xs text-gray-500">Last 30 days</p>
        <button className="text-gray-500 text-xs">
          <FaChevronDown />
        </button>
      </div>

      {/* Spending Amount */}
      <p className="text-gray-500 text-xs" style={{ fontFamily: "Roboto" }}>
        Spending for last 30 days
      </p>

      <div className="flex items-center">
        <p className="font-bold mr-4 text-sm">د.م.0</p>
        <Image alt="warning" src={warning} className="h-4 w-auto mr-4" />
      </div>
      <p className="text-gray-500 text-xs" style={{ fontFamily: "Roboto" }}>
        --% from prior 30 days
      </p>

      {/* Pie Chart Placeholder */}
      <div className="flex items-center mt-4">
        {/* Circular Donut Chart on the Left */}
        <div className="w-16 h-16 mr-6">
          <Doughnut data={data} options={options} /> {/* Added options here */}
        </div>

        {/* Content on the Right */}
        <div className="flex flex-col">
          {/* Color Legend */}
          <div className="flex items-center flex-col mr-8">
            <div className="flex items-center ">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "#D2006B" }}
              ></div>
              <div className="flex flex-col">
                <p className="text-gray-700 text-xs">...</p>
              </div>
            </div>
            <div className="flex items-center ">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "#E42E45" }}
              ></div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-xs">...</p>
              </div>
            </div>
            <div className="flex items-center ">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "#E76936" }}
              ></div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-xs">...</p>
              </div>
            </div>
            <div className="flex items-center ">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "#E1E489" }}
              ></div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-xs">...</p>
              </div>
            </div>
            <div className="flex items-center ">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "#EC9850" }}
              ></div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-xs">...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Expense Button */}
      <div className="flex justify-between mt-4">
        <p className="text-xs text-blue-500" style={{ fontFamily: "Roboto" }}>
          Add an Expense
        </p>
        <FaEllipsisV className="text-gray-500 " />
      </div>
    </div>
  );
};

export default ExpensesCard;
