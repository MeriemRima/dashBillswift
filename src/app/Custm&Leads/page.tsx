'use client';
import React, {  useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '@/components/Header';
import colors from '../styles/Colors';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// import arrowboth from '../../../public/arrowBoth.png';
import track from '../../../public/json/keep track.json';
import marketing from '../../../public/marketing.png';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Custom() {
  const [activeTab, setActiveTab] = useState('Customers'); // 'home' or 'cashFlow'
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="w-64">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div style={{ backgroundColor: colors.secondary }} className="flex-1 p-4">
        <Header toggleSidebar={toggleSidebar} />

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-4 mx-4">
          <div className="flex">
            
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
              onClick={() => setActiveTab('Marketing')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'Marketing' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='Marketing'? 'bold':'normal',
                borderBottom: activeTab === 'Marketing' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Marketing
            </div>
          
          </div>
        </div>

         {/* Conditional Content */}
         <div className="p-4 rounded-lg">
          { activeTab==='Customers'? (
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

</div>



         </div>
          
            
          ): activeTab==='Marketing'?(
              <div> 
            <div className="relative w-[80%] h-96 p-6 bg-white border border-gray-300 rounded-lg shadow-md flex overflow-visible">
  {/* Left Section */}
  <div className="w-1/2">
    <h2 className="text-xl font-semibold text-gray-800 mb-2" style={{fontFamily:'Roboto'}}>Boost business with Mailchimp</h2>
    <a href="#" className="text-sm font-medium hover:underline" style={{fontFamily:'Roboto', color: colors.primary }}>
      See how it works
    </a>

    <div className="mt-4 space-y-3">
      <div className="flex items-center">
        <span
          className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-2 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></span> 
        <div >
        <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Reatin your cutomers </p>
        <p className='text-xs text-gray-700' style={{fontFamily:'Roboto'}}>Create Personalized messages to re-engage past customers</p>

        </div>
      </div>
      <div className="flex items-center">
        <span
          className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-3 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></span>
         <div >
        <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Drive repeat and referral business </p>
        <p className='text-xs text-gray-700' style={{fontFamily:'Roboto'}}>Automate emails to encourage existing business</p>

        </div>
      </div>
      <div className="flex items-center">
        <span
          className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-3 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></span>
         <div >
        <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Combine Billswift and Mailchimp contacts </p>
        <p className='text-xs text-gray-700' style={{fontFamily:'Roboto'}}>Automate email or survey campaigns to your entire audience</p>

        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex mt-6">
     
      <button
        style={{ backgroundColor: colors.primary, borderRadius: 4,fontFamily:'Roboto' }}
        className="text-white text-sm font-medium py-2 px-4"
      >
      Connect to MailChimp for FREE
      </button>
    </div>
    <p className='mt-12 text-sm text-gray-700' style={{fontFamily:'Roboto'}}>Mailchimp has both free and paid offerings. <span style={{color:colors.primary}}> Learn more</span> </p>
  </div>

  {/* Right Section - Animation */}
  <div className="w-1/2 flex justify-center items-center relative overflow-visible">
    <div
      className="absolute w-full h-96"
      style={{ marginLeft: '450px', marginTop: '130px' }} // Push outside
    >
       <Image  src={marketing} alt='martk' className='w-48 h-72'/>
    </div>
  </div>
</div>

     <div>
<hr className="border-t border-gray-300 my-4 mx-2" />
<p className="mt-4 ml-8" style={{fontFamily:'Roboto'}}>TIPS & RESOURCES</p>
<p style={{ color: colors.primary ,fontFamily:'Roboto'}} className="mt-4 ml-8 text-sm">Connect the app</p>
<p style={{ color: colors.primary ,fontFamily:'Roboto'}} className="mt-4 ml-8 text-sm">Get step by step instructions</p>

<p style={{ color: colors.primary ,fontFamily:'Roboto'}} className="mt-4 ml-8 text-sm">Read our announcement on The Billswift Blog</p>
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
