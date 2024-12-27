// src/components/cards/SetupCard.jsx
import colors from "@/app/styles/Colors";
import React,{useState} from "react";
import { FaEllipsisV, FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SetupCard = () => {
    const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 h-full ">
    {/* Checklist Card Header */}
    <div className="flex justify-between items-center mb-8">
      <h3 className=" text-gray-800" style={{fontFamily:'Roboto'}}>SETUP CHECKLIST</h3>
      <FaEllipsisV className="text-gray-500 cursor-pointer" />
    </div>

    {/* Checklist Items */}
    <div className="">
      {/* Basic Business Info */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <FaCheckCircle style={{color:colors.primary}} />
          <span className="text-gray-800 text-sm" style={{fontFamily:'Roboto'}}>Basic business info</span>
        </div>
        <div className="flex items-center">
        <span className="text-gray-500 text-sm mr-4" style={{fontFamily:'Roboto'}}>100% </span>
        <FaChevronDown />
        </div>
      </div>

      {/* Organise Expenses */}
      <div className="mb-8  items-center p-4" style={{backgroundColor:isOpen? '#F7F7F7':colors.white }} >
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2" >
          <FaCheckCircle style={{color:colors.primary}} />
          <span className="text-gray-800 text-sm" style={{fontFamily:'Roboto'}}>Organise expenses</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        </div>
        {isOpen && (
        <div className="mt-4  rounded-lg ">
         

          {/* Content Section */}
          <div className="flex justify-between ">
          <h1 className="font-bold text-gray-800 text-l mb-4" style={{fontFamily:'Roboto'}}>
            Start tracking your expenses to stay organised
          </h1>
          

            {/* Right Section: Video and Actions */}
            <div className="flex flex-col items-end">
              {/* Video Placeholder */}
              <div className="w-32 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex justify-center items-center mb-2">
                <span className="text-white text-xs font-semibold">Video</span>
              </div>
              {/* Text Below the Video */}
              <span className="text-blue-600 text-xs cursor-pointer mb-2" style={{fontFamily:'Roboto'}}>
                See how it works 2:30
              </span>
              {/* Button Below the Text */}
              <button className=" text-white py-1 px-8 rounded-lg text-xs" style={{fontFamily:'Roboto' ,backgroundColor:colors.primary}}>
                Go
              </button>
            </div>
          </div>
            {/* Left Section: Checklist Steps */}
            <div className="space-y-4 flex-1">
              <div className="flex items-start space-x-4">
              <div
  className=" text-xs border "
  style={{
    borderColor:'#707070',
    color:'#707070',
    fontFamily: 'Roboto',
    width: '20px', // Adjust width and height for the circle size
    height: '20px',
    borderRadius: '50%', // Makes the div circular
    display: 'flex', // Flexbox to center the content
    alignItems: 'center', // Vertically center the content
    justifyContent: 'center', // Horizontally center the content
    
  }}
>
  1
</div>
                <div>
                  <p className="text-gray-700 text-sm" style={{fontFamily:'Roboto'}}>Link your business accounts</p>
                  <p className="text-gray-500 text-xs" style={{fontFamily:'Roboto'}}>
                    Import your transactions without data entry.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
              <div
  className="text-xs  border "
  style={{
    borderColor:'#707070',
    color:'#707070',
    fontFamily: 'Roboto',
    width: '20px', // Adjust width and height for the circle size
    height: '20px',
    borderRadius: '50%', // Makes the div circular
    display: 'flex', // Flexbox to center the content
    alignItems: 'center', // Vertically center the content
    justifyContent: 'center', // Horizontally center the content
    
  }}
>
  2
</div>                <div>
                  <p className="text-gray-700 text-sm" style={{fontFamily:'Roboto'}}>Confirm categorised</p>
                  <p className="text-gray-500 text-xs" style={{fontFamily:'Roboto'}}>
                    Show us how to automate more work for you.
                  </p>
                </div>
              </div>
            </div>
        </div>
      )}
      </div>
      

      {/* Additional Checklist Items */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
          <span className="text-gray-800 text-sm" style={{fontFamily:'Roboto'}}>Get ready to invoice</span>
        </div>
        <div className="flex items-center">
        <FaChevronDown />
        </div>
      </div>

      <div className="flex justify-between items-center ">
        <div className="flex items-center space-x-2">
          <FaCheckCircle style={{color:colors.primary }} />
          <span className="text-gray-800 text-sm" style={{fontFamily:'Roboto'}}>Get the free mobile app</span>
        </div>
        <div className="flex items-center">
        <span className="text-gray-500 text-sm mr-4" style={{fontFamily:'Roboto'}}>100% </span>
        <FaChevronDown />
        </div>
      </div>
    </div>
  </div>
  );
};

export default SetupCard;
