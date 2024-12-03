// src/components/cards/BankAccCard.jsx
import React from "react";
import Image from "next/image";
import bankP from "../../../public/bankPopular.png";
import ADD from "../../../public/add.png";
import BMCE from "../../../public/BMCE.png";
import colors from "@/app/styles/Colors";

const BankAccCard = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow">
      <div className="flex justify-between items-center mb-4">
  <h4 className="text-gray-800">BANK ACCOUNTS</h4>
  <h6 className="text-blue-500 cursor-pointer">Hide</h6>
</div>

        <p className="text-l font-bold">Link your bank </p>
        <p className='text-gray-500 text-sm'>See where your money is headed so
        you can take control of your finances.</p>
        <div className="flex items-center mt-4 ">
       <Image src={bankP} alt='bankp' className='h-8 w-auto mr-4'/>
      <div className="flex-1">
        <h6 className="text-gray-800 text-sm">Banque Populaire</h6>
      </div>
       <Image alt='ADD' src={ADD} className='h-4 w-auto '/>
    </div>
    <div className="flex items-center mt-4 mb-4">
       <Image src={BMCE} alt='bankp' className='h-8 w-auto mr-4'/>
      <div className="flex-1">
        <h6 className="text-gray-800 text-sm">Bank of Africa</h6>
      </div>
       <Image alt='ADD' src={ADD} className='h-4 w-auto '/>
    </div>
    <button className="text-white py-1 px-8 rounded-lg text-sm mt-4 ml-4"
                style={{ backgroundColor: colors.primary }}>
                    Find your bank 
                  </button>
      </div>
  );
};

export default BankAccCard;
