import React from "react";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";  // Importing Doughnut chart from react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import refresh from '../../../public/refresh.png';

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const AccountCard = () => {
  // Data for the Doughnut chart
  const data = {
    labels: ['Blue', 'Red', 'Green'], // Labels for the segments
    datasets: [
      {
        data: [60, 25, 15], // Percentages or values for each segment
        backgroundColor: ['#4A90E2', '#E94F37', '#55C57A'], // Colors for each segment
        borderColor: '#fff',
        borderWidth: 2,
      }
    ]
  };

  // Chart options to disable the legend
  const options = {
    plugins: {
      legend: {
        display: false,  // Disables the legend
      },
      tooltip: {
        enabled: false, // Optionally, disable tooltips as well
      }
    },
    responsive: true, // Ensures the chart is responsive to container size
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow flex flex-col ">
      {/* Title Section */}
      <div className="flex justify-between items-center">
        <h4 className="text-gray-800 text-sm">ACCOUNT RE..</h4>
        <div className="flex items-center">
          <Image alt="refresh" src={refresh} className="h-4 w-auto mr-4" />
          <p className="ml-1 text-sm text-gray-500">As of today</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-4">Data updated a few seconds ago</p>
      <p className="text-gray-600 text-sm">Total A/R amount</p>
      <p className="font-bold text-lg">0.د.م.00</p>

      {/* Chart and Info Section */}
      <div className="flex items-center">
        {/* Circular Donut Chart on the Left */}
      

        {/* Content on the Right */}
        <div className="flex flex-col">
  {/* Color Legend */}
  <div className="flex items-center flex-col mb-4 mr-8">
    {/* Blue Circle */}
    <div className="flex items-center mb-4">
      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#4A90E2' }}></div>
      <div className="flex flex-col">
        <p className="text-gray-700 text-xs">0.د.م.00</p>
        <p className="text-gray-500 text-xs">current</p>
      </div>
    </div>
    {/* Red Circle */}
    <div className="flex items-center mb-4">
      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#E94F37' }}></div>
      <div className="flex flex-col">
        <p className="text-gray-700 text-xs">0.د.م.00</p>
        <p className="text-gray-500 text-xs">current</p>
      </div>
    </div>
    {/* Green Circle */}
    <div className="flex items-center mb-4">
      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#55C57A' }}></div>
      <div className="flex flex-col">
        <p className="text-gray-700 text-xs">0.د.م.00</p>
        <p className="text-gray-500 text-xs">current</p>
      </div>
    </div>
  </div>
</div>

        <div className="w-24 h-24 mr-6">
          <Doughnut data={data} options={options} /> {/* Added options here */}
        </div>
      </div>
      <div className="text-blue-500 text-sm hover:underline cursor-pointer">
        Go to report 
      </div>
    </div>
  );
};

export default AccountCard;
