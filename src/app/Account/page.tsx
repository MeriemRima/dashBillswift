'use client';
import { useState } from "react";

import IconAccount from '../../../public/IconAccount.png';
import Image from "next/image";
import help from '../../../public/grHelp.png';
import close from '../../../public/Close.png';
import colors from "../styles/Colors";
import logo from '../../../public/nexular.png';
import edit from '../../../public/editt.png';

export default function Account() {
  // Explicitly define the keys for selectedSection
  const [selectedSection, setSelectedSection] = useState<"company" | "sales" | "expenses" | "advanced">("company");
  const [activeSection, setActiveSection] = useState('');

  // Define the content for each section
  const content: { [key in typeof selectedSection]: JSX.Element } = {
    company: (
        <div className="w-full bg-white rounded-md">
        {/* Section: Company Details */}
        <div  className={` p-8 flex justify-between border-b pb-4 ${
          activeSection === "details" ? "bg-gray-100" : ""
        }`}
        onClick={() => setActiveSection("details")}
         >
          {/* Left: Title */}
          <div className="flex ">
          <h2 className="text-gray-800 w-32">Company name</h2>

             {/* Center: Company Details and Logo */}
          <div className="flex items-center ml-24 space-x-8">
            {/* Centered Logo and Text */}
            <div className="flex flex-col items-center">
              {/* Logo */}
              <div className="h-16 w-16 rounded-md flex items-center justify-center  mb-4">
                <Image src={logo} alt="Logo" className="h-16 w-16" />
              </div>
              {/* Details */}
              <div>
                <div className="flex">
                  <p className="text-sm mr-8">Company name</p>
                  <p className="text-sm font-medium">nexular</p>
                </div>
                <div className="flex mt-2">
                  <p className="text-sm mr-8">Legal name</p>
                  <p className="text-sm" style={{ color: colors.grey }}>Same as company name</p>
                </div>
                <div className="flex mt-2">
                  <p className="text-sm mr-4">VAT #</p>
                  <p className="text-sm">-</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      
         
      
          {/* Right: Edit Icon */}
          <div >
            <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
      
        {/* Section: Company Type */}
        
        <div  className={` p-8 flex justify-between border-b pb-4  ${
          activeSection === "type" ? "bg-gray-100" : ""
        }`}
        onClick={() => setActiveSection("type")}
         >
          {/* Left: Title */}
          <div className="flex ">
          <h2 className=" text-gray-800 w-32">Company Type</h2>

             {/* Center: Company Details and Logo */}
          <div className="flex items-center ml-24 space-x-8">
            {/* Centered Logo and Text */}
            <div className="flex flex-col items-center">
              {/* Logo */}
             
              {/* Details */}
              <div>
                <div className="flex">
                  <p className="text-sm mr-8">Tax form</p>
                </div>
                <div className="flex mt-8">
                  <p className="text-sm mr-8">Industry</p>
                  <p className="text-sm" >Tchnology / Télécommunications services</p>
                </div>
                
              </div>
            </div>
          </div>
          </div>
      
         
      
          {/* Right: Edit Icon */}
          <div >
            <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div  className={` p-8 flex justify-between border-b pb-4  ${
          activeSection === "info" ? "bg-gray-100" : ""
        }`}
        onClick={() => setActiveSection("info")}
         >
          {/* Left: Title */}
          <div className="flex ">
          <h2 className=" text-gray-800 w-32">Contact info</h2>

             {/* Center: Company Details and Logo */}
          <div className="flex items-center ml-24 space-x-8">
            {/* Centered Logo and Text */}
            <div className="flex flex-col items-center">
              {/* Logo */}
             
              {/* Details */}
              <div>
                <div className="flex">
                  <p className="text-sm mr-8">company email</p>
                  <p className="text-sm" >meriemtarouss@gmail.com</p>
                </div>
                <div className="flex mt-6">
                  <p className="text-sm mr-8">customer-facing email</p>
                  <p className="text-sm" style={{color:colors.grey}} >same as company email </p>
                </div>
                <div className="flex mt-6">
                  <p className="text-sm mr-8">company phone</p>
                  <p className="text-sm"  >+212638656587</p>
                </div>
                <div className="flex mt-6">
                  <p className="text-sm mr-8">website</p>
                </div>
                
              </div>
            </div>
          </div>
          </div>
      
         
      
          {/* Right: Edit Icon */}
          <div >
            <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div  className={` p-8 flex justify-between border-b pb-4  ${
          activeSection === "adress" ? "bg-gray-100" : ""
        }`}
        onClick={() => setActiveSection("adress")}
         >
          {/* Left: Title */}
          <div className="flex ">
          <h2 className=" text-gray-800 w-32">Address</h2>

             {/* Center: Company Details and Logo */}
          <div className="flex items-center ml-24 space-x-8">
            {/* Centered Logo and Text */}
            <div className="flex flex-col items-center">
              {/* Logo */}
             
              {/* Details */}
              <div>
                <div className="flex">
                  <p className="text-sm mr-8">company adress</p>
                  <p className="text-sm" >meriemtarouss@gmail.com</p>
                </div>
                <div className="flex mt-6">
                  <p className="text-sm mr-8">customer-facing adress</p>
                  <p className="text-sm" style={{color:colors.grey}} >same as company email </p>
                </div>
                <div className="flex mt-6">
                  <p className="text-sm mr-8">legal adress</p>
                  <p className="text-sm" style={{color:colors.grey}} >same as company email </p>
                </div>
             
                
              </div>
            </div>
          </div>
          </div>
      
         
      
          {/* Right: Edit Icon */}
          <div >
            <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div  className={` p-8 flex justify-between border-b pb-4  ${
          activeSection === "comm" ? "bg-gray-100" : ""
        }`}
        onClick={() => setActiveSection("comm")}
         >
          {/* Left: Title */}
          <div className="flex ">
          <h2 className=" text-gray-800 w-32">Communications with Billswift</h2>

             {/* Center: Company Details and Logo */}
          <div className="flex items-center ml-24 space-x-8">
            {/* Centered Logo and Text */}
            <div className="flex flex-col items-center">
              {/* Logo */}
             
              {/* Details */}
              <div>
                <div className="flex">
                  <p className="text-sm mr-8" style={{color:colors.primary}}>View privacy statement </p>
                </div>
               
             
                
              </div>
            </div>
          </div>
          </div>
      
         
      
         
        </div>

      

      </div>
      

      ),
    sales: (
      <div className="w-full bg-white rounded-md">
      {/* Section: Company Details */}
      <div  className={` p-8 flex justify-between border-b pb-4 ${
        activeSection === "details" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("details")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className="text-gray-800 w-32">Customise</h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
           
            {/* Details */}
            <div>
              <div className="flex">
                <p className="text-sm mr-8">Customise the way forms look to tour customers</p>
                <button
      style={{ backgroundColor: colors.primary ,color:colors.white }}
      className="border border-white p-2 text-sm rounded "
    >
      customise look feel 
    </button>
              </div>
              
            </div>
          </div>
        </div>
        </div>
    
       
    
       
      </div>
    
      {/* Section: Company Type */}
      
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "type" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("type")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Sales from content </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Preferred invoice terms", value: "Net 30" },
    { label: "Preferred delivery method", value: "None" },
    { label: "Shipping", value: "Off" },
    { label: "Custom transaction", value: "On" },
    { label: "Service date", value: "Off" },
    { label: "Discount", value: "Off" },
    { label: "Deposit", value: "Off" },
    { label: "Tags", value: "On" },
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-60">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>


          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "info" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("info")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Invoice payments </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
           
           
            {/* Details */}
            <div>
              <div className="flex">
                <p className="text-sm mr-8">payment instructions </p>
              </div>
              <div className="flex mt-6">
                <p className="text-sm mr-8">contact nexular to pay </p>
              </div>
             
              
            </div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "Products" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("Products")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Products and services </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Show Product/Service column on sales forms", value: "On" },
    { label: "Show SKU column", value: "Off" },
    { label: "Track quantity and price/rate", value: "On" },
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-64">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>

      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "invoicing" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("invoicing")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Progress invoicing </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Create multiple partial invoices from a single estimate", value: "Off" },
   
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-64">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "Messages" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("Messages")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Messages </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Default email message sent with sales forms", value: "" },
   
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-64">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "Reminders" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("Reminders")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Reminders </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Default email message for invoice reminders", value: "" },
    { label: "Automatic invoice reminders", value: "On" },

   
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-64">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
    
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "delivery" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("delivery")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Online delivery </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Email options for all sales forms", value: "" },
   
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-64">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "Statements" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("Statements")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Statements </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Show ageing table at bottom of statement", value: "On" },

   
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-64">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
     

    </div>
    ),
    expenses: (
      <div className="w-full bg-white rounded-md">
      <div  className={` p-8 flex justify-between border-b pb-4 ${
        activeSection === "bills" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("bills")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className="text-gray-800 w-32">Bills and expenses</h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
           
            {/* Details */}
            <div>
              <div className="flex">
                <p className="text-sm mr-8 w-96" >Your current version of QuickBooks doesn’t include bills
                Upgrade to Essentials if you need to manage bills</p>
                <button
      style={{ backgroundColor: colors.primary ,color:colors.white }}
      className="border border-white p-2 text-sm rounded "
    >
      Upgrade 
    </button>
              </div>
              
            </div>
          </div>
        </div>
        </div>
    
       
    
       
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4 ${
        activeSection === "orders" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("orders")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className="text-gray-800 w-32">purchase orders </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
           
            {/* Details */}
            <div>
              <div className="flex">
                <p className="text-sm mr-8 w-96">Your current version of QuickBooks doesn’t include
purchase orders
    Upgrade to Plus if you also need purchase orders</p>
                <button
      style={{ backgroundColor: colors.primary ,color:colors.white }}
      className="border border-white p-2 text-sm rounded "
    >
      Upgrade 
    </button>
              </div>
              
            </div>
          </div>
        </div>
        </div>
    
       
    
       
      </div>
    
      
      
     

    </div>
    ),
    advanced: (
      <div className="w-full bg-white rounded-md">
     
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "Accounting" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("Accounting")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Accounting</h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "First month of financial year", value: "January" },
    { label: "First month of tax year", value: "Same as Financial year" },
    { label: "Accounting method", value: "Accrual" },
    { label: "Close the books", value: "On" },
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-64">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>


          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "type" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("type")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Company type  </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
           
           
            {/* Details */}
            <div>
              <div className="flex">
                <p className="text-sm mr-8">tax form </p>
              </div>
             
             
              
            </div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "charts" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("charts")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Charts of accounts </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Enable account numbers", value: "Off" },
   
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-96">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "Automation" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("Automation")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Automation </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Pre-fill forms with previously entered content", value: "On" },
   
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-96">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "language" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("language")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Language  </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Language", value: "English " },
   
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-96">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "Currency" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("Currency")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">Currency  </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Home currency ", value: "Morrocan dirham " },
   
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-96">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div  className={` p-8 flex justify-between border-b pb-4  ${
        activeSection === "other" ? "bg-gray-100" : ""
      }`}
      onClick={() => setActiveSection("other")}
       >
        {/* Left: Title */}
        <div className="flex ">
        <h2 className=" text-gray-800 w-32">other preferences  </h2>

           {/* Center: Company Details and Logo */}
        <div className="flex items-center ml-24 space-x-8">
          {/* Centered Logo and Text */}
          <div className="flex flex-col items-center">
            {/* Logo */}
           
            {/* Details */}
            <div>
  {[
    { label: "Date format  ", value: "mm/dd/yy " },
    { label: " currency format ", value: "$123,456.00 " }, 
    { label: "Warn me if duplicate cheque number is used", value: "On " },
    { label: `Warn me when I enter a bill number that’s already
been used for that supplier`, value: "On " },
{ label: `Warn me if duplicate journal number is used`, value: "On " },
{ label: `Warn me when I enter a bill number that’s already
  been used for that supplier`, value: "On " },
  { label: `Sign me out if inactive for`, value: "1 hour  " },

   
    
  ].map((item, index) => (
    <div key={index} className="flex justify-between mt-4">
      <p className="text-sm w-96">{item.label}</p> {/* Fixed width for labels */}
      <p className="text-sm">{item.value}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        </div>
    
       
    
        {/* Right: Edit Icon */}
        <div >
          <Image src={edit} alt="Edit" className="h-4 w-4 cursor-pointer" />
        </div>
      </div>

      
     

    </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-8 bg-white shadow rounded">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <Image src={IconAccount} alt="icon" className="h-8 w-8" />
          <h1 className="text-xl font-bold">Account and Setting</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 shadow-lg p-2 rounded bg-gray-100">
          <Image src={help} alt="help" className="w-4 h-4 cursor-pointer" />
          <Image src={close} alt="close" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1">
        {/* Left Sidebar Menu */}
        <div className="w-1/6 bg-white ">
        <ul className="">
  {(["company", "sales", "expenses", "advanced"] as const).map((section) => (
    <li
      key={section}
      className={`cursor-pointer py-4 border-b text-center`}
      style={{ 
        backgroundColor:selectedSection===section? colors.secondary:colors.white,
        color:selectedSection===section?colors.primary:'grey'
      }}
      onClick={() => setSelectedSection(section)}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </li>
  ))}
</ul>

        </div>

        {/* Right Content Area */}
        <div className="w-full bg-white  ">
          {content[selectedSection]}
        </div>
        
      </div>
      <div
style={{ backgroundColor: colors.primary }}
className="flex items-center justify-between p-4 mt-4"
>
{/* Left Spacer for alignment */}
<div className="flex-1"></div>

{/* Center Section */}
<p className="flex-1 text-sm text-white text-center">
  Print or preview | Customise | Privacy
</p>

{/* Right Section */}
<div className="flex space-x-4 flex-1 justify-end">
  <button
    style={{ color: colors.primary }}
    className="border border-white p-2 text-sm rounded bg-white"
  >
    Done
  </button>
</div>
</div>
    </div>
  );
}
