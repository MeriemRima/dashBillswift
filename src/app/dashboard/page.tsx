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

export default function Home() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' or 'cashFlow'
  const [isTextPrivate, setIsTextPrivate] = useState(false);

  const handlePrivacyChange = () => {
    setIsTextPrivate(!isTextPrivate);
  };

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
        <div className="border-b border-gray-300 mb-4">
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
              <div className="flex justify-end items-center mb-4">
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

              <div className="p-4 rounded-lg">
  {/* Main Grid Layout */}
  <div className="grid grid-cols-5 gap-4">
    {/* Left Section: Setup Card */}
    <div className="col-span-2">
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
  <div className="flex gap-4 mt-6">
    {/* Left Section: TaskCard (takes more space, 2/3 of the available width) */}
    <div className="flex-[2]">
      <TasksCard />
    </div>

    {/* Right Section: Two AccountCards (take equal width, 1/3 of the available width) */}
    <div className="flex-[1] flex gap-4">
      <div className="flex-1">
        <AccountCard />
      </div>
      <div className="flex-1">
        <AccountCard />
      </div>
    </div>
  </div>
  <div className="flex gap-4 mt-6">
  <div className="flex-[1] flex gap-4">
      <div className="flex-1">
        <TipCard />
      </div>
      <div className="flex-1">
        <AssistanCard />
      </div>
    {/* Left Section: TaskCard (takes more space, 2/3 of the available width) */}
    <div className="flex-[2]">
      <InvoicesCard />
    </div>

    {/* Right Section: Two AccountCards (take equal width, 1/3 of the available width) */}
  
    </div>
  </div>
</div>
            </div>
          ) : (
            // Cash Flow Tab Content
            <div>
              <h1 className=" mb-2">CASH FLOW TREND</h1>
              <div className='flex justify-between items-center'>
              <p className='font-bold text-lg mb-4'>0.د.م.00</p>
              <p className='text-xs'>Last updated : Never </p>

              </div>
              <div className="w-[70%] bg-white p-4 rounded shadow">
  {/* Main Flex Container for Horizontal Alignment */}
  <div className="flex justify-between items-center mb-4">
    {/* First Section: Money In */}
    <div className="flex items-center w-1/2">
      <Image src={moneyIn} alt="moneyIn" className="h-8 w-8 mr-2" />
      <div>
        <p className="text-sm font-semibold">Money In</p>
        <p className="text-xs text-gray-500">this month</p>
      </div>
    </div>

    {/* Right Section: Money In Amount */}
    <p className="text-lg font-bold">0.د.م.00</p>
  </div>

  {/* Horizontal Flex Container for Overdue Invoices and Similar Content */}
  <div className="flex gap-6">
    {/* First Card: Overdue Invoices */}
    <div className="flex-1">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-2">
        {/* Left Section */}
        <div className="flex items-center">
          <p className="text-sm font-semibold mr-2">Overdue invoices</p>
          <p className="text-sm text-gray-500">(0)</p>
        </div>
        {/* Right Section */}
        <p className="text-lg font-bold">د.م.0</p>
      </div>

      {/* Bottom Section */}
      <div className="border-b border-gray-300 pt-2">
        <p className="text-sm text-primary cursor-pointer" style={{ color: colors.primary }}>
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
          <p className="text-sm font-semibold mr-2">open invoices</p>
          <p className="text-sm text-gray-500">(0)</p>
        </div>
        {/* Right Section */}
        <p className="text-lg font-bold">د.م.0</p>
      </div>

      {/* Bottom Section */}
      <div className="border-b border-gray-300 pt-2">
        <p className="text-sm text-primary cursor-pointer" style={{ color: colors.primary }}>
          New invoice
        </p>
      </div>
    </div>
  </div>
  <div className="mt-2 flex justify-end ">
    <button className="p-2 " style={{borderRadius:4,backgroundColor:colors.primary,color:colors.white}}>
      View Reports
    </button>
  </div>
 
</div>
<div className=" mt-4 w-[70%]  bg-white p-4 rounded shadow">
  {/* Main Flex Container for Horizontal Alignment */}
  <div className="flex justify-between items-center mb-4">
    {/* First Section: Money In */}
    <div className="flex items-center w-1/2">
      <Image src={moneyOut} alt="moneyIn" className="h-8 w-8 mr-2" />
      <div>
        <p className="text-sm font-semibold">Money Out</p>
        <p className="text-xs text-gray-500">this month</p>
      </div>
    </div>

    {/* Right Section: Money In Amount */}
    <p className="text-lg font-bold">0.د.م.00</p>
  </div>

  {/* Horizontal Flex Container for Overdue Invoices and Similar Content */}
  <div className="flex gap-6">
    {/* First Card: Overdue Invoices */}
    <div className="flex-1">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-2">
        {/* Left Section */}
        <div className="flex items-center">
          <p className="text-sm font-semibold mr-2">Overdue bills</p>
          <p className="text-sm text-gray-500">(0)</p>
        </div>
        {/* Right Section */}
        <p className="text-lg font-bold">د.م.0</p>
      </div>

      {/* Bottom Section */}
      <div className="border-b border-gray-300 pt-2">
        <p className="text-sm text-primary cursor-pointer" style={{ color: colors.primary }}>
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
          <p className="text-sm font-semibold mr-2">open bills</p>
          <p className="text-sm text-gray-500">(0)</p>
        </div>
        {/* Right Section */}
        <p className="text-lg font-bold">د.م.0</p>
      </div>

      {/* Bottom Section */}
      <div className="border-b border-gray-300 pt-2">
        <p className="text-sm text-primary cursor-pointer" style={{ color: colors.primary }}>
          New Bill
        </p>
      </div>
    </div>
  </div>
  <div className="mt-2 flex justify-end ">
    <button className="p-2 " style={{borderRadius:4,backgroundColor:colors.primary,color:colors.white}}>
      View Reports
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
