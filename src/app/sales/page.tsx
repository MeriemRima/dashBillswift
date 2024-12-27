'use client';
import React, {  useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '@/components/Header';
import colors from '../styles/Colors';
import Image from 'next/image';
import lightbulb from '../../../public/LightBulb.png';
import productAnimt from '../../../public/json/product and service.json'

// import arrowboth from '../../../public/arrowBoth.png';
import reconcile from '../../../public/json/FACTURES.json';
import track from '../../../public/json/keep track.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
export default function Sales() {
  const [activeTab, setActiveTab] = useState('All'); // 'home' or 'cashFlow'

  

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div style={{ backgroundColor: colors.secondary }} className="flex-1 p-4">
        <Header />

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-4 mx-4">
          <div className="flex">
            <div
              onClick={() => setActiveTab('All')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'All' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='All'? 'bold':'normal',
                borderBottom: activeTab === 'All' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              All Sales
            </div>
            <div
              onClick={() => setActiveTab('Customers')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'Customers' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='Customers'? 'bold':'normal',
                borderBottom: activeTab === 'Customers' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Customers
            </div>
            <div
              onClick={() => setActiveTab('Product')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'Product' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='Product'? 'bold':'normal',
                borderBottom: activeTab === 'Product' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Product & Services 
            </div>
          
          </div>
        </div>

         {/* Conditional Content */}
         <div className="p-4 rounded-lg">
          {activeTab === 'All' ? (
             <div>
                <div className=" w-[80%] h-[40%] p-6 bg-white border border-gray-300 rounded-lg shadow-md flex">
                    <div className='w-1/2'>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2" style={{fontFamily:'Roboto'}}>Create ,send and track invoices </h2>
             <div className="mt-4 space-y-3">
                 <div className="flex items-center">
                 <span className="flex justify-center items-center w-2 h-2  text-white font-semibold text-lg mr-2 rounded-full" style={{backgroundColor:colors.primary}}></span>
                 <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>View and track your invoices all in one place</p>
                 </div>
                 <div className="flex items-center">
                 <span className="flex justify-center items-center w-2 h-2  text-white font-semibold text-lg mr-3 rounded-full" style={{backgroundColor:colors.primary}}></span>
                     <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Customise invoices with your logo, colours, and fonts</p>
                 </div>
                 <div className="flex items-center">
                 <span className="flex justify-center items-center w-2 h-2  text-white font-semibold text-lg mr-3 rounded-full" style={{backgroundColor:colors.primary}}></span>
                     <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Schedule automatic reminders and recurring invoices</p>
                 </div>
             </div>
             <div className="flex  mt-6">
                 <button style={{backgroundColor:colors.primary,borderRadius:4,fontFamily:'Roboto'}} className=" mr-4 text-white text-sm font-medium py-2 px-4 ">
                     Create invoice  
                 </button>
                
             </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
            <Lottie animationData={reconcile} className="w-full h-96" />

            </div>
             
             
         </div>
         <div>
  <hr className="border-t border-gray-300 my-4 mx-2" />
  <p className="mt-4 ml-8">TIPS & RESOURCES</p>
  <p style={{ color: colors.primary ,fontFamily:'Roboto' }} className="mt-4 ml-8 text-sm">Create and send invoice </p>
  <p style={{ color: colors.primary ,fontFamily:'Roboto'}} className="mt-4 ml-8 text-sm">Record a Customer payement </p>
  <p style={{ color: colors.primary ,fontFamily:'Roboto'}} className="mt-4 ml-8 text-sm">See more</p>
</div>



             </div>
         
          ) : activeTab==='Customers'? (
            <div> 
            <div className="relative w-[80%] h-96 p-6 bg-white border border-gray-300 rounded-lg shadow-md flex overflow-visible">
  {/* Left Section */}
  <div className="w-1/2">
    <h2 className="text-xl font-semibold text-gray-800 mb-2" style={{fontFamily:'Roboto'}}>Keep track of who needs to pay you</h2>
    <a href="#" className="text-sm font-medium hover:underline" style={{fontFamily:'Roboto', color: colors.primary }}>
      See how it works
    </a>

    <div className="mt-4 space-y-3">
      <div className="flex items-center">
        <span
          className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-2 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></span>
        <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Find all your customers and their info in one place</p>
      </div>
      <div className="flex items-center">
        <span
          className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-3 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></span>
        <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>See who your top customers are</p>
      </div>
      <div className="flex items-center">
        <span
          className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-3 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></span>
        <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Track invoices to see who owes you money</p>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex mt-6">
      <button
        style={{ color: colors.primary, borderColor: colors.primary, borderRadius: 4  ,fontFamily:'Roboto'}}
        className="border mr-4 text-sm font-medium py-2 px-4"
      >
        Import customers
      </button>
      <button
        style={{ backgroundColor: colors.primary, borderRadius: 4,fontFamily:'Roboto' }}
        className="text-white text-sm font-medium py-2 px-4"
      >
        Add Customer manually
      </button>
    </div>
  </div>

  {/* Right Section - Animation */}
  <div className="w-1/2 flex justify-center items-center relative overflow-visible">
    <div
      className="absolute w-full h-96"
      style={{ marginLeft: '240px', marginTop: '130px' }} // Push outside
    >
      <Lottie animationData={track} className="w-full h-full" />
    </div>
  </div>
</div>

     <div>
<hr className="border-t border-gray-300 my-4 mx-2" />
<p className="mt-4 ml-8" style={{fontFamily:'Roboto'}}>TIPS & RESOURCES</p>
<p style={{ color: colors.primary ,fontFamily:'Roboto'}} className="mt-4 ml-8 text-sm">See more</p>
</div>



         </div>
          
            
          ): activeTab==='Product'?(
            <div className="w-[90%] h-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col items-center justify-start ml-10">
            {/* Animation at the top */}
            <div className="w-full flex justify-center mb-4">
              <Lottie animationData={productAnimt} className="w-80 h-80" />
            </div>
          
            {/* Title */}
            <h1 className="text-center text-gray-800 text-lg font-semibold mb-4" style={{fontFamily:'Roboto'}}>
              Add your products and services to save time <br /> creating your next invoice or receipt
            </h1>
          
            {/* Button */}
            <button
              style={{ backgroundColor: colors.primary, borderRadius: 4,fontFamily:'Roboto' }}
              className="text-white text-sm font-medium py-2 px-4 mb-6"
            >
              Add a product or service
            </button>
          
            {/* Separator */}
            <hr className="border-t border-gray-300 w-full mb-4" />
          
            {/* Tip Section */}
            <div className="flex items-center mb-2">
              <Image src={lightbulb} alt="lightbulb" className="h-4 w-4 mr-2" />
              <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>
                Tip: Got your products and services in an Excel or CSV file?{' '}
                <span style={{ color: colors.primary ,fontFamily:'Roboto'}} className="font-medium cursor-pointer">
                  Import a file
                </span>
              </p>
            </div>
          </div>
          
          
           
): 
          <div></div>
          }
        </div>
        
      </div>
    </div>
  );
}
