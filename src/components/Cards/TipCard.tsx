// src/components/cards/ShortcutsCard.jsx
import React from "react";
import Image from "next/image";

// Assuming you have PNG icons locally
import invoice from '../../../public/Tip.png';

const TipCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-gray-900 text-sm" style={{fontFamily:'Roboto'}}>TIP</h4>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        {/* Task Image */}
        <div className="mb-4">
          <Image src={invoice} alt="Task Icon" className="w-12 h-10" />
        </div>

        {/* No tasks yet text */}
        <p className="text-black-500 text-sm " style={{fontFamily:'Roboto'}}>Send invoices via WhatsApp</p>

        {/* Stay on top of to-dos text */}
        <p className="text-gray-500 text-xs" style={{fontFamily:'Roboto'}}>Get paid even faster.</p>
        <p className="text-gray-500 text-xs" style={{fontFamily:'Roboto'}}>Share invoies instantly via WhatsApp.</p>

      </div>
      <div className="text-blue-500 text-xs hover:underline cursor-pointer">
        Find out more
      </div>
    </div>
  );
};

export default TipCard;
