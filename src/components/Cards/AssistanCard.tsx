// src/components/cards/ShortcutsCard.jsx
import React from "react";
import Image from "next/image";

// Assuming you have PNG icons locally
import invoice from '../../../public/assistance.png';

const AssistanCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-gray-900 text-lg">ASSISTANCE</h4>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        {/* Task Image */}
        <div className="mb-4">
          <Image src={invoice} alt="Task Icon" className="w-10 h-12" />
        </div>

        {/* No tasks yet text */}
        <p className="text-black-500 text-sm ">Your trial is about to expire</p>

        {/* Stay on top of to-dos text */}
        <p className='text-gray-500 text-xs'>We&apos;re here to help you subscribe.</p>

      </div>
      <div className="text-blue-500 text-sm hover:underline cursor-pointer">
        Chat with sales
      </div>
    </div>
  );
};

export default AssistanCard;
