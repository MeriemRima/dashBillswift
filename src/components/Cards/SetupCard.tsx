// src/components/cards/SetupCard.jsx
import React,{useState} from "react";
import { FaEllipsisV, FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SetupCard = () => {
    const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
    {/* Checklist Card Header */}
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800">Setup Checklist</h3>
      <FaEllipsisV className="text-gray-500 cursor-pointer" />
    </div>

    {/* Checklist Items */}
    <div className="space-y-4">
      {/* Basic Business Info */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-orange-500" />
          <span className="text-gray-800 font-medium">Basic business info</span>
        </div>
        <span className="text-gray-500 text-sm">100%</span>
      </div>

      {/* Organise Expenses */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-orange-500" />
          <span className="text-gray-800 font-medium">Organise expenses</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h1 className="font-bold text-gray-800 text-lg mb-4">
            Start tracking your expenses to stay organised
          </h1>

          {/* Content Section */}
          <div className="flex justify-between items-start">
            {/* Left Section: Checklist Steps */}
            <div className="space-y-4 flex-1">
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 font-bold">1</div>
                <div>
                  <p className="text-gray-800 font-medium">Link your business accounts</p>
                  <p className="text-gray-500 text-sm">
                    Import your transactions without data entry.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-orange-500 font-bold">2</div>
                <div>
                  <p className="text-gray-800 font-medium">Confirm categorised</p>
                  <p className="text-gray-500 text-sm">
                    Show us how to automate more work for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section: Video and Actions */}
            <div className="flex flex-col items-center">
              {/* Video Placeholder */}
              <div className="w-48 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex justify-center items-center mb-2">
                <span className="text-white text-xs font-semibold">Video</span>
              </div>
              {/* Text Below the Video */}
              <span className="text-blue-600 text-sm cursor-pointer mb-2">
                See how it works 2:30
              </span>
              {/* Button Below the Text */}
              <button className="bg-orange-500 text-white py-1 px-8 rounded-lg text-sm">
                Go
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Additional Checklist Items */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
          <span className="text-gray-800 font-medium">Get ready to invoice</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-orange-500" />
          <span className="text-gray-800 font-medium">Get the free mobile app</span>
        </div>
        <span className="text-gray-500 text-sm">100%</span>
      </div>
    </div>
  </div>
  );
};

export default SetupCard;
