import React, { useState } from "react";
import invoice from '../../public/invoice.png';
import Image from "next/image";
import explore from '../../public/explore.png';
import settings from '../../public/Settings.png';
import help from '../../public/grHelp.png';
import close from '../../public/Close.png'
import colors from "@/app/styles/Colors";
import helpp from '../../public/help.png';
import arrow from '../../public/arrowtable.png';
import trash from '../../public/trash.png';
import attachement from '../../public/attachement.png';
interface LineItem {
  id: number;
  product: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

const Invoiceform: React.FC = () => {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: 1, product: "", description: "", quantity: 0, rate: 0, amount: 0 },
    { id: 2, product: "", description: "", quantity: 0, rate: 0, amount: 0 },

  ]);

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: lineItems.length + 1, product: "", description: "", quantity: 0, rate: 0, amount: 0 },
    ]);
  };

//   const removeLineItem = (id: number) => {
//     setLineItems(lineItems.filter((item) => item.id !== id));
//   };

  const updateLineItem = (id: number, field: keyof LineItem, value: string | number) => {
    setLineItems(
      lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value, amount: item.quantity * item.rate } : item
      )
    );
  };

  return (
    <form className="bg-white rounded space-y-4">

      {/* Header Section */}
      <div className="flex mx-6 my-6 justify-between items-center">
        <div className="flex items-center ">
        <Image src={invoice} alt="invoice" className="w-6 h-8"/>
        <h2 className="text-lg font-semibold ml-4">Invoice n° 0045</h2>
        </div>
        
        {/* <div className="text-right">
          <p className="font-bold text-xl">Balance Due</p>
          <p className="text-lg">0.00 د.إ</p>
        </div> */}
        <div className="flex items-center space-x-2 p-2 " style={{borderRadius: '8px', backgroundColor: colors.white,         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Adjust shadow as needed
  }}>
              <Image 
                src={explore} 
                alt='profile' 
                className="h-4 w-4" 
                style={{ borderRadius: '8px' }}  // This will create a square with rounded corners
            />             
            <p style={{ color: colors.primary,marginRight:12 }}>Take a tour</p>
            <Image src={settings} alt='logout' className="h-4 w-auto "/>
              <Image src={help} alt='search'className="h-4 w-auto "/>
              <Image src={close} alt='CLOSE'className="h-6 w-6 "/>
        </div>
      </div>

      {/* Customer Information */}
      <div className="grid bg-gray-200 bg-opacity-50 px-6 py-6 gap-4">
      {/* Line 1 */}
      <div className="flex items-center gap-4">
        {/* Customer Select and Email */}
        <div className="flex flex-col">
          <div className="flex items-center">
            <label className="block text-sm font-medium mr-4">Customer</label>
            <Image src={helpp} className="w-4 h-4" alt="help" />
          </div>
          <select
            defaultValue={"select a customer"}
            className="w-96 h-10 border border-gray-400 focus:border-gray-400 hover:border-gray-400 mt-2 p-2"
          >
            <option value="customer1">Customer 1</option>
            <option value="customer2">Customer 2</option>
            <option value="customer3">Customer 3</option>
            {/* Add more options here as needed */}
          </select>
        </div>
        <div className="flex flex-col">
          <div className="flex w-96 items-center justify-between ">
            <div className="flex items-center">
              <label className="block text-sm font-medium mr-4">Customer Email</label>
              <Image src={helpp} alt="help" className="w-4 h-4" />
            </div>
            <p style={{ color: colors.primary }} className="text-sm">
              Cc/Bcc
            </p>
          </div>
          <input
            type="email"
            placeholder="Select a customer "
            className="w-96 h-10 border border-gray-400 focus:border-gray-400 hover:border-gray-400 mt-2 p-2"
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="sendLater" className="mr-2" />
          <label htmlFor="sendLater" className="text-sm mr-4">
            Send Later
          </label>
          <Image src={helpp} alt="help" className="w-4 h-4 " />

        </div>
        <div className="flex flex-col items-center ml-auto">
          <p className="text-sm text-gray-700">BALANCE DUE</p>
          <p className="text-xl font-bold">0.د.م.00</p>
        </div>
      </div>

      {/* Line 2 */}
      <div className="flex  gap-4">
  {/* Billing Address */}
  <div >
    <label className="block text-sm font-medium">Billing Address</label>
    <textarea
      className="w-96 h-32 border rounded p-2"
      placeholder=""
    ></textarea>
  </div>

  {/* Terms */}
  <div>
  <div className="flex items-center">
            <label className="block text-sm font-medium mr-4">Terms</label>
            <Image src={helpp} className="w-4 h-4" alt="help" />
          </div>
    <select className="w-48 h-10 border rounded p-2">
      <option>Net 30</option>
      <option>Net 15</option>
      <option>Due on receipt</option>
    </select>
  </div>

  {/* Invoice Date */}
  <div>
    <label className="block text-sm font-medium">Invoice Date</label>
    <input type="date" className="w-48 h-10 border rounded p-2" />
  </div>

  {/* Due Date */}
  <div className="mr-4">
    <label className="block text-sm font-medium">Due Date</label>
    <input type="date" className="w-48 h-10 border rounded p-2" />
  </div>

  {/* Invoice Number */}
  <div>
    <label className="block text-sm font-medium">invoice n°</label>
    <input
      type="text"
      placeholder="0045"
      className="w-48 h-10 border rounded p-2"
    />
  </div>
</div>



      {/* Line 3 */}
      <div className="flex items-center gap-4">
       
      <div className="flex flex-col">
          <div className="flex w-96 items-center justify-between ">
            <div className="flex items-center">
              <label className="block text-sm font-medium mr-4">Tags</label>
              <Image src={helpp} alt="help" className="w-4 h-4" />
            </div>
            <p style={{ color: colors.primary }} className="text-sm">
              manage tags
            </p>
          </div>
          <input
            type="email"
            placeholder="start typing to add a tag  "
            className="w-96 h-10 border border-gray-400 focus:border-gray-400 hover:border-gray-400 mt-2 p-2"
          />
        </div>
      </div>
    </div>

      {/* Product/Service Table */}
      <div>
        <table className=" mx-6 my-6  border-collapse border border-gray-200">
          <thead>
            <tr className="">
              <th className="border border-gray-200 p-2"></th>
              <th className="border border-gray-200 p-2" style={{ fontWeight: 'normal' }}>#</th>
              <th className="border border-gray-200 p-2" style={{ fontWeight: 'normal' }}>
  <div className="flex items-center">
    PRODUCT/SERVICE 
    <Image src={helpp} alt="hlp" className="w-4 h-4 ml-2" />
  </div>
</th>
<th className="border border-gray-200 p-2" style={{ fontWeight: 'normal' }}>DESCRIPTION</th>
<th className="border border-gray-200 p-2" style={{ fontWeight: 'normal' }}>QTY</th>
<th className="border border-gray-200 p-2" style={{ fontWeight: 'normal' }}>RATE</th>
<th className="border border-gray-200 p-2" style={{ fontWeight: 'normal' }}>AMOUNT</th>

              <th className="border border-gray-200 p-2"></th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((item) => (
              <tr key={item.id}>
                <td className="border w-16 justify-center  items-center border-gray-200 p-2">
  <Image src={arrow} alt="arrow" className="w-4 h-4 ml-4"/>
</td>
                <td className="border w-16 border-gray-200 p-2">{item.id}</td>
                <td className="border w-72 border-gray-200 p-2">
                  <input
                    type="text"
                    className="w-full p-2"
                    value={item.product}
                    onChange={(e) => updateLineItem(item.id, "product", e.target.value)}
                  />
                </td>
                <td className="border w-72 border-gray-200 p-2">
                  <input
                    type="text"
                    className="w-full p-2"
                    value={item.description}
                    onChange={(e) => updateLineItem(item.id, "description", e.target.value)}
                  />
                </td>
                <td className="border  w-32 border-gray-200 p-2">
                  <input
                    type="number"
                    className="w-full p-2"
                    value={item.quantity}
                    onChange={(e) => updateLineItem(item.id, "quantity", +e.target.value)}
                  />
                </td>
                <td className="border w-32 border-gray-200 p-2">
                  <input
                    type="number"
                    className="w-full p-2"
                    value={item.rate}
                    onChange={(e) => updateLineItem(item.id, "rate", +e.target.value)}
                  />
                </td>
                <td className="border w-32 border-gray-200 p-2 text-right">
                  {item.amount.toFixed(2)}
                </td>
                <td className="border w-16 justify-center border-gray-200 p-2 text-center">
                  <Image src={trash} alt="trash" className="w-4 h-4 ml-4"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between">
        <div className=" mx-6 my-4  flex ">
        <button type="button" className=" px-2 text-gray-500 border border-gray-500 rounded text-sm mr-2" onClick={addLineItem}>
          Add Lines
        </button>
        <button type="button" className=" px-2 py-1 text-gray-500 border border-gray-500 rounded text-sm mr-2 " onClick={addLineItem}>
          Clear all Lines
        </button>
        <button type="button" className=" px-2 text-gray-500 border border-gray-500 rounded text-sm" onClick={addLineItem}>
          Add Subtotal
        </button>
        

        </div>
        <div className="mr-4">
          <div className="flex items-center">
            <p className="text-gray-600 ">Total</p>
            <p className="font-bold ml-16">0.د.م.00</p>
          </div>
          <div  className="flex items-center">
            <p className="text-gray-600 mr-4">Balance due</p>
            <p className="font-bold">0.د.م.00</p>
          </div>
        </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mx-6 my-4">
        <label className="block text-sm font-medium text-gray-600">Message on Invoice</label>
        <textarea
  placeholder="This will show up on the invoice."
  className="w-96 mb-2 h-24 border border-gray-400 focus:border-gray-400 hover:border-gray-400 mt-2 p-2 pt-1 text-left align-top resize-none"
></textarea>
<label className="block text-sm font-medium text-gray-600">Message on Statement</label>
        <textarea
  placeholder="If you send statements to customers, this will show 
up as the description for this invoice."
  className="w-96 mb-2 h-24 border border-gray-400 focus:border-gray-400 hover:border-gray-400 mt-2 p-2 pt-1 text-left align-top resize-none"
></textarea>
<div className="flex w-96 items-center justify-between mb-2 ">
<div className="flex items-center">
              <label className="block text-sm font-medium mr-4">Attachement</label>
              <Image src={attachement} alt="att" className="w-4 h-4" />
            </div>
            <p style={{ color: colors.grey }} className="text-sm">
            Maximum size: 20MB
            </p>
          </div>
          <div className="relative w-96 h-24 border border-gray-400 hover:border-gray-400 focus-within:border-gray-400 p-2">
  <input
    type="file"
    id="file-upload"
    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
    onChange={(e) => console.log(e.target.files)}
  />
  <label
    htmlFor="file-upload"
    className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-400 text-sm"
  >
    Drag/Drop files here or click the icon
  </label>
</div>

<p style={{color:colors.primary}}className="mx-32 text-sm">Show existing </p>



      </div>
      <div style={{ backgroundColor: colors.primary }} className="flex items-center justify-between p-4">
  {/* Left Section */}
  <button className="border border-white text-white p-2 text-sm rounded">
    Cancel
  </button>
  
  {/* Center Section */}
  <p className="text-sm text-white text-center">
    Print or preview | Customise | Privacy
  </p>
  
  {/* Right Section */}
  <div className="flex space-x-4">
    <button className="border border-white text-white p-2 text-sm rounded">
      Save
    </button>
    <button style={{ color: colors.primary }} className="border border-white p-2 text-sm rounded bg-white">
      Save and Send
    </button>
  </div>
</div>

    </form>
  );
};

export default Invoiceform;
