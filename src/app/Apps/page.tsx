'use client';
import React, {  useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '@/components/Header';
import colors from '../styles/Colors';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import feedbackOrg from '../../../public/feedbackOrg.png';
import AppAnimt from '../../../public/json/Apps.json';
import appIcon from '../../../public/appIcon.png';
import CardApps from '@/components/CardApps';
// import arrowboth from '../../../public/arrowBoth.png';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


export default function Apps() {
  const [activeTab, setActiveTab] = useState('overview'); // 'home' or 'cashFlow'
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const incomeManagementItems = [
    {
      image: appIcon, // Replace with actual image URL
      title: "Reach Reporting",
      description: "Automated Financials, Budgets, Consolidation, Analytics...",
      rating: 5,
      reviews: 429,
    },
    {
      image: appIcon,
      title: "Live Plan",
      description: "Business planning, budgets, cash flow forecasts, financial...",
      rating: 4,
      reviews: 293,
    },
    {
      image:appIcon,
      title: "Cash Frog Flow",
      description: "Cash Flow like a pro - the most intuitive and powerful cash f...",
      rating: 5,
      reviews: 141,
    },
    {
      image: appIcon,
      title: "Airbnb & Vrbo Integration",
      description: "Accurately automate reservation accounting for...",
      rating: 5,
      reviews: 109,
    },
    {
      image: appIcon,
      title: "Airbnb & Vrbo Integration",
      description: "Accurately automate reservation accounting for...",
      rating: 5,
      reviews: 109,
    },{
      image: appIcon,
      title: "Airbnb & Vrbo Integration",
      description: "Accurately automate reservation accounting for...",
      rating: 5,
      reviews: 109,
    },{
      image: appIcon,
      title: "Airbnb & Vrbo Integration",
      description: "Accurately automate reservation accounting for...",
      rating: 5,
      reviews: 109,
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
        <Header   toggleSidebar={toggleSidebar}/>

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-4 mx-4">
          <div className="flex">
            <div
              onClick={() => setActiveTab('overview')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'overview' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='overview'? 'bold':'normal',
                borderBottom: activeTab === 'overview' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
             Overview
            </div>
            <div
              onClick={() => setActiveTab('find')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'find' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                fontWeight: activeTab==='find'? 'bold':'normal',
                borderBottom: activeTab === 'find' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Find apps
            </div>
           
          
          </div>
        </div>

         {/* Conditional Content */}
         <div className="p-4 rounded-lg">
          { activeTab==='find'? (
            <div> 
              <div className='flex justify-end'>
              <span className='text-sm flex ml-auto items-center mr-6'
         style={{
           fontFamily:'Roboto',
           color:colors.primary
         }}
       >
         <Image src={feedbackOrg} alt='fedbakc' className='h-6 w-6 mr-2'/>
         Give Feedback
                </span>

              </div>
              <div className="flex flex-col w-full mt-4 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
              {/* Header Section */}
              <div className="flex justify-between items-center">
                 <h4 className="font-semibold text-lg" style={{ fontFamily: 'Roboto' }}>
                 Save time and make your business more efficient by connecting apps to Billswift.
                 </h4>
                
               </div>
               
              

             <div className='flex items-center mt-4'>
                 <div className="flex items-center space-x-2">
                 <div className="relative">
                         <input
                             type="text"
                             placeholder="Search by Tools, apps, or your business needs"
                             className="w-72 px-1 mr-2 py-2 text-sm border border-gray-300 text-center focus:outline-none focus:ring focus:ring-orange-300"
                             style={{ fontFamily: 'Roboto' }}
                         />
                        
                         
                     </div>
                     <select className="border py-2 px-4 text-sm">
                         <option value="option1">Brose categories  </option>
                         <option value="option2">Option 2</option>
                         <option value="option3">Option 3</option>
                     </select>
                     <select className="border py-2 px-4 text-sm">
                         <option value="option1">Browse industries  </option>
                         <option value="option2">Option 2</option>
                         <option value="option3">Option 3</option>
                     </select>
                    
                 </div>
                
             </div>
            
             <div>
              <div className='flex justify-between mt-8'>
                <h4 style={{fontFamily:'Roboto'}}>Income management </h4>
                <p className='text-sm' style={{color:colors.primary,fontFamily:'Roboto'}}>View All</p>
              </div>
              <div
  className="flex flex-row space-x-4 p-4 overflow-x-auto"
  style={{ maxWidth: '900px', overflowX: 'auto' ,scrollbarWidth:'none'}}
> 
  {incomeManagementItems.map((item, index) => (
    <div key={index} className="flex-shrink-0" >
      <CardApps
        title={item.title}
        image={item.image}
        description={item.description}
        rating={item.rating}
        reviews={item.reviews}
      />
    </div>
  ))}
</div>



             </div>
             <div>
              <div className='flex justify-between mt-8'>
                <h4 style={{fontFamily:'Roboto'}}>Income management </h4>
                <p className='text-sm' style={{color:colors.primary,fontFamily:'Roboto'}}>View All</p>
              </div>
              <div
  className="flex flex-row p-4 space-x-4 overflow-x-auto "
  style={{ maxWidth: '900px',maxHeight:'500px', overflowX: 'auto' ,scrollbarWidth:'none'}}
> 
  {incomeManagementItems.map((item, index) => (
    <div key={index} className="flex-shrink-0" >
      <CardApps
        title={item.title}
        image={item.image}
        description={item.description}
        rating={item.rating}
        reviews={item.reviews}
      />
    </div>
  ))}
</div>



             </div>
             <div>
              <div className='flex justify-between mt-8'>
                <h4 style={{fontFamily:'Roboto'}}>Income management </h4>
                <p className='text-sm' style={{color:colors.primary,fontFamily:'Roboto'}}>View All</p>
              </div>
              <div
  className="flex flex-row p-4 space-x-4 overflow-x-auto "
  style={{ maxWidth: '900px',maxHeight:'500px', overflowX: 'auto' ,scrollbarWidth:'none'}}
> 
  {incomeManagementItems.map((item, index) => (
    <div key={index} className="flex-shrink-0" >
      <CardApps
        title={item.title}
        image={item.image}
        description={item.description}
        rating={item.rating}
        reviews={item.reviews}
      />
    </div>
  ))}
</div>



             </div>
             <div>
             <button
              style={{ backgroundColor: colors.primary, borderRadius: 4,fontFamily:'Roboto',width:"130px" }}
              className="text-white text-sm font-medium py-2 px-4 mb-6"
            >
              see more apps
            </button>
             </div>
             <div className='w-96'>
              <p className='text-xs' style={{fontFamily:'Roboto'}}>While we review each app in the QuickBooks App Store, we can&apos;t make guarantees as to how they&apos;ll work for your business. Please be sure to review carefully before connecting any apps to QuickBooks.  </p>
              </div>
             
             
             
             
               </div>

              
          

        



         </div>
          
            
          ): activeTab==='overview'?(
            <div className="w-[95%] h-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col items-center justify-start ">
            {/* Animation at the top */}
            <div className="w-full flex justify-center   ">
              <Lottie animationData={AppAnimt} className="w-80 h-80" />
            </div>
          
            {/* Title */}
            <h1 className="text-center text-gray-800 text-lg font-semibold mb-2" style={{fontFamily:'Roboto'}}>
            Save time and streamline your business
            </h1>
            <p className='text-sm text-gray-700 mb-4'>Connect your favourite business apps to see more and do more, all in one place.</p>
          
            {/* Button */}
            <button
              style={{ backgroundColor: colors.primary, borderRadius: 4,fontFamily:'Roboto',width:"130px" }}
              className="text-white text-sm font-medium py-2 px-4 mb-6"
            >
              Find apps
            </button>
          
            
          </div>
          
          
           
): 
          <div></div>
          }
        </div>
        
      </div>
    </div>
  );
}
