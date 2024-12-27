'use client';
import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '@/components/Header';
import colors from '../styles/Colors';
import Image from 'next/image';
import filter from '../../../public/filter.png';
import moneyIn from '../../../public/moneyIn.png';
import moneyOut from '../../../public/moneyOut.png';

// Import Cards
import SetupCard from '@/components/Cards/SetupCard';
import BankAccCard from '@/components/Cards/BankAccCard';
import ExpensesCard from '@/components/Cards/ExpensesCard';
import SalesCard from '@/components/Cards/SalesCard';
import ProfitLossCard from '@/components/Cards/ProfitLossCard';
import CashFlowCard from '@/components/Cards/CashFlowCard';
import ShortcatsCard from '@/components/Cards/ShortcatsCard';
import TasksCard from '@/components/Cards/TasksCard';
import AccountCard from '@/components/Cards/AccountsCard';
import TipCard from '@/components/Cards/TipCard';
import AssistanCard from '@/components/Cards/AssistanCard';
import InvoicesCard from '@/components/Cards/InvoicesCard';
import { FaChevronDown} from 'react-icons/fa';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' or 'cashFlow'
  const [isTextPrivate, setIsTextPrivate] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const handlePrivacyChange = () => {
    setIsTextPrivate(!isTextPrivate);
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
              onClick={() => setActiveTab('home')}
              className={`cursor-pointer mr-4 py-2 text-gray-600 ${activeTab === 'home' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                borderBottom: activeTab === 'home' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Home
            </div>
            <div
              onClick={() => setActiveTab('cashFlow')}
              className={`cursor-pointer py-2 text-gray-600 ${activeTab === 'cashFlow' ? 'text-primary' : ''}`}
              style={{
                fontFamily: 'Roboto',
                borderBottom: activeTab === 'cashFlow' ? `2px solid ${colors.primary}` : 'none',
              }}
            >
              Cash Flow
            </div>
          </div>
        </div>

        {/* Conditional Content */}
        <div className="p-4 rounded-lg">
          {activeTab === 'home' ? (
            // Home Tab Content
            <div>
              {/* Customise Layout Button and Privacy Switch */}
              <div className="flex justify-end items-center mb-4 mr-4">
                <button
                  className="py-1 px-4 bg-primary text-white rounded flex items-center"
                  style={{ backgroundColor: colors.primary }}
                >
                  <Image src={filter} alt="Filter Icon" className="mr-2 w-4 h-4" />
                  Customise Layout
                </button>
                <div className="flex ml-2 items-center">
                  <span className="mr-4 text-gray-600">Privacy</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isTextPrivate}
                      onChange={handlePrivacyChange}
                    />
                    <div className="w-9 h-4 bg-gray-500 rounded-full"></div>
                    <div
                      className={`w-2 h-2 bg-white rounded-full absolute top-1 left-1 transition-transform ${
                        isTextPrivate ? 'translate-x-5' : 'translate-x-0'
                      }`}
                      style={{ transition: 'transform 0.3s ease' }}
                    ></div>
                  </label>
                </div>
              </div>

              <div className=" rounded-lg">
  {/* Main Grid Layout */}
  <div className="grid grid-cols-6 gap-4">
    {/* Left Section: Setup Card */}
    <div className="col-span-3">
      <SetupCard />
    </div>

    {/* Right Section: Four Cards */}
    <div className="col-span-3 grid grid-cols-2 gap-4">
      <BankAccCard />
      <ProfitLossCard />
      <ExpensesCard />
      <SalesCard />
    </div>
  </div>

  {/* New Row for CashFlowCard and ShortcutCard */}
  <div className="grid grid-cols-2 gap-4 mt-6">
    <CashFlowCard />
    <ShortcatsCard />
  </div>

  {/* Horizontal Layout for TasksCard and two AccountCards */}
  <div className="grid grid-cols-6 gap-4 mt-6">
  {/* Left Section: TaskCard (takes more space, 2/3 of the available width) */}
  <div className="col-span-3">
    <TasksCard />
  </div>

  {/* Right Section: Two AccountCards (take equal width, 1/3 of the available width) */}
  <div className="col-span-3 grid grid-cols-2 gap-4">
    <div className="col-span-1">
      <AccountCard />
    </div>
    <div className="col-span-1">
      <AccountCard />
    </div>
  </div>
</div>
<div className="grid grid-cols-6 gap-4 mt-6">
  {/* Left Section: TaskCard (takes more space, 2/3 of the available width) */}
 

  {/* Right Section: Two AccountCards (take equal width, 1/3 of the available width) */}
  <div className="col-span-3 grid grid-cols-2 gap-4">
    <div className="col-span-1">
      <TipCard />
    </div>
    <div className="col-span-1">
      <AssistanCard />
    </div>
    
  </div>
  <div className="col-span-3">
    <InvoicesCard />
  </div>
</div>


</div>
            </div>
          ) : (
            // Cash Flow Tab Content
            <div>
              <h1 className=" mb-2 " style={{fontFamily:'Roboto'}}>CASH FLOW TREND</h1>
              <div className='flex justify-between items-center'>
              <p className='font-bold text-lg mb-4' style={{fontFamily:'Roboto'}}>0.د.م.00</p>
              <p className='text-xs' style={{fontFamily:'Roboto'}}>Last updated : Never </p>

              </div>
              <div className="w-[70%] bg-white p-4 rounded shadow">
  {/* Main Flex Container for Horizontal Alignment */}
  <div className="flex justify-between items-center mb-4">
    {/* First Section: Money In */}
    <div className="flex items-center w-1/2">
    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full mr-2">
    <Image src={moneyIn} alt="moneyIn" className="h-8 w-8 " />

            </div>
      <div className='flex items-center'>
        <p className="text-sm mr-2" style={{fontFamily:'Roboto'}}>Money In</p>
        <p className="text-xs text-gray-500" style={{fontFamily:'Roboto'}}>this month</p>
      </div>
    </div>

    {/* Right Section: Money In Amount */}
    <p className="text-lg font-bold" style={{fontFamily:'Roboto'}}>0.د.م.00</p>
  </div>

  {/* Horizontal Flex Container for Overdue Invoices and Similar Content */}
  <div className="flex gap-6">
    {/* First Card: Overdue Invoices */}
    <div className="flex-1">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-2">
        {/* Left Section */}
        <div className="flex items-center">
          <p className="text-sm  mr-2" style={{fontFamily:'Roboto'}}>Overdue invoices</p>
          <p className="text-sm text-gray-500" style={{fontFamily:'Roboto'}}>(0)</p>
        </div>
        {/* Right Section */}
        <p className="text-lg font-bold" style={{fontFamily:'Roboto'}}>د.م.0</p>
      </div>

      {/* Bottom Section */}
      <div className="border-b border-gray-300 pt-2">
        <p  className="text-xs text-primary cursor-pointer" style={{ color: colors.primary ,fontFamily:'Roboto' }}>
          View paid invoices
        </p>
      </div>
    </div>

    {/* Second Card: Duplicate or Similar Section */}
    <div className="flex-1">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-2">
        {/* Left Section */}
        <div className="flex items-center">
          <p className="text-sm  mr-2" style={{fontFamily:'Roboto'}}>open invoices</p>
          <p className="text-sm text-gray-500" style={{fontFamily:'Roboto'}}>(0)</p>
        </div>
        {/* Right Section */}
        <p className="text-lg font-bold" style={{fontFamily:'Roboto'}}>د.م.0</p>
      </div>

      {/* Bottom Section */}
      <div className="border-b border-gray-300 pt-2">
        <p className="text-xs text-primary cursor-pointer" style={{ color: colors.primary,fontFamily:'Roboto' }}>
          New invoice
        </p>
      </div>
    </div>
  </div>
  <div className="mt-2 flex justify-end ">
    <button className="p-2  text-sm flex items-center " style={{borderRadius:4,backgroundColor:colors.primary,color:colors.white ,fontFamily:'Roboto'}}>
      View Reports      <FaChevronDown color='white' style={{marginLeft:2}}/>
    </button>
  </div>
 
</div>
<div className=" mt-4 w-[70%]  bg-white p-4 rounded shadow">
  {/* Main Flex Container for Horizontal Alignment */}
  <div className="flex justify-between items-center mb-4">
    {/* First Section: Money In */}
    <div className="flex items-center w-1/2">
    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full mr-2">
      <Image src={moneyOut} alt="moneyIn" className="h-8 w-8 " />
      </div>
      <div className='flex items-center'>
        <p className="text-sm mr-2 " style={{fontFamily:'Roboto'}}>Money Out</p>
        <p className="text-xs text-gray-500" style={{fontFamily:'Roboto'}}>this month</p>
      </div>
    </div>

    {/* Right Section: Money In Amount */}
    <p className="text-lg font-bold" style={{fontFamily:'Roboto'}}>0.د.م.00</p>
  </div>

  {/* Horizontal Flex Container for Overdue Invoices and Similar Content */}
  <div className="flex gap-6">
    {/* First Card: Overdue Invoices */}
    <div className="flex-1">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-2">
        {/* Left Section */}
        <div className="flex items-center">
          <p className="text-sm  mr-2" style={{fontFamily:'Roboto'}}>Overdue bills</p>
          <p className="text-sm text-gray-500" style={{fontFamily:'Roboto'}}>(0)</p>
        </div>
        {/* Right Section */}
        <p className="text-lg font-bold" style={{fontFamily:'Roboto'}}>د.م.0</p>
      </div>

      {/* Bottom Section */}
      <div className="border-b border-gray-300 pt-2">
        <p className="text-xs text-primary cursor-pointer" style={{ color: colors.primary,fontFamily:'Roboto' }}>
          View paid bills
        </p>
      </div>
    </div>

    {/* Second Card: Duplicate or Similar Section */}
    <div className="flex-1">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-2">
        {/* Left Section */}
        <div className="flex items-center">
          <p className="text-sm  mr-2">open bills</p>
          <p className="text-sm text-gray-500">(0)</p>
        </div>
        {/* Right Section */}
        <p className="text-lg font-bold">د.م.0</p>
      </div>

      {/* Bottom Section */}
      <div className="border-b border-gray-300 pt-2">
        <p className="text-xs text-primary cursor-pointer" style={{ color: colors.primary }}>
          New Bill
        </p>
      </div>
    </div>
  </div>
  <div className="mt-2 flex justify-end ">
    <button className="p-2  text-sm flex items-center " style={{borderRadius:4,backgroundColor:colors.primary,color:colors.white ,fontFamily:'Roboto'}}>
      View Reports      <FaChevronDown color='white' style={{marginLeft:2}}/>

    </button>
  </div>
 
</div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
