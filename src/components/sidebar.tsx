/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import bookmarks from '../../public/bookmarks.png';
import menu from '../../public/Menu.png';
import colors from '@/app/styles/Colors';
import settings from '../../public/Settings.png';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const router = useRouter();

  const [activeItem, setActiveItem] = useState<string>(''); // State to track active menu item
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  
  // Function to toggle dropdown state
  const toggleDropdown2 = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsExpanded((prev) => !prev);
  };
  const handleItemClick = (item: string) => {
    setActiveItem(item); // Set the clicked item as active
    
    // Ensure the router is ready before navigating
    
      if (item === 'invoice') {
        router.push('/invoice');
      }
      if (item === 'messages') {
        router.push('/messages');
      }
      if(item==='dashboard'){
        router.push('/dashboard')
      }
      if(item==='transactions'){
        router.push('/bankTransaction')
      }
      if(item==='sales'){
        router.push('/sales')
      }
      if(item==='expenses'){
        router.push('/expenses')
      }
      if(item==='customer'){
        router.push('/Custm&Leads')
      }
      if(item==='employe'){
        router.push('/Employee')
      }
      if(item==='tax'){
        router.push('/Taxes')
      }
      if(item==='apps'){
        router.push('/Apps')
      }
      if(item==='report'){
        router.push('/Reports')
      }
      if(item==='account'){
        router.push('/Account')
      }
    
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  return (
    <div className="flex overflow-x: visible !important">
      {/* Sidebar */}
        {/* Sidebar */}
        <div className={`bg-white-800 text-black fixed h-screen w-72 overflow-y-auto transition-all duration-300 z-10  sidebar`}>
        {/* Sidebar content */}
        <div className="flex flex-col items-start p-8">
          {/* Logo and Title in a horizontal line */}
          <div className="flex items-center mb-12 mt-8">
            <Image src={logo} alt="logo" className="h-8 w-auto" />
            <h2 className="text-xl font-bold ml-2" style={{  fontFamily:'Roboto'}}>Billswift</h2>
          </div>
          {/* New Button */}
          <div className="relative">
  {/* Button */}
  <button
    onClick={() => setIsDropdownOpen((prev) => !prev)}
    style={{  fontFamily:'Roboto'}}
    className="bg-gradient-to-r from-[#E42E45] to-[#EC9350] text-white font-bold py-1 px-12 rounded-2xl mb-4"
  >
    + New
  </button>

  {isDropdownOpen && (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
        onClick={() => setIsDropdownOpen(false)}
      ></div>

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        // className="absolute left-0 mt-2 bg-white shadow-md rounded-md z-50"
        // style={{
        //   width: isExpanded ? '600px' : '250px',
        // }}
        className="fixed top-[180px] left-1/4 transform -translate-x-1/2 bg-white shadow-md rounded-md z-50"
        style={{
          width: isExpanded ? '650px' : '200px',
          maxWidth: '90%', // Ensure it fits within the viewport
          left: isExpanded ? '30%' : 'calc(25% - 100px)', // Adjust position for non-expanded state

        }}
      >
        {/* Triangle Indicator */}
        <div className="absolute left-8 top-[-8px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

        <ul className="text-sm text-gray-700 font-medium max-h-96 overflow-y-auto p-4">
          {!isExpanded ? (
            <>
              <li
    className="px-4 py-2 font-bold text-gray-700"  // Add styling to make it a title
  >
    Customers
  </li>
              <li 
                onClick={() => handleItemClick('invoice')}
                style={{  backgroundColor: activeItem === 'invoice' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'invoice' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Invoice
              </li>
              <li
                onClick={() => handleItemClick('Estimate')}
                style={{  backgroundColor: activeItem === 'Estimate' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Estimate' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Estimate
              </li>
              <li
                onClick={() => handleItemClick('Expense')}
                style={{  backgroundColor: activeItem === 'Expense' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Expense' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Expense
              </li>
              <li
                onClick={() => handleItemClick('Cheque')}
                style={{  backgroundColor: activeItem === 'Cheque' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Cheque' ? 'bg-yellow-300 text-black' : 'text-gray-700'
                }`}
              >
                Cheque
              </li>
              <li
  onClick={() => setIsExpanded(true)}
  className="mt-8 ml-16 px-2 py-2 text-center  hover:bg-gray-200 cursor-pointer border  rounded-md"
  style={{ width: 100 ,color:colors.primary,borderColor:colors.primary }}  // Ensures it fits the content width
>
  Show more
</li>

            </>
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex space-x-8 px-4 py-4 overflow-x-auto flex-grow">
              <ul className="space-y-2">
              <li className="px-4 py-2 font-bold text-gray-700"  > Customers </li>
              <li
                onClick={() => handleItemClick('invoice')}
                style={{  backgroundColor: activeItem === 'invoice' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'invoice' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Invoice
              </li>
              <li
                onClick={() => handleItemClick(' Receive Payment')}
                style={{  backgroundColor: activeItem === ' Receive Payment' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === ' Receive Payment' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Receive Payment
              </li>
              <li
                onClick={() => handleItemClick('Statement')}
                style={{  backgroundColor: activeItem === 'Statement' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Statement' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Statement
              </li>
              <li
                onClick={() => handleItemClick('Estimate')}
                style={{  backgroundColor: activeItem === 'Estimate' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Estimate' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Estimate
              </li>
              <li
                onClick={() => handleItemClick('credit')}
                style={{  backgroundColor: activeItem === 'credit' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'credit' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Credit note
              </li>
              <li
                onClick={() => handleItemClick('Sales')}
                style={{  backgroundColor: activeItem === 'Sales' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Sales' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Sales receipt
              </li>
              <li
                onClick={() => handleItemClick('Refund')}
                style={{  backgroundColor: activeItem === 'Refund' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Refund' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Refund receipt
              </li>
              <li
                onClick={() => handleItemClick('Delayed')}
                style={{  backgroundColor: activeItem === 'Delayed' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Delayed' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Delayed Credit
              </li>
              <li
                onClick={() => handleItemClick('Charge')}
                style={{  backgroundColor: activeItem === 'Charge' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Charge' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Delayed Charge
              </li>
              <li
                onClick={() => handleItemClick('ADD')}
                style={{  backgroundColor: activeItem === 'ADD' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'ADD' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Add Customer
              </li>
              </ul>
              <ul className="space-y-2">
              <li className="px-4 py-2 font-bold text-gray-700"  > Suppliers </li>
              <li
                onClick={() => handleItemClick('Expense')}
                style={{  backgroundColor: activeItem === 'Expense' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Expense' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Expense
              </li>
              <li
                onClick={() => handleItemClick('CHEQUE')}
                style={{  backgroundColor: activeItem === 'CHEQUE' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'CHEQUE' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Cheque
              </li>
              <li
                onClick={() => handleItemClick('BILL')}
                style={{  backgroundColor: activeItem === 'BILL' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'BILL' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Bill
              </li>
              <li
                onClick={() => handleItemClick('bills')}
                style={{  backgroundColor: activeItem === 'bills' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'bills' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Pay bills
              </li>
              <li
                onClick={() => handleItemClick('Purchase')}
                style={{  backgroundColor: activeItem === 'Purchase' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Purchase' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Purchase order
              </li>
              <li
                onClick={() => handleItemClick('SupCredit')}
                style={{  backgroundColor: activeItem === 'SupCredit' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'SupCredit' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Supplier Credit 
              </li>
              <li
                onClick={() => handleItemClick('add')}
                style={{  backgroundColor: activeItem === 'add' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'add' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Add Supplier 
              </li>
              </ul>
              <ul>
              <li className="px-4 py-2 font-bold text-gray-700"  > Team </li>
              <li
                onClick={() => handleItemClick('Single')}
                style={{  backgroundColor: activeItem === 'Single' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Single' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Single time activity
              </li>
              <li
                onClick={() => handleItemClick('timesheet')}
                style={{  backgroundColor: activeItem === 'timesheet' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'timesheet' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Weekly timesheet
              </li>

              </ul>
              <ul>
              <li className="px-4 py-2 font-bold text-gray-700"  > Other </li>
              <li
                onClick={() => handleItemClick('deposit')}
                style={{  backgroundColor: activeItem === 'deposit' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'deposit' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Bank deposit
              </li>
              <li
                onClick={() => handleItemClick('Transfer')}
                style={{  backgroundColor: activeItem === 'Transfer' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Transfer' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Transfer
              </li>
              <li
                onClick={() => handleItemClick('Journal')}
                style={{  backgroundColor: activeItem === 'Journal' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Journal' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Journal entry
              </li>
              <li
                onClick={() => handleItemClick('paydown')}
                style={{  backgroundColor: activeItem === 'paydown' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'paydown' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Pay down credit card 
              </li>
              <li
                onClick={() => handleItemClick('paydown')}
                style={{  backgroundColor: activeItem === 'paydown' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'paydown' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Add Product/service
              </li>
             

              </ul>
              </div>
              <div className="flex justify-between mt-auto px-4 py-2 text-gray-700">
              <span
     // onClick={() => openVideoTutorial()} // You can replace with your actual function to open the tutorial
      className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md"
      style={{ color: colors.primary }}
    >
      Video Tutorial
    </span>
    <span
      onClick={() => setIsExpanded(false)}
      className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md"
      style={{ color: colors.primary }}
    >
      Show Less
    </span>
    
  </div>
            
            </div>
          )}
        </ul>
      </div>
    </>
  )}
</div>




          {/* Sidebar Links */}
          <div className="flex flex-col items-start w-full">
            {/* Bookmarks Section */}
            <div className="mt-4 w-full">
              <div className="flex items-center justify-start w-full">
                <Image src={bookmarks} alt="bookmark" className="h-5 w-auto mr-4" />
                <span className="text-black font-roboto mr-10">BOOKMARKS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 17.589">
                  <g id="Edit_Edit_Pencil_Line_01" data-name="Edit / Edit_Pencil_Line_01" transform="translate(-3 -3.412)">
                    <path
                      id="Vector"
                      d="M4,20H20M4,20V16l8-8M4,20H8l8-8M12,8l2.869-2.869,0,0a2.478,2.478,0,0,1,.821-.667,1,1,0,0,1,.618,0,2.476,2.476,0,0,1,.82.666l1.74,1.74a2.485,2.485,0,0,1,.668.822,1,1,0,0,1,0,.618,2.48,2.48,0,0,1-.667.821h0L16,12M12,8l4,4"
                      fill="none"
                      stroke="#272733"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <div className="mt-2 pl-8">
                <div className="flex items-center">
                  <a href="/bankTransaction" style={{fontSize:14}} className="text-gray-500 hover:text-gray-300">
                    Bank transaction
                  </a>
                </div>
                <div className="mt-2 flex items-center">
                  <svg className="h-4 w-4 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 4v16m8-8H4" />
                  </svg>
                  <a href="#"  style={{fontSize:14}} className="text-gray-500 hover:text-gray-300">
                    Add a bookmark
                  </a>
                </div>
              </div>
            </div>

            {/* Separator Line */}
            <div className="my-4 w-full border-t border-gray-300"></div>

            {/* Menu Section */}
            <div className="flex items-center justify-start w-full">
              <Image src={menu} alt="menu" className="h-4 w-auto mr-4" />
              <span className="text-[#E76936] font-roboto mr-24">Menu</span>
            </div>
            <div className="mt-2 pl-8">
              {/* Dashboards Item */}
              <div
  className={`mt-2  flex items-center justify-between w-full p-1  rounded-l-xl rounded-r-none transition-all duration-300`}
  style={{
    backgroundColor: activeItem === 'dashboard' ? colors.yellow : 'transparent',
    color: activeItem === 'dashboard' ? colors.primary : 'gray',
  }}
  onClick={() => handleItemClick('dashboard')}
>
  <a href="#" style={{fontSize:14}} >Dashboards</a>
  <svg className="h-4 w-4 text-gray-500 ml-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"     style={{ stroke: activeItem === 'dashboard' ? colors.primary : 'gray' }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</div>


              {/* Transactions Item */}
              <div
                onClick={() => handleItemClick('transactions')}
                className={`mt-2 flex items-center justify-between w-full p-1 rounded-l-xl rounded-r-none  transition-all duration-300`}
                style={{
                  backgroundColor: activeItem === 'transactions' ? colors.yellow : 'transparent',
                  color: activeItem === 'transactions' ? colors.primary : 'gray',
                }}
              >
                <a href="#" style={{fontSize:14}} >Transactions</a>
                <svg className="h-4 w-4 text-gray-500 ml-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"     style={{ stroke: activeItem === 'transactions' ? colors.primary : 'gray' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div
                onClick={() => handleItemClick('sales')}
                className={`mt-2 flex items-center justify-between w-full p-1 rounded-l-xl rounded-r-none  transition-all duration-300`}
                style={{
                  backgroundColor: activeItem === 'sales' ? colors.yellow : 'transparent',
                  color: activeItem === 'sales' ? colors.primary : 'gray',
                }}
              >
                <a href="#" style={{fontSize:14}}>Sales</a>
                <svg className="h-4 w-4 text-gray-500 ml-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"     style={{ stroke: activeItem === 'transactions' ? colors.primary : 'gray' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div
                onClick={() => handleItemClick('expenses')}
                className={`mt-2 flex items-center justify-between w-full p-1 rounded-l-xl rounded-r-none  transition-all duration-300`}
                style={{
                  backgroundColor: activeItem === 'expenses' ? colors.yellow : 'transparent',
                  color: activeItem === 'expenses' ? colors.primary : 'gray',
                }}
              >
                <a href="#" style={{fontSize:14}}>Expenses</a>
                <svg className="h-4 w-4 text-gray-500 ml-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"     style={{ stroke: activeItem === 'transactions' ? colors.primary : 'gray' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div
                onClick={() => handleItemClick('customer')}
                className={`mt-2 flex items-center justify-between w-full p-1 rounded-l-xl rounded-r-none  transition-all duration-300`}
                style={{
                  backgroundColor: activeItem === 'customer' ? colors.yellow : 'transparent',
                  color: activeItem === 'customer' ? colors.primary : 'gray',
                }}
              >
                <a href="#"  style={{fontSize:14}}>Customers & Leads </a>
                <svg className="h-4 w-4 text-gray-500 ml-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"     style={{ stroke: activeItem === 'transactions' ? colors.primary : 'gray' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div
                onClick={() => handleItemClick('report')}
                className={`mt-2 flex items-center justify-between w-full p-1 rounded-l-xl rounded-r-none  transition-all duration-300`}
                style={{
                  backgroundColor: activeItem === 'report' ? colors.yellow : 'transparent',
                  color: activeItem === 'report' ? colors.primary : 'gray',
                }}
              >
                <a href="#" style={{fontSize:14}} >Reports </a>
              
              </div>
              <div
                onClick={() => handleItemClick('employe')}
                className={`mt-2 flex items-center justify-between w-full p-1 rounded-l-xl rounded-r-none  transition-all duration-300`}
                style={{
                  backgroundColor: activeItem === 'employe' ? colors.yellow : 'transparent',
                  color: activeItem === 'employe' ? colors.primary : 'gray',
                }}
              >
                <a href="#" style={{fontSize:14}} >Employees </a>
               
              </div>
              <div
                onClick={() => handleItemClick('tax')}
                className={`mt-2 flex items-center justify-between w-full p-1 rounded-l-xl rounded-r-none  transition-all duration-300`}
                style={{
                  backgroundColor: activeItem === 'tax' ? colors.yellow : 'transparent',
                  color: activeItem === 'tax' ? colors.primary : 'gray',
                }}
              >
                <a href="#" style={{fontSize:14}} >Taxes </a>
               
              </div>
              <div
                onClick={() => handleItemClick('account')}
                className={`mt-2 flex items-center justify-between w-full p-1 rounded-l-xl rounded-r-none  transition-all duration-300`}
                style={{
                  backgroundColor: activeItem === 'account' ? colors.yellow : 'transparent',
                  color: activeItem === 'account' ? colors.primary : 'gray',
                }}
              >
                <a href="#" style={{fontSize:14}} >My Accountant </a>
               
              </div>
              <div
                onClick={() => handleItemClick('apps')}
                className={`mt-2 flex items-center justify-between w-full p-1 rounded-l-xl rounded-r-none  transition-all duration-300`}
                style={{
                  backgroundColor: activeItem === 'apps' ? colors.yellow : 'transparent',
                  color: activeItem === 'apps' ? colors.primary : 'gray',
                }}
              >
                <a href="#"  style={{fontSize:14}}>Apps  </a>
                <svg className="h-4 w-4 text-gray-500 ml-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"     style={{ stroke: activeItem === 'transactions' ? colors.primary : 'gray' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div
                onClick={() => handleItemClick('messages')}
                className={`mt-2 flex items-center justify-between w-full p-1 rounded-l-xl rounded-r-none  transition-all duration-300`}
                style={{
                  backgroundColor: activeItem === 'messages' ? colors.yellow : 'transparent',
                  color: activeItem === 'messages' ? colors.primary : 'gray',
                }}
              >
                <a href="#"  style={{fontSize:14}}>Messages  </a>
               
              </div>

            </div>
            <div className="my-4 w-full border-t border-gray-300"></div>
            <div className="flex items-center justify-start w-full">
                <Image src={settings} alt="settings" className="h-5 w-auto mr-4" />
                <span className="text-gray-600 font-roboto mr-10">Menu Settings</span>
                </div>
                <div>
                  <p className='text-sm mt-12'>© Billrswift.2024</p>
                  <p className='text-gray-500 text-xs mt-4'>service ffor making bills, invoices
                  and receipts quickly.</p>
                </div>

          </div>
        </div>
      </div>
      {/* Main content */}
    </div>
  );
};

export default Sidebar;
