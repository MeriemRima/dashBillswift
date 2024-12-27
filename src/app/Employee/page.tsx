'use client';
import React,{useState} from 'react';
import Sidebar from '../../components/sidebar';
import Header from '@/components/Header';
import colors from '../styles/Colors';
import dynamic from 'next/dynamic';

 import animEmply from '../../../public/json/add an employee3.json';
// import arrowboth from '../../../public/arrowBoth.png';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


export default function Employe() {
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
      <h1 style={{fontFamily:'Roboto' ,margin:16,fontSize:24}}>Employees</h1>
        <div className="w-[95%] mx-4 h-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col items-center justify-start ">
            {/* Animation at the top */}
            <div className="w-full flex justify-center mb-4">
              <Lottie animationData={animEmply} className="w-96 h-96" />
            </div>
          
            {/* Title */}
            <h1 className="text-center text-gray-800 text-lg font-semibold mb-4" style={{fontFamily:'Roboto'}}>
            Keep your employee contact and hiring details in
            Billswift 
            </h1> 
            <p className='text-sm text-gray-700 mb-4'>start now by adding your first employee .</p>
          
            {/* Button */}
            <button
              style={{ backgroundColor: colors.primary, borderRadius: 4,fontFamily:'Roboto' }}
              className="text-white text-sm font-medium py-2 px-4 mb-6"
            >
              Add an employee
            </button>
          
           
          </div>
          

        
        </div>
        
    </div>
  );
}
