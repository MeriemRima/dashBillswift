import React from "react";
import Image from "next/image"; // Next.js image component (use "img" tag if not using Next.js)
import closeIcon from "../../../public/Close.png";  // Local close icon
import invoiceImage from "../../../public/iconInvoices.png";  // Local invoice image
import colors from "@/app/styles/Colors";
const InvoicesCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 h-full shadow-md">
      {/* Header Section: Title and Close Icon */}
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-xl  text-gray-800">INVOICES</h4>
        <Image alt="Close icon" src={closeIcon} className="h-6 w-6 cursor-pointer" />
      </div>

      {/* Content Section */}
      <div className="flex justify-between items-start">
        {/* Left Section: Title, Paragraph, and Button */}
        <div className="flex-1 pr-4">
          <h5 className="text-l font-semibold text-Black-500 mb-2">Send personalized invoices</h5>
          <p className="text-xs text-gray-500 mb-8">
          Create, send, receive your payment, start again. 
          Create an invoice to get started
          </p>
          <button             style={{ backgroundColor: colors.primary }}
 className="px-4 py-1 text-white text-sm font-semibold rounded hover:bg-blue-600">
            Create an invoice 
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/3">
          <Image alt="Invoice image" src={invoiceImage} className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default InvoicesCard;
