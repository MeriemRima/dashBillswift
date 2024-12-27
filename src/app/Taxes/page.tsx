'use client';
import React from 'react';
import Sidebar from '../../components/sidebar';
import Header from '@/components/Header';
import colors from '../styles/Colors';


// import arrowboth from '../../../public/arrowBoth.png';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import tax from '../../../public/json/tax.json';
export default function Taxes() {

  

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div style={{ backgroundColor: colors.secondary }} className="flex-1 p-4">
        <Header />
        <div> 
            <div className="relative w-[80%] mx-4 h-96 p-6 bg-white border border-gray-300 rounded-lg shadow-md flex overflow-visible">
  {/* Left Section */}
  <div className="w-1/2">
    <h2 className="text-xl font-semibold text-gray-800 mb-2" style={{fontFamily:'Roboto'}}>Simply smarter tax filing</h2>
    <p className='text-xs text-gray-700 mb-4 mt-4'>QuickBooks makes it easy to manage tax, so you know what you owe and when to pay it. Set up is simple and smart automation means you&apos;ll be ready to file in no time</p>
    <a href="#" className="text-sm font-medium hover:underline" style={{fontFamily:'Roboto', color: colors.primary }}>
      See how it works
    </a>

    <div className="mt-4 space-y-3">
                 <div className="flex items-start w-96">
                 <span className="flex justify-center items-center w-4 h-4  text-white font-semibold text-sm mr-3 rounded-full" style={{backgroundColor:colors.primary}}>1</span>
                 <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Enter your business address, then add who to pay and when.</p>
                 </div>
                 <div className="flex items-start">
                 <span className="flex justify-center items-center w-4 h-4  text-white font-semibold text-sm mr-3 rounded-full" style={{backgroundColor:colors.primary}}>2</span>
                     <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>See exactly what you need to collect, right on the invoice.</p>
                 </div>
                 <div className="flex items-start">
                 <span className="flex justify-center items-center w-4 h-4  text-white font-semibold text-sm mr-3 rounded-full" style={{backgroundColor:colors.primary}}>3</span>
                     <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Use 1-click e-filing to quickly send your tax return.</p>
                 </div>
             </div>

    {/* Buttons */}
    <div className="flex mt-6">
      
      <button
        style={{ backgroundColor: colors.primary, borderRadius: 4,fontFamily:'Roboto' }}
        className="text-white text-sm font-medium py-2 px-4"
      >
        Set up tax
      </button>
    </div>
  </div>

  {/* Right Section - Animation */}
  <div className="w-1/2 flex justify-center items-center relative overflow-visible">
    <div
      className="absolute w-full h-96"
      style={{ marginLeft: '240px', marginTop: '20px' }} // Push outside
    >
      <Lottie animationData={tax} className="w-full h-full" />
    </div>
  </div>
</div>

     <div>
<hr className="border-t border-gray-300 my-4 mx-2" />
<p className="mt-4 ml-8" style={{fontFamily:'Roboto'}}>TIPS & RESOURCES</p>
<p style={{ color: colors.primary ,fontFamily:'Roboto'}} className="mt-4 ml-8 text-sm">Set up and use Automated Sales Tax</p>
<p style={{ color: colors.primary ,fontFamily:'Roboto'}} className="mt-4 ml-8 text-sm">Automated Sales Tax Centre&apos;s Key Features</p>
<p style={{ color: colors.primary ,fontFamily:'Roboto'}} className="mt-4 ml-8 text-sm">How to Setup E-filing for Your Sales Tax Returns</p>

<p style={{ color: colors.primary ,fontFamily:'Roboto'}} className="mt-4 ml-8 text-sm">See more</p>
</div>



         </div>
       

        
        
      </div>
    </div>
  );
}
