import React, { useState, useEffect, useRef } from 'react';
import help from '../../public/help.png';
import pointmenu from '../../public/pointmenu.png';
import notif from '../../public/notif.png';
import logout from '../../public/logout.png';
import search from '../../public/search.png';
import logo from '../../public/logo.png';
import close from '../../public/Close.png';
import iconNotif from '../../public/iconNotif.png';
import close2 from '../../public/whiteClose.png';
import Image from 'next/image';
import colors from '@/app/styles/Colors';
import { useRouter } from 'next/navigation';

const ProfileMenu = () => {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string>(''); // State to track active menu item
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false); // Track dropdown state
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false); // Track dropdown state
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false); // Track dropdown state
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false); // Track dropdown state
  const [activeTab,setActiveTab]=useState('');
  const handleItemClick = (item: string) => {
    setActiveItem(item); // Set the clicked item as active
    if(item==='Account'){
      router.push('/Account');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsDropdownOpen1(false);
        setIsDropdownOpen2(false);
        setIsDropdownOpen3(false);
        setIsDropdownOpen4(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center space-x-4 p-2" style={{ borderRadius: '8px', backgroundColor: colors.white }}>
      <Image
        src={logo}
        alt="profile"
        className="h-8 w-8"
        style={{ borderRadius: '8px' }} 
        onClick={() => setIsDropdownOpen1(!isDropdownOpen1)} 
      />
      <Image src={logout} alt="logout" className="h-4 w-auto" />
      <p style={{ color: colors.grey, fontFamily: 'Roboto', marginLeft: 4 }}>Logout</p>
      <Image src={search} alt="search" className="h-4 w-auto mr-2"         onClick={() => setIsDropdownOpen3(!isDropdownOpen3)} // Toggle dropdown state
 />
      <Image src={notif} alt="notif" className="h-4 w-auto mr-2"  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)} // Toggle dropdown state
      />
      <Image src={help} alt="help" className="h-4 w-auto mr-2"         onClick={() => setIsDropdownOpen4(!isDropdownOpen4)} // Toggle dropdown state
 />
      {/* Trigger Dropdown */}
      <Image
        src={pointmenu}
        alt="menu"
        className="h-2 w-auto mr-2 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown state
      />
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
            className="fixed top-[100px] right-8 bg-white shadow-md rounded-md z-50"
            style={{
              width: '650px',
              maxWidth: '90%', 
              
            }}
          >
            {/* Triangle Indicator */}
            <div className="absolute right-4 top-[-8px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>
            <ul className="text-sm text-gray-700 font-medium max-h-96 overflow-y-auto p-4">
            <div className="flex flex-col h-full">
              <div className="flex space-x-8 px-4 py-4 overflow-x-auto flex-grow">
              <ul className="space-y-2">
              <li className="px-4 py-2 font-bold text-gray-700"  > Your company </li>
              <li
                onClick={() => handleItemClick('Account')}
                style={{  backgroundColor: activeItem === 'Account' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'invoice' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Account and settings 
              </li>
              <li
                onClick={() => handleItemClick(' Receive Payment')}
                style={{  backgroundColor: activeItem === ' Receive Payment' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === ' Receive Payment' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Manage users
              </li>
              <li
                onClick={() => handleItemClick('Statement')}
                style={{  backgroundColor: activeItem === 'Statement' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Statement' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Custom from styles
              </li>
              <li
                onClick={() => handleItemClick('Estimate')}
                style={{  backgroundColor: activeItem === 'Estimate' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Estimate' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Chart of accounts 
              </li>
              <li
                onClick={() => handleItemClick('credit')}
                style={{  backgroundColor: activeItem === 'credit' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'credit' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Additional info
              </li>
            
             
             
              
             
              </ul>
              <ul className="space-y-2">
              <li className="px-4 py-2 font-bold text-gray-700"  > Lists </li>
              <li
                onClick={() => handleItemClick('Expense')}
                style={{  backgroundColor: activeItem === 'Expense' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Expense' ? ' text-black' : 'text-gray-700'
                }`}
              >
                All lists
              </li>
              <li
                onClick={() => handleItemClick('CHEQUE')}
                style={{  backgroundColor: activeItem === 'CHEQUE' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'CHEQUE' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Products and services
              </li>
              <li
                onClick={() => handleItemClick('BILL')}
                style={{  backgroundColor: activeItem === 'BILL' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'BILL' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Reccuring transactions
              </li>
              <li
                onClick={() => handleItemClick('bills')}
                style={{  backgroundColor: activeItem === 'bills' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'bills' ? ' text-black' : 'text-gray-700'
                }`}
              >
              Attachements
              </li>
              <li
                onClick={() => handleItemClick('Purchase')}
                style={{  backgroundColor: activeItem === 'Purchase' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Purchase' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Custom fields 
              </li>
              <li
                onClick={() => handleItemClick('SupCredit')}
                style={{  backgroundColor: activeItem === 'SupCredit' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'SupCredit' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Rules 
              </li>
             
              </ul>
              <ul>
              <li className="px-4 py-2 font-bold text-gray-700"  > Tools </li>
              <li
                onClick={() => handleItemClick('Single')}
                style={{  backgroundColor: activeItem === 'Single' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Single' ? ' text-black' : 'text-gray-700'
                }`}
              >
                import data
              </li>
              <li
                onClick={() => handleItemClick('timesheet')}
                style={{  backgroundColor: activeItem === 'timesheet' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'timesheet' ? ' text-black' : 'text-gray-700'
                }`}
              >
               export data 
              </li>
              <li
                onClick={() => handleItemClick('deposit')}
                style={{  backgroundColor: activeItem === 'deposit' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'deposit' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Reconcile
              </li>
              <li
                onClick={() => handleItemClick('Transfer')}
                style={{  backgroundColor: activeItem === 'Transfer' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Transfer' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Budgeting
              </li>
              <li
                onClick={() => handleItemClick('Journal')}
                style={{  backgroundColor: activeItem === 'Journal' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Journal' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Audit Log 
              </li>
              <li
                onClick={() => handleItemClick('paydown')}
                style={{  backgroundColor: activeItem === 'paydown' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'paydown' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Smart look 
              </li>

              </ul>
              <ul>
              <li className="px-4 py-2 font-bold text-gray-700"  > Profile </li>
              <li
                onClick={() => handleItemClick('deposit')}
                style={{  backgroundColor: activeItem === 'deposit' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'deposit' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Subscriptions and billing
              </li>
              <li
                onClick={() => handleItemClick('Transfer')}
                style={{  backgroundColor: activeItem === 'Transfer' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Transfer' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Feedback
              </li>
              <li
                onClick={() => handleItemClick('Journal')}
                style={{  backgroundColor: activeItem === 'Journal' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'Journal' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Privacy
              </li>
              <li
                onClick={() => handleItemClick('paydown')}
                style={{  backgroundColor: activeItem === 'paydown' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'paydown' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Smart look 
              </li>
              <li
                onClick={() => handleItemClick('paydown')}
                style={{  backgroundColor: activeItem === 'paydown' ? colors.yellow : 'transparent',
                }}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeItem === 'paydown' ? ' text-black' : 'text-gray-700'
                }`}
              >
                Switch company 
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
      onClick={() => setIsDropdownOpen(false)}
      className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md"
      style={{ color: colors.primary }}
    >
      Switch <span className='font-bold'> from Business view </span>to Accountant view
    </span>
    
  </div>
            
            </div>
            </ul>
          </div>
        </>
      )}
      {isDropdownOpen1 && (
  <>
    {/* Background Overlay */}
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
      onClick={() => setIsDropdownOpen1(false)}
    ></div>

    {/* Dropdown */}
    <div
      ref={dropdownRef}
      className="fixed top-[100px] right-8 bg-white shadow-md rounded-md z-50"
      style={{
        width: '350px', // Adjust width for the smaller profile menu
        maxWidth: '90%',
      }}
    >
      {/* Triangle Indicator */}
      <div className="absolute left-24 top-[-8px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

      {/* Dropdown Content */}
      <div className="flex flex-col items-center p-4">
        {/* Profile Picture and Details */}
       
        <div style={{  position: "relative", display: "inline-block" }}>
  {/* Rectangle Background */}
  <div
    style={{
      backgroundColor: colors.secondary, // Replace with your desired rectangle color
      width: "200px", // Adjust width
      height: "50px", // Adjust height
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1, // Ensure the rectangle is behind the image
      borderRadius: "8px", // Optional: Add rounded corners
    }}
  ></div>

  {/* Logo */}
  <Image
    src={logo} // Replace with the logo source
    alt="Profile Logo"
    className="rounded-full w-16 h-16 border-4 border-white shadow-md"
    style={{ position: "relative", zIndex: 2 }} // Ensure the logo is in front
  />
</div>

        <h2 className="text-gray-800 font-bold mt-2">Fadi Jawad</h2>
        <p className="text-gray-600 text-sm">jawad00anarchy@gmail.com</p>
        <button
          className="mt-4 px-6 py-2   rounded-md text-lg font-medium "
          style={{ fontFamily: 'Roboto' ,color:colors.primary}}
        >
          Manage your Billswift Account
        </button>
      </div>
    </div>
  </>
)}
{isDropdownOpen2 && (
  <>
    {/* Background Overlay */}
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
      onClick={() => setIsDropdownOpen1(false)}
    ></div>

    {/* Dropdown */}
    <div
      ref={dropdownRef}
      className="fixed top-[100px] right-8 bg-white shadow-md rounded-md z-50"
      style={{
        width: '350px',
        maxWidth: '90%',
      }}
    >
      {/* Triangle Indicator */}
      <div className="absolute right-20 top-[-8px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>
      
      {/* Header Section */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <Image 
          src={close} 
          alt="Close" 
          className="h-8 w-8 cursor-pointer"
          onClick={() => setIsDropdownOpen2(false)} 
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center py-6">
        <Image 
          src={iconNotif} 
          alt="Notification Icon" 
          className="h-24 w-24 mb-2"
        />
        <p className="text-gray-500 text-sm">Nothing to see here</p>
      </div>
    </div>
  </>
)}
{isDropdownOpen3 && (
  <>
    {/* Background Overlay */}
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
      onClick={() => setIsDropdownOpen3(false)}
    ></div>

    {/* Dropdown */}
    <div
      ref={dropdownRef}
      className="fixed top-[100px] right-8 bg-white shadow-md rounded-md z-50 p-4"
      style={{
        width: '650px',
        
      }}
    >
      {/* Triangle Indicator */}
      <div className="absolute right-28 top-[-8px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
        />

        {/* Close Icon */}
        <Image
          src={close} // Replace with the actual path to your image
          alt="Close"
          className="w-8 h-8 ml-3 cursor-pointer"
          onClick={() => setIsDropdownOpen3(false)}
        />
      </div>

      {/* Content Section */}
      <div className="flex">
        {/* Left Column: Search Tips Title */}
        <div className="w-1/3 pr-2">
          <h3 className="text-sm  text-gray-700">SEARCH TIPS</h3>
        </div>

        {/* Right Column: Tips */}
        <div className="w-2/3 pl-2">
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 mr-2 text-blue-500">💡</span>
              <span>
                Search for <span className="font-bold">customers, suppliers, transactions, reports, or accounts.</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 mr-2 text-blue-500">💡</span>
              <span>
                Search by <span className="font-bold">name, address, amount (340.0 p.a.), date (MM/DD/YYYY)</span> and more.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 mr-2 text-blue-500">💡</span>
              <span>
                Type <span className="font-bold">create</span> to add a new invoice, expense, or any other kind of transaction.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Link */}
      <a
        href="#"
        className="text-sm text-orange-500 font-bold block mt-4"
      >
        Go to transactions search
      </a>
    </div>
  </>
)}
{isDropdownOpen4 && (
  <>
    {/* Background Overlay */}
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
      onClick={() => setIsDropdownOpen4(false)}
    ></div>

    {/* Dropdown */}
    <div
      ref={dropdownRef}
      className="fixed top-[100px] right-8 bg-white shadow-md rounded-md z-50"
      style={{
        width: "650px",
      }}
    >
      {/* Triangle Indicator */}
      <div className="absolute right-28 top-[-8px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

      {/* Header with Close Icon */}
      <div className="flex justify-between items-center" style={{ backgroundColor: colors.primary, padding: "10px" }}>
        <div></div> {/* Spacer for alignment */}
        <button onClick={() => setIsDropdownOpen4(false)}>
          <Image src={close2} alt="Close" className="h-4 w-4" />
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b">
        <button
          className={`flex-1 text-center py-2 ${activeTab === 'search' ? 'border-b-2 border-orange-500 ' : ''}`}
          onClick={() => setActiveTab('search')}
        >
          Search
        </button>
        <button
          className={`flex-1 text-center py-2 ${activeTab === 'assistance' ? 'border-b-2 border-orange-500 ' : ''}`}
          onClick={() => setActiveTab('assistance')}
        >
          Assistance
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
      {activeTab === 'search' && (
  <div>
    {/* Search Tab Content */}
    <input
      type="text"
      className="w-full p-2 border rounded-md mb-4"
      placeholder="Search questions, keywords, or topics"
    />
    <p className="font-medium mb-2">People like you viewed these answers</p>
    <div className=" pt-4">
      <a
        href="#"
        className="text-orange-500  text-sm block hover:underline"
        style={{ color: colors.primary }}
      >
        Find missing payments you want to deposit in the Bank Deposit window in Billswift Online
      </a>
      <div className='flex items-center'>
      <p className="  text-gray-600 text-sm ">
        by Billswift .
      </p>
      <p className="text-gray-500 text-xs ml-2">Updated 1 minute ago</p>
        </div>
      
    </div>
    <div className=" pt-4">
      <a
        href="#"
        className="text-orange-500  text-sm block hover:underline"
        style={{ color: colors.primary }}
      >
        Find missing payments you want to deposit in the Bank Deposit window in Billswift Online
      </a>
      <div className='flex items-center'>
      <p className="  text-gray-600 text-sm ">
        by Billswift .
      </p>
      <p className="text-gray-500 text-xs ml-2">Updated 1 minute ago</p>
        </div>
      
    </div> <div className=" pt-4">
      <a
        href="#"
        className="text-orange-500  text-sm block hover:underline"
        style={{ color: colors.primary }}
      >
        Find missing payments you want to deposit in the Bank Deposit window in Billswift Online
      </a>
      <div className='flex items-center'>
      <p className="  text-gray-600 text-sm ">
        by Billswift .
      </p>
      <p className="text-gray-500 text-xs ml-2">Updated 1 minute ago</p>
        </div>
      
    </div> <div className=" pt-4">
      <a
        href="#"
        className="text-orange-500  text-sm block hover:underline"
        style={{ color: colors.primary }}
      >
        Find missing payments you want to deposit in the Bank Deposit window in Billswift Online
      </a>
      <div className='flex items-center'>
      <p className="  text-gray-600 text-sm ">
        by Billswift .
      </p>
      <p className="text-gray-500 text-xs ml-2">Updated 1 minute ago</p>
        </div>
      
    </div>
  </div>
)}

        {activeTab === 'assistance' && (
          <div>
            {/* Assistance Tab Content */}
            <p>Get help and assistance here!</p>
          </div>
        )}
      </div>
    </div>
  </>
)}






    </div>
  );
};

export default ProfileMenu;
