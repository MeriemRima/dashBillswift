import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import lightbulb from "../../../public/LightBulb.png";
import Arrow from "../../../public/Arrow.png";
import Image from "next/image";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CashFlowCard = () => {
  // Chart Data
  const data = {
    labels: ["MAR", "APR", "MAY", "JUN"], // X-axis labels
    datasets: [
      {
        label: "Money In", // Label won't be visible (legend hidden)
        data: [0.3, 0.3, 0.3, 0.3], // Example data
        backgroundColor: "gray", // Bar color
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 4, // Makes bars rounded
      },
      {
        label: "Money Out", // Label won't be visible
        data: [0.2, 0.2, 0.2, 0.2], // Example data
        backgroundColor: "gray",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 4, // Makes bars rounded
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows you to control height/width in CSS
    plugins: {
      legend: {
        display: false, // Hides "Money In" and "Money Out" legend
      },
      title: {
        display: false, // No chart title
      },
    },
    scales: {
      x: {
        grid: {
          display: true, // Show gridlines for x-axis
          color: "rgba(0, 0, 0, 0.1)", // Light gridline color
        },
        ticks: {
          color: "#333", // X-axis label color
        },
      },
      y: {
        grid: {
          display: true, // Show gridlines for y-axis
          color: "rgba(0, 0, 0, 0.1)", // Light gridline color
        },
        ticks: {
          stepSize: 0.2, // Controls step size
          display: true,
          callback: function (value: unknown) {
            return value; // Display values as-is
          },
        },
      },
    },
    layout: {
      padding: {
        top: 10, // Adds spacing around the chart
        right: 20,
        left: 20,
        bottom: 10,
      },
    },
  };
  
  
  

  return (
    <div className="p-6 bg-white rounded-lg h-64 border border-gray-200 shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <h4 className="text-gray-900 text-sm " style={{ fontFamily: "Roboto" }}>
          CASH FLOW TREND
        </h4>
        <div className="flex flex-col text-xs text-right">
          <div className="flex items-center text-gray-500">
            Money in
            <span
              className="w-2 h-2 bg-gray-500 rounded-full inline-block ml-3 text-xs"
              style={{ fontFamily: "Roboto" }}
            ></span>
          </div>
          <div className="flex items-center text-gray-400">
            Money out
            <span
              className="w-2 h-2 bg-gray-400 rounded-full inline-block ml-1 text-xs"
              style={{ fontFamily: "Roboto" }}
            ></span>
          </div>
        </div>
      </div>

      <p
        className="text-gray-700 text-l    font-semibold"
        style={{ fontFamily: "Roboto" }}
      >
        Track how your money is doing
      </p>
      <p
        className="text-gray-500 text-xs mb-2"
        style={{ fontFamily: "Roboto" }}
      >
        Seeing how money flows over time can help you plan for the future.
        <br />
        Link your bank account to get started.
      </p>

      {/* Graph Section */}
      <div className="w-full h-24 ">
        <Bar data={data} options={options}/>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center  p-2 bg-white rounded-lg shadow-md">
        <div className="flex items-center text-gray-500 text-xs">
          <Image src={lightbulb} alt="Light" className="mr-4 w-4 h-4" />
          Learn about the Cash Flow Planner
        </div>
        <div className="flex items-center text-blue-500 text-xs hover:underline font-medium">
          <a href="#" className="mr-1">
            Learn more
          </a>
          <Image src={Arrow} alt="Arrow" className="w-2 h-2" />
        </div>
      </div>
    </div>
  );
};

export default CashFlowCard;
