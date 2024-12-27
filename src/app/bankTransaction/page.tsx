'use client';
import dynamic from 'next/dynamic';
import React, {   useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '@/components/Header';
import colors from '../styles/Colors';
import Image from 'next/image';
import {  FaChevronDown } from 'react-icons/fa';
import search from '../../../public/search.png';
import setttings from '../../../public/Settings.png';
import arrowleft from '../../../public/arrowLeft.png';
import arrowRight from '../../../public/arrowRight.png';
import cloud from '../../../public/cloud.png';
import arroworange from '../../../public/arrowOrange.png';
import close from '../../../public/Close.png';
import filter from '../../../public/filter2.png';
import print from '../../../public/Printer.png';
// import arrowboth from '../../../public/arrowBoth.png';
import reconcile from '../../../public/json/reconcile.json';
import feedback from '../../../public/feedback.png';
import feedbackOrg from '../../../public/feedbackOrg.png';
import arrowblue from '../../../public/arrowblue.png';
import edit from '../../../public/EDIT.png';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Bank() {
  const [activeTab, setActiveTab] = useState('transactions'); // 'home' or 'cashFlow'
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const data = [
    {
        name: 'John Doe',
        accountType: 'Checking',
        detailsType: 'Personal',
        billswiftBalance: '$5,000',
    },
    {
        name: 'Jane Smith',
        accountType: 'Savings',
        detailsType: 'Business',
        billswiftBalance: '$10,000',
    },
    {
        name: 'Alice Johnson',
        accountType: 'Credit',
        detailsType: 'Credit Card',
        billswiftBalance: '$2,500',
    },
    {
        name: 'Michael Brown',
        accountType: 'Investment',
        detailsType: 'Stock',
        billswiftBalance: '$15,000',
    },
];


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
        <Header  toggleSidebar={toggleSidebar} />

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-4 mx-4">
          <div className="flex">
            <div
              onClick={() => setActiveTab('transactions')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'transactions' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='transactions'? 'bold':'normal',
                borderBottom: activeTab === 'transactions' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Bank transactions
            </div>
            <div
              onClick={() => setActiveTab('Reconcile')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'Reconcile' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='Reconcile'? 'bold':'normal',
                borderBottom: activeTab === 'Reconcile' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Reconcile
            </div>
            <div
              onClick={() => setActiveTab('Rules')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'Rules' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='Rules'? 'bold':'normal',
                borderBottom: activeTab === 'Rules' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Rules
            </div>
            <div
              onClick={() => setActiveTab('Chart')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'Chart' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='Chart'? 'bold':'normal',
                borderBottom: activeTab === 'Chart' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Chart of account
            </div>
            <div
              onClick={() => setActiveTab('Recurring')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'Recurring' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='Recurring'? 'bold':'normal',
                borderBottom: activeTab === 'Recurring' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Recurring transactions
            </div>
          </div>
        </div>

         {/* Conditional Content */}
         <div className="p-4 rounded-lg">
          {activeTab === 'transactions' ? (
             <div>
                <div className=" w-[70%] p-6 bg-white border border-gray-300 rounded-lg shadow-md">
             <h2 className="text-xl font-semibold text-gray-800 mb-2">Automate income and expense tracking</h2>
             <p className="text-sm text-gray-600 mb-4">Save hours of work by tracking finances automatically</p>
             <a href="#" className=" text-sm font-medium hover:underline" style={{color:colors.primary}}>Video tutorials</a>
             <div className="mt-4 space-y-3">
                 <div className="flex items-start">
                 <span className="flex justify-center items-center w-4 h-4  text-white font-semibold text-sm mr-3 rounded-full" style={{backgroundColor:colors.primary}}>1</span>
                 <p className="text-sm text-gray-700">Connect a bank or credit card to get started</p>
                 </div>
                 <div className="flex items-start">
                 <span className="flex justify-center items-center w-4 h-4  text-white font-semibold text-sm mr-3 rounded-full" style={{backgroundColor:colors.primary}}>2</span>
                     <p className="text-sm text-gray-700">Review and add your transactions</p>
                 </div>
                 <div className="flex items-start">
                 <span className="flex justify-center items-center w-4 h-4  text-white font-semibold text-sm mr-3 rounded-full" style={{backgroundColor:colors.primary}}>3</span>
                     <p className="text-sm text-gray-700">See how your business is doing</p>
                 </div>
             </div>
             <div className="flex  mt-6">
                 <button style={{backgroundColor:colors.primary,borderRadius:4}} className=" mr-4 text-white text-sm font-medium py-2 px-4 ">
                     Connect account
                 </button>
                 <button style={{color:colors.primary,borderColor:colors.primary,borderRadius:4}} className="border  text-sm font-medium py-2 px-4  ">
                     Upload transactions
                 </button>
             </div>
         </div>
         <div>
  <p style={{ color: colors.primary }} className="mt-4 ml-8 text-sm">Manage connections</p>
  <hr className="border-t border-gray-300 my-4 mx-2" />
  <p className="mt-4 ml-8">TIPS & RESOURCES</p>
  <p style={{ color: colors.primary }} className="mt-4 ml-8 text-sm">How to import transactions automatically from bank</p>
  <p style={{ color: colors.primary }} className="mt-4 ml-8 text-sm">How to enter, edit, delete expenses</p>
  <p style={{ color: colors.primary }} className="mt-4 ml-8 text-sm">When and why to enter an expense vs. a bill</p>
  <p style={{ color: colors.primary }} className="mt-4 ml-8 text-sm">See more</p>
</div>



             </div>
         
          ) : activeTab==='Reconcile'? (
            <div className="flex w-full p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            {/* Left Content */}
            <div className="w-1/2">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Match the books to the bank records</h2>
              <p className="text-sm text-gray-600 mb-4">
  Connected accounts are easier to reconcile.{" "}
  <span style={{ color: colors.primary }}>Connect now</span>
</p>

<p className="text-sm mb-4" style={{ color: colors.primary }}>
  <span className="underline">See how it work</span>{" "}
  <span style={{ color: "grey" }}>(1:53)</span>
</p>


              <div className="mt-4 space-y-3">
                <div className="flex items-center">
                  <span
                    className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-3 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                  ></span>
                  <p className="text-sm text-gray-700">Keep yourself on track</p>
                </div>
                <div className="flex items-center">
                  <span
                    className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-3 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                  ></span>
                  <p className="text-sm text-gray-700">Find holes in your accounting</p>
                </div>
                <div className="flex items-center">
                  <span
                    className="flex justify-center items-center w-2 h-2 text-white font-semibold text-lg mr-3 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                  ></span>
                  <p className="text-sm text-gray-700">Get things tidy for tax time</p>
                </div>
              </div>
              <div className="flex mt-6">
                <button
                  style={{ backgroundColor: colors.primary, borderRadius: 4 ,width:'30%'}}
                  className="mr-4 text-white text-sm font-medium py-2 px-4"
                >
                  Get started
                </button>
              </div>
            </div>
          
            {/* Right Image */}
            <div className="w-1/2 flex justify-center items-center">
            <Lottie animationData={reconcile} className="w-full h-96" />

            </div>
          </div>
          
            
          ): activeTab==='Rules'?(
            <div className="flex flex-col w-full p-6 bg-white border border-gray-300 rounded-lg shadow-md">
  {/* Header Section */}
  <div className="flex justify-between items-center">
    <h4 className="font-semibold text-lg" style={{ fontFamily: 'Roboto' }}>
      Rules
    </h4>
    <div className="flex items-center">
      <span className='text-sm'
        style={{
          fontFamily: 'Roboto',
          color: colors.primary,
          borderBottom: '1px solid',
          borderColor: colors.primary,
          marginRight: 8,
        }}
      >
        Learn more about bank rules
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
        New rule <FaChevronDown color="white" style={{ marginLeft: 4 }} />
      </button>
    </div>
  </div>

  {/* Search Input Section */}
  <div className="flex mt-4 justify-end items-center">
  {/* Input Wrapper */}
  <div className="relative">
    {/* Search Icon Inside the Input */}
    <span className="absolute inset-y-0 right-2 flex items-center">
      <Image src={search} alt="search" className="h-4 w-4" />
    </span>
    {/* Input Field */}
    <input
      type="text"
      placeholder="Search by name or conditions"
      className="w-64 px-2 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
      style={{ fontFamily: 'Roboto' }}
    />
  </div>
  {/* Settings Icon Outside the Input */}
  <Image
    src={setttings}
    alt="settings"
    className="h-4 w-4 ml-4 cursor-pointer"
  />
</div>


   {/* Table Section */}
<div className="mt-6">
  <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="px-4 py-2 border border-gray-300 text-left text-sm">
          <input type="checkbox" />
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal', textTransform: 'uppercase' }}
        >
          Priority <span>⬆</span>
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal', textTransform: 'uppercase' }}
        >
          Rule Name
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal', textTransform: 'uppercase' }}
        >
          Applied To
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal', textTransform: 'uppercase' }}
        >
          Conditions
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal', textTransform: 'uppercase' }}
        >
          Settings
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal', textTransform: 'uppercase' }}
        >
          Auto-Add
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal', textTransform: 'uppercase' }}
        >
          Status
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal', textTransform: 'uppercase' }}
        >
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          colSpan={9}
          className="px-8 py-6 text-sm text-center text-gray-600 mt-4"
        >
          <span
            className="text-l text-gray-700"
            style={{
              fontFamily: 'Roboto',
              marginBottom: 0,
            }}
          >
            Use rules to save time <br />
            <span className="text-xs">
              Make rules for your frequently occurring transactions and tell
              Billswift exactly what should happen when conditions are met.{' '}
              <a href="#" className="text-orange-500">
                Create a rule
              </a>
            </span>
          </span>
        </td>
      </tr>
    </tbody>
  </table>

  {/* Pagination Section */}
  {/* Pagination Section */}
<div className="flex justify-end items-center mt-4">
  {/* Item Count */}
  <span className="text-xs mr-2 text-gray-600" style={{ fontFamily: 'Roboto' }}>
    0-0 of 0 items
  </span>

  {/* Pagination Controls */}
  <div className="flex items-center space-x-2">
    {/* Previous Arrow */}
   
     {/* Previous Arrow Button */}
      <Image src={arrowleft} alt='arrowleft' className='h-3 w-2' />

   

    {/* Current Page Number */}
    <div className="px-3 py-1 border border-gray-300 rounded-md text-xs text-center">
      1
    </div>

    {/* Next Arrow */}
    
<Image src={arrowRight} alt='arrowright'  className='h-3 w-2'/>   
  </div>
</div>

</div>

</div>
): activeTab==='Chart'?(
  <div className="flex flex-col w-full p-6 bg-white border border-gray-300 rounded-lg shadow-md">
 {/* Header Section */}
 <div className="flex justify-between items-center">
    <h4 className="font-semibold text-lg" style={{ fontFamily: 'Roboto' }}>
      Chart of accounts
    </h4>
    <div className="flex items-center">
      <span className='text-sm flex items-center mr-6'
        style={{
          fontFamily:'Roboto'
        }}
      >
        <Image src={feedback} alt='fedbakc' className='h-4 w-4 mr-2'/>
        Feedback
      </span>
      <button
        className="p-2 text-sm border  flex items-center mr-2"
        style={{
          borderRadius: 4,
          borderColor: colors.primary,
          color: colors.primary,
          fontFamily: 'Roboto',
        }}
      >
        Run report  
      </button>
      <button
        className="p-2 text-sm flex items-center"
        style={{
          borderRadius: 4,
          backgroundColor: colors.primary,
          color: colors.white,
          fontFamily: 'Roboto',
        }}
      >
        New  <FaChevronDown color="white" style={{ marginLeft: 4 }} />
      </button>
    </div>
  </div>
  <div className='flex items-center mt-4'>
    <Image src={arroworange} alt='arr' className='h-3 w-2 mr-2'/>
     <span style={{fontFamily:'Roboto',color:colors.primary}}> All List</span>
  </div>
  <div className="flex items-start space-x-4 mt-4 p-4" style={{backgroundColor:'#F7F7F7'}}>
    <Image src={cloud} alt='cloud' className='h-14 w-20'/>
    <div className="flex flex-col space-y-2">
        <span className='text-sm' style={{fontFamily:'Roboto'}}>Need to bring your Chart of Accounts into QuickBooks?</span>
        <span className='text-sm' style={{fontFamily:'Roboto'}}>Learn how to bring your existing Chart of Accounts, customers, suppliers and other important lists into QuickBooks.</span>
        <span className='text-sm' style={{fontFamily:'Roboto' ,color:colors.primary}}>Show me how</span>
    </div>
    <Image src={close} alt='close' className='ml-auto h-6 w-6'/>
</div>
<div className='flex items-center mt-4'>
    <div className="flex items-center space-x-2">
        <select className="border py-2 px-4 text-sm">
            <option value="option1">Batch actions</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        <div className="relative">
            {/* Search Icon Inside the Input */}
            <span className="absolute inset-y-0 right-2 flex items-center">
                <Image src={filter} alt="search" className="h-4 w-4" />
            </span>
            {/* Input Field */}
            <input
                type="text"
                placeholder="Filter by name or number "
                className="w-48 px-1 mr-2 py-2 text-sm border border-gray-300  focus:outline-none focus:ring focus:ring-orange-300"
                style={{ fontFamily: 'Roboto' }}
            />
            <input
                type="text"
                placeholder="Filter by name or number "
                className="w-48 px-1 py-2 text-sm border border-gray-300  focus:outline-none focus:ring focus:ring-orange-300"
                style={{ fontFamily: 'Roboto' }}
            />
            
        </div>
    </div>
    <div className="ml-auto flex items-center space-x-2">
        <Image src={print} alt='print' className='h-4 w-4'/>
        <Image src={edit} alt='edit' className='h-4 w-4'/>
        <Image src={setttings} alt='sett' className='h-4 w-4'/>
    </div>
</div>
  {/* Table Section */}
  <div className="mt-6">
  <table className="w-full border-collapse border border-gray-300">
    <thead>
        <tr>
            <th className="px-4 py-2 border border-gray-300 text-left text-sm">
                <input type="checkbox" />
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left text-sm " style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
               
                Name 
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                Account type
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                Details type 
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                Billswift balance
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                Blank balance
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                Actions
            </th>
        </tr>
    </thead>
    <tbody>
        {data.map((item, index) => (
            <tr key={index}>
                <td className="px-4 py-2 border border-gray-300 text-left text-sm">
                    <input type="checkbox" />
                </td>
                <td className="px-8 py-4 border border-gray-300 text-left text-sm">{item.name}</td>
                <td className="px-8 py-4 border border-gray-300 text-left text-sm">{item.accountType}</td>
                <td className="px-8 py-4 border border-gray-300 text-left text-sm">{item.detailsType}</td>
                <td className="px-8 py-4 border border-gray-300 text-left text-sm">{item.billswiftBalance}</td>
                <td className="px-8 py-4 border border-gray-300 text-left text-sm">{item.billswiftBalance}</td>
                <td className="px-8 py-4 border border-gray-300 text-left text-sm" style={{color:colors.primary}}>Run report</td>
            </tr>
        ))}
    </tbody>
</table>


  {/* Pagination Section */}
  {/* Pagination Section */}
<div className="flex justify-end items-center mt-4">
  {/* Item Count */}
  <span className="text-xs mr-2 text-gray-600" style={{ fontFamily: 'Roboto' }}>
    0-0 of 0 items
  </span>

  {/* Pagination Controls */}
  <div className="flex items-center space-x-2">
    {/* Previous Arrow */}
   
     {/* Previous Arrow Button */}
      <Image src={arrowleft} alt='arrowleft' className='h-3 w-2' />

   

    {/* Current Page Number */}
    <div className="px-3 py-1 border border-gray-300 rounded-md text-xs text-center">
      1
    </div>

    {/* Next Arrow */}
    
<Image src={arrowRight} alt='arrowright'  className='h-3 w-2'/>   
  </div>
</div>

</div>




  </div>
):activeTab==='Recurring'?(
  <div className="flex flex-col w-full p-6 bg-white border border-gray-300 rounded-lg shadow-md">
  {/* Header Section */}
  <div className="flex justify-between items-center">
     <h4 className="font-semibold text-lg" style={{ fontFamily: 'Roboto' }}>
     Recurring transactions
     </h4>
     <div className="flex items-center">
       <span className='text-sm flex items-center mr-6'
         style={{
           fontFamily:'Roboto',
           color:colors.primary
         }}
       >
         <Image src={feedbackOrg} alt='fedbakc' className='h-6 w-6 mr-2'/>
         Give Feedback
       </span>
       <select className="p-2 text-sm border  flex items-center mr-2" >
             <option value="option1">Reminder List </option>
             <option value="option2">Option 2</option>
         </select>
      
       <button
         className="p-2 text-sm flex items-center justify-center"
         style={{
           borderRadius: 4,
           backgroundColor: colors.primary,
           color: colors.white,
           fontFamily: 'Roboto',
           width:'100px',
           textAlign:'center'
         }}
       >
         New  
       </button>
     </div>
   </div>
   <div className='flex items-center mt-4'>
     <Image src={arrowblue} alt='arr' className='h-3 w-2 mr-2'/>
      <span style={{fontFamily:'Roboto',color:'#0077C5'}}> All List</span>
   </div> 
   
 <div className='flex items-center mt-4'>
     <div className="flex items-center space-x-2">
       
         <div className="relative">
             
             <input
                 type="text"
                 placeholder="Filter by name  "
                 className="w-48 px-1 mr-2 py-2 text-sm border border-gray-300  focus:outline-none focus:ring focus:ring-orange-300"
                 style={{ fontFamily: 'Roboto' }}
             />
             <input
                 type="text"
                 placeholder="Filter "
                 className="w-48 px-1 py-2 text-sm border border-gray-300  focus:outline-none focus:ring focus:ring-orange-300"
                 style={{ fontFamily: 'Roboto' }}
             />
             
         </div>
         <p style={{fontFamily:'Roboto'}}>All</p>

     </div>
     
 </div>
 <div className="ml-auto flex items-center space-x-2">
         <Image src={print} alt='print' className='h-4 w-4'/>
        
         <Image src={setttings} alt='sett' className='h-4 w-4'/>
     </div>
   {/* Table Section */}
   <div className="mt-6">
   <table className="w-full border-collapse border border-gray-300">
     <thead>
         <tr>
            
             <th className="px-4 py-2 border border-gray-300 text-left text-sm " style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                
                 Template Name 
             </th>
             <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                  type
             </th>
             <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                 Txn type 
             </th>
             <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                 interval 
             </th>
             <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                 Previous date 
             </th>
             <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                 next date 
             </th>
             <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                 Customer/supplier  
             </th>
             <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                 amount 
                  
             </th>
             <th className="px-4 py-2 border border-gray-300 text-left text-sm" style={{ fontWeight: 'normal', textTransform: 'uppercase' }}>
                 actions 
             </th>
         </tr>
     </thead>
     <tbody>
     <tr>
        <td
          colSpan={9}
          className="px-8 py-6 text-sm text-center text-gray-600 mt-4"
        >
          <span
            className="text-l text-gray-700"
            style={{
              fontFamily: 'Roboto',
              marginBottom: 0,
            }}
          >
           There are no recurring transactions Matching the criteria  
           
          </span>
        </td>
      </tr>
        
     </tbody>
 </table>
 
 
   {/* Pagination Section */}
   {/* Pagination Section */}
 <div className="flex justify-end items-center mt-4">
   {/* Item Count */}
   <span className="text-xs mr-2 text-gray-600" style={{ fontFamily: 'Roboto' }}>
     0-0 of 0 items
   </span>
 
   {/* Pagination Controls */}
   <div className="flex items-center space-x-2">
     {/* Previous Arrow */}
    
      {/* Previous Arrow Button */}
       <Image src={arrowleft} alt='arrowleft' className='h-3 w-2' />
 
    
 
     {/* Current Page Number */}
     <div className="px-3 py-1 border border-gray-300 rounded-md text-xs text-center">
       1
     </div>
 
     {/* Next Arrow */}
     
 <Image src={arrowRight} alt='arrowright'  className='h-3 w-2'/>   
   </div>
 </div>
 
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
