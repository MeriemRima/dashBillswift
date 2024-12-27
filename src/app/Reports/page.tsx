'use client';
import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '@/components/Header';
import colors from '../styles/Colors';
import Image from 'next/image';
import close from '../../../public/Close.png';
import arrowleft from '../../../public/arrowLeft.png';
import arrowRight from '../../../public/arrowRight.png';
import { FaChevronDown,FaChevronUp,FaStar } from 'react-icons/fa';
import { FiMoreVertical,FiStar } from 'react-icons/fi';
export default function Report() {
  const [activeTab, setActiveTab] = useState('Standard');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    'Accounts receivable ageing summary': true,
    'Balance Sheet': false,
    'Profit and Loss': false,
    'Audit Log': true,
  });
    // Sample data for the table
    const reportsData = [
      { name: "Company Overview", createdBy: "Billswift", lastModified: "-", reportPeriod: "This year", action: "Preview" },
      { name: "Sales Performance", createdBy: "Billswift", lastModified: "-", reportPeriod: "This year", action: "Preview" },
      { name: "Expenses Performance", createdBy: "Billswift", lastModified: "-", reportPeriod: "This year", action: "Preview" },
    ];
  
  const toggleFavorite = (item: string) => {
    setFavorites((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };
  

 
 
  const sections = [
    { title: 'Favourites', items: ['Accounts receivable ageing summary', 'Balance Sheet', 'Profit and Loss'] },
    { title: 'Business overview', items: ['Audit Log', 'Profit and Loss by Customer','Profit and Loss by Customer','Profit and Loss by Customer','Profit and Loss by Customer','Profit and Loss by Customer'] },
    { title: 'Who owes you', items: ['Audit Log', 'Profit and Loss by Customer'] },
    { title: 'Sales and Customers', items: ['Audit Log', 'Profit and Loss by Customer'] },
    { title: 'Expenses and Suppliers', items: ['Audit Log', 'Profit and Loss by Customer'] },
    { title: 'Employees', items: ['Audit Log', 'Profit and Loss by Customer'] },
    { title: 'For my Accountant', items: ['Audit Log', 'Profit and Loss by Customer'] },
    { title: 'Payroll', items: ['Audit Log', 'Profit and Loss by Customer'] },
  ]as const; // Ensure it's treated as readonly

type SectionTitle = typeof sections[number]['title'];

const [expandedSection, setExpandedSection] = React.useState<SectionTitle | null>(null);

const toggleSection = (section: SectionTitle) => {
  setExpandedSection(expandedSection === section ? null : section);
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
        <h1 style={{ fontFamily: 'Roboto', margin: 16, fontSize: 24 }}>Reports</h1>

        <div className="p-4 rounded-lg">
          <div className="flex flex-col w-full p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <div
              className="flex items-start justify-between space-x-4 mt-4 p-4"
              style={{ backgroundColor: '#F7F7F7' }}
            >
              <div className="flex flex-col space-y-2">
                <span className="text-sm" style={{ fontFamily: 'Roboto' }}>
                  How to use the Reports center
                </span>
                <span className="text-sm" style={{ fontFamily: 'Roboto' }}>
                  The Reports Center helps you gain rich insights into your business&apos; performance
                </span>
                <span
                  className="text-sm"
                  style={{ fontFamily: 'Roboto', color: colors.primary }}
                >
                  Watch video | View article
                </span>
              </div>
              <Image src={close} alt="close" className="h-6 w-6" />
            </div>
            <div className="flex justify-end items-center mt-4">
              <div className="flex items-center space-x-2">
                <select className="border py-2 px-16 text-sm">
                  <option value="option1">Find report by name</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full  bg-white ">
            {/* Tabs */}
            <div className="border-b border-gray-300 mb-4  mx-2">
              <div className="flex">
                <div
                  onClick={() => setActiveTab('Standard')}
                  className={`cursor-pointer mr-4 py-2 text-gray-600 ${
                    activeTab === 'Standard' ? 'text-primary' : ''
                  }`}
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: activeTab==='Standard'? 'bold':'normal',
                    borderBottom: activeTab === 'Standard' ? `2px solid ${colors.primary}` : 'none',
                  }}
                >
                  Standard
                </div>
                <div
                  onClick={() => setActiveTab('Custom')}
                  className={`cursor-pointer mr-4 py-2 text-gray-600 ${
                    activeTab === 'Custom' ? 'text-primary' : ''
                  }`}
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: activeTab==='Custom'? 'bold':'normal',
                    borderBottom: activeTab === 'Custom' ? `2px solid ${colors.primary}` : 'none',
                  }}
                >
                  Custom reports
                </div>
                <div
                  onClick={() => setActiveTab('reports')}
                  className={`cursor-pointer mr-4 py-2 text-gray-600 ${
                    activeTab === 'reports' ? 'text-primary' : ''
                  }`}
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: activeTab==='reports'? 'bold':'normal',
                    borderBottom: activeTab === 'reports' ? `2px solid ${colors.primary}` : 'none',
                  }}
                >
                  Management reports
                </div>
              </div>
            </div>

            {/* Standard Tab Content */}
            {activeTab === 'Standard' ? (
  <div 
    className="space-y-2 overflow-y-auto" 
    style={{ maxHeight: '300px', overflowY: 'auto' }}
  >
    {sections.map((section) => (
      <div key={section.title} className="border border-gray-300 rounded-lg">
        {/* Section Header */}
        <div
          onClick={() => toggleSection(section.title)}
          className="flex items-center p-4 cursor-pointer"
        >
          <span>{expandedSection === section.title ? <FaChevronUp /> : <FaChevronDown />}</span>
          <span
            style={{ fontFamily: 'Roboto', fontSize: 24 }}
            className="ml-4"
          >
            {section.title}
          </span>
        </div>

        {/* Section Items */}
        {/* Section Items */}
{expandedSection === section.title && (
  <div 
    className="grid grid-cols-2 gap-4 w-full p-4 overflow-y-auto" 
    style={{ maxHeight: '300px' }}
  >
    {section.items.map((item) => (
      <div
        key={item}
        className="flex justify-between items-center p-2 hover:bg-gray-50 border border-gray-200 rounded"
      >
        <span style={{ fontFamily: 'Roboto', fontSize: 14 }}>{item}</span>
        <div className="flex items-center space-x-4">
          {/* Star Icon */}
          <div onClick={() => toggleFavorite(item)} className="cursor-pointer">
            {favorites[item] ? (
              <FaStar className="text-orange-500" />
            ) : (
              <FiStar className="text-gray-400" />
            )}
          </div>
          {/* More Options */}
          <FiMoreVertical className="text-gray-600 cursor-pointer" />
        </div>
      </div>
    ))}
  </div>
)}

      </div>
    ))}
  </div>
):activeTab==='Custom'?(
<div className="mt-6">
  <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr>
       
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal' }}
        >
          Report name
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal'}}
        >
          Created by
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal'}}
        >
          Date range 
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal' }}
        >
          Action
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
            <span className="text-sm">
            Reports that you customise and then save will be listed here. Click &apos;Save Customisations&apos; at the top of the report.
              
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
):activeTab==='reports'?(
<div>
      {/* Button to create management report */}
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <button className='text-sm'
        style={{ backgroundColor: colors.primary, color: "white", border: "none", padding: 8, borderRadius: "5px", cursor: "pointer" }}>
          Create management report
        </button>
      </div>

      {/* Table for displaying reports */}
      <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr>
       
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal' ,textTransform:'uppercase'}}
        >
          Name 
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal',textTransform:'uppercase'}}
        >
          Created by
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal',textTransform:'uppercase'}}
        >
          Last modified
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal',textTransform:'uppercase'}}
        >
          report period
        </th>
        <th
          className="px-4 py-2 border border-gray-300 text-left text-sm"
          style={{ fontWeight: 'normal' ,textTransform:'uppercase'}}
        >
          Action
        </th>
       
       
        
      </tr>
    </thead>
    <tbody>
          {reportsData.map((report, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td className="px-8 py-4 border border-gray-300 text-left text-sm" style={{ padding: "10px"}}>{report.name} 
                <span className='text-xs' style={{marginLeft:10, backgroundColor: colors.primary, color: "white", border: "none", padding: 4, borderRadius: "5px", cursor: "pointer" }}>billswift</span>
              </td>
              <td className="px-8 py-4 border border-gray-300 text-left text-sm" style={{ padding: "10px"}}>
                {report.createdBy}
              </td>
              <td className="px-8 py-4 border border-gray-300 text-left text-sm" style={{ padding: "10px" }}>{report.lastModified}</td>
              <td className="px-8 py-4 border border-gray-300 text-left text-sm" style={{ padding: "10px" }}>
                <select style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ddd" }} defaultValue={report.reportPeriod}>
                  <option>This year</option>
                  <option>Last year</option>
                  <option>Custom</option>
                </select>
              </td>
              <td
  className="px-8 py-4 border border-gray-300 text-left text-sm"
  style={{
    padding: "10px",
    color: "orange",
    cursor: "pointer",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center", // Aligns items vertically within the flex container
      gap: "5px", // Adds horizontal spacing between elements
    }}
  >
    {report.action}
    <span style={{ color: "grey", display: "flex", alignItems: "center" }}>
      | <FaChevronDown className='ml-4' />
    </span>
  </div>
</td>

            </tr>
          ))}
        </tbody>
  </table>

    </div>
):<></>
}

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
