'use client';
import React, {  useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '@/components/Header';
import colors from '../styles/Colors';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import settings from '../../../public/Settings.png';
import close from '../../../public/Close.png';
import filter from '../../../public/filter2.png';
import print from '../../../public/Printer.png';
// import arrowboth from '../../../public/arrowBoth.png';
import track from '../../../public/json/expenses suppliers.json';
import feedback from '../../../public/feedbackOrg.png';
import money from '../../../public/money.png';
import logout from '../../../public/logout2.png';
import expensesAnimt from '../../../public/ExpensesIcon.png';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
export default function Exepense() {
  const [activeTab, setActiveTab] = useState('Exepenses'); // 'home' or 'cashFlow'

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
      <Header  toggleSidebar={toggleSidebar}/>

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-4 mx-4">
          <div className="flex">
            <div
              onClick={() => setActiveTab('Exepenses')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'Exepenses' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='Exepenses'? 'bold':'normal',
                borderBottom: activeTab === 'Exepenses' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
             Exepenses
            </div>
            <div
              onClick={() => setActiveTab('Suppliers')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'Suppliers' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='Suppliers'? 'bold':'normal',
                borderBottom: activeTab === 'Suppliers' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Suppliers
            </div>
         
           
          </div>
        </div>

         {/* Conditional Content */}
         <div className="p-4 rounded-lg">
          {activeTab === 'Exepenses' ? (
             <div> 
                 <div className="flex justify-end items-center mb-4 ">
                   <span className='text-sm flex items-center mr-6'
                     style={{
                       fontFamily:'Roboto',
                       color:colors.primary
                     }}
                   >
                     <Image src={feedback} alt='fedbakc' className='h-4 w-4 mr-2'/>
                    Give Feedback
                   </span>
                  
                   <button
                     className="p-2 text-sm flex items-center"
                     style={{
                       borderRadius: 4,
                       backgroundColor: colors.primary,
                       color: colors.white,
                       fontFamily: 'Roboto',
                     }}
                   >
                     New Transactions  <FaChevronDown color="white" style={{ marginLeft: 4 }} />
                   </button>
                 </div>
              <div className="flex flex-col w-full p-6 bg-white border border-gray-300 rounded-lg shadow-md">
              {/* Header Section */}
              <div className="flex justify-between items-center">
                 <h4 className="font-semibold text-lg" style={{ fontFamily: 'Roboto' }}>
                 Expenses
                 </h4>
                
               </div>
               
               <div
  className="relative flex items-start space-x-4 mt-4 p-4"
  style={{ backgroundColor: '#F7F7F7' }}
>
  {/* Left Icon */}
  <Image src={money} alt="cloud" className="h-16 w-20" />

  {/* Text Content */}
  <div className="flex flex-col space-y-2">
    <span className="text-sm" style={{ fontFamily: 'Roboto' }}>
      Record your spending
    </span>
    <span className="text-sm" style={{ fontFamily: 'Roboto' }}>
      Enter transactions, bills and payments to get an in-depth view of your expenses.
    </span>
    <span
      className="text-sm"
      style={{ fontFamily: 'Roboto', color: colors.primary }}
    >
      Show me how
    </span>
  </div>

  {/* Close Icon */}
  <Image
    src={close}
    alt="close"
    className="absolute top-2 right-2 h-6 w-6 cursor-pointer"
  />
</div>

             <div className='flex items-center mt-4'>
                 <div className="flex items-center space-x-2">
                     <select className="border py-2 px-4 text-sm">
                         <option value="option1">All transaction </option>
                         <option value="option2">Option 2</option>
                         <option value="option3">Option 3</option>
                     </select>
                     <div className="relative">
                         {/* Search Icon Inside the Input */}
                         <span className="absolute inset-y-0 left-2 flex items-center">
                             <Image src={filter} alt="search" className="h-4 w-4" />
                         </span>
                         {/* Input Field */}
                         <input
                             type="text"
                             placeholder="Filter"
                             className="w-24 px-1 mr-2 py-2 text-sm border border-gray-300 text-center focus:outline-none focus:ring focus:ring-orange-300"
                             style={{ fontFamily: 'Roboto' }}
                         />
                         <input
                             type="text"
                             placeholder="Dates:last 12 months "
                             className="w-32 px-1 py-2 text-sm border border-gray-300  focus:outline-none focus:ring focus:ring-orange-300"
                             style={{ fontFamily: 'Roboto' }}
                         />
                         
                     </div>
                 </div>
                 <div className="ml-auto flex items-center space-x-2">
                 <Image src={logout} alt='ogout' className='w-4 h-4'/>
                     <Image src={print} alt='print' className='h-4 w-4'/>
                     <Image src={settings} alt='sett' className='h-4 w-4'/>
                 </div>
             </div>
             <div className="mt-8 flex flex-col justify-center items-center space-y-2">
  <Image src={expensesAnimt} alt="exx" className="h-28 w-24" />
  <h1 className="text-lg font-semibold" style={{fontFamily:'Roboto'}}>No expenses found</h1>
  <p className="text-sm text-gray-600" style={{fontFamily:'Roboto'}}>
    Try to change some filters to see more results
  </p>
</div>

             
             
             
             
             
               </div>
               </div>
         
          ) : activeTab==='Suppliers'? (
            <div> 
            <div className="relative w-[80%] h-96 p-6 bg-white border border-gray-300 rounded-lg shadow-md flex overflow-visible">
  {/* Left Section */}
  <div className="w-1/2">
    <h2 className="text-xl font-semibold text-gray-800 mb-2" style={{fontFamily:'Roboto'}}>Keep track of how you pay </h2>
    <a href="#" className="text-sm font-medium hover:underline" style={{fontFamily:'Roboto', color: colors.primary }}>
      See how it works
    </a>

    <div className="mt-4 space-y-3">
      <div className="flex items-center">
        <span
          className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-2 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></span>
        <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Find all your vendors/contractors in one place</p>
      </div>
      <div className="flex items-center">
        <span
          className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-3 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></span>
        <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>See how much you&apos;re spending by vendor</p>
      </div>
      <div className="flex items-center">
        <span
          className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-3 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></span>
        <p className="text-sm text-gray-700" style={{fontFamily:'Roboto'}}>Keep track of money you owe each supplier (bills)</p>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex mt-6">
      <button
        style={{ color: colors.primary, borderColor: colors.primary, borderRadius: 4  ,fontFamily:'Roboto'}}
        className="border mr-4 text-sm font-medium py-2 px-4"
      >
        Import Suppliers
      </button>
      <button
        style={{ backgroundColor: colors.primary, borderRadius: 4,fontFamily:'Roboto' }}
        className="text-white text-sm font-medium py-2 px-4"
      >Add Suppliers manually
      </button>
    </div>
  </div>

  {/* Right Section - Animation */}
  <div className="w-1/2 flex justify-center items-center relative overflow-visible">
  <div
    className="absolute"
    style={{
      width: '500px',   // Increase the width
      height: '500px',  // Increase the height
      marginLeft: '240px',
      marginTop: '20px',
    }}
  >
    <Lottie animationData={track} className="w-full h-full" />
  </div>
</div>

</div>

     <div>
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
