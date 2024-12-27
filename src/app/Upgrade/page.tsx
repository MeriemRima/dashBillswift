import icon from '../../../public/upgradeArrow.png';
import Image from "next/image";
import help from '../../../public/grHelp.png';
import search from '../../../public/UpgradeSearch.png';
import close from '../../../public/Close.png';
import { FaChevronDown ,FaCheckCircle} from 'react-icons/fa';
import colors from '../styles/Colors';
export default function Pricing() {
  return (
    <div>
        {/* header section */}
        <div className="flex justify-between items-center p-8 bg-white  rounded">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <Image src={icon} alt="icon" className="h-8 w-8" />
          <h1 className="text-xl font-bold">Upgrade</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 shadow-lg p-2 rounded bg-gray-100">
          <Image src={help} alt="help" className="w-4 h-4 cursor-pointer" />
          <Image src={close} alt="close" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      {/* content section */}
      <div className="p-8 flex justify-between items-center ">
     
   <table>
    <thead>
        <tr>
            <th className="w-96 relative flex flex-col items-center">
     
     <p className="text-5xl font-bold text-gray-900 leading-snug">
       Let’s find the best fit for your business
     </p>

     
     <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -z-10">
       <Image src={search} alt="search" width={300} height={300}  />
     </div>
            </th>
            <th className='text-left border border-gray-300'>
            
      
        <div className="w-48 rounded-lg items-start  px-4 py-6">
          <h3 className="text-xl font-semibold text-gray-900">Simple Start</h3>
          <div className="w-full border-b-2 border-orange-500 mt-2 mb-8"></div> {/* Horizontal line */}
          <p className='text-sm text-gray-400'>Current rate</p>
          <p className="mt-4">
            <span className="line-through text-gray-500">$18</span>
            <span className="text-xl font-bold text-red-500 ml-2">$9/mo</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">50% off for 3 months</p>
          <p className='text-sm text-gray-600'>+applicable taxes</p>
          <button className="mt-8 w-full px-4 py-2 rounded-md border-2 border-gray-600 text-black">
            Stay on plan
          </button>
         
        </div>
            </th>
            <th className='text-left border border-gray-300'>
            
      
            <div className="w-48 rounded-lg items-start  px-4 py-6  ">
              <h3 className="text-xl font-semibold text-gray-900">Simple Start</h3>
              <div className="w-full border-b-2 border-orange-500 mt-2 mb-8"></div> {/* Horizontal line */}
              <p className='text-sm text-gray-400'>Current rate</p>
              <p className="mt-4">
                <span className="line-through text-gray-500">$18</span>
                <span className="text-xl font-bold text-red-500 ml-2">$9/mo</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">50% off for 3 months</p>
              <p className='text-sm text-gray-600'>+applicable taxes</p>
              <button className="mt-8 w-full px-4 py-2 rounded-md border-2 border-gray-600 text-black">
                Stay on plan
              </button>
             
            </div>
            </th>
            <th className='text-left border border-gray-300'>
            
      
            <div className="w-48 rounded-lg items-start  px-4 py-6  ">
              <h3 className="text-xl font-semibold text-gray-900">Simple Start</h3>
              <div className="w-full border-b-2 border-orange-500 mt-2 mb-8"></div> {/* Horizontal line */}
              <p className='text-sm text-gray-400'>Current rate</p>
              <p className="mt-4">
                <span className="line-through text-gray-500">$18</span>
                <span className="text-xl font-bold text-red-500 ml-2">$9/mo</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">50% off for 3 months</p>
              <p className='text-sm text-gray-600'>+applicable taxes</p>
              <button className="mt-8 w-full px-4 py-2 rounded-md border-2 border-gray-600 text-black">
                Stay on plan
              </button>
             
            </div>
                </th>
                <th className='text-left border border-gray-300'>
            <div className="w-48 rounded-lg items-start  px-4 py-6  ">
              <h3 className="text-xl font-semibold text-gray-900">Simple Start</h3>
              <div className="w-full border-b-2 border-orange-500 mt-2 mb-8"></div> {/* Horizontal line */}
              <p className='text-sm text-gray-400'>Current rate</p>
              <p className="mt-4">
                <span className="line-through text-gray-500">$18</span>
                <span className="text-xl font-bold text-red-500 ml-2">$9/mo</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">50% off for 3 months</p>
              <p className='text-sm text-gray-600'>+applicable taxes</p>
              <button className="mt-8 w-full px-4 py-2 rounded-md border-2 border-gray-600 text-black">
                Stay on plan
              </button>
             
            </div>
                </th>
        </tr>
        
        
    </thead>
    <tbody>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm">
          <div className='flex items-center'>
          <FaChevronDown className='mr-2'/> Supports 3 accountant seats
          </div>
         </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> Up to 2 accountant seats</td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> Up to 2 accountant seats</td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> Up to 2 accountant seats</td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm">Up to 3 accountant seats</td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <div className='flex items-center'> <FaChevronDown className='mr-2'/> Share access with multiple users</div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> 1 user, no shared access</td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> Up to 3, full-access users</td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> Up to 5, full-access users</td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm">Up to 25 full-access, and
         custom users</td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"><div className='flex items-center'> <FaChevronDown className='mr-2'/> Track billable hours by customer </div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"><div className='flex items-center'> <FaChevronDown className='mr-2'/> Track inventory, cost of goods sold, and more </div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"><div className='flex items-center'> <FaChevronDown className='mr-2'/> Manage budgets and track spending year-round</div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"><div className='flex items-center'> <FaChevronDown className='mr-2'/> Customize permissions by user role</div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"><div className='flex items-center'> <FaChevronDown className='mr-2'/> Backup and restore Billswift data</div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"><div className='flex items-center'> <FaChevronDown className='mr-2'/>Customise reporting fields</div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"><div className='flex items-center'> <FaChevronDown className='mr-2'/>Automated Workflows</div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"><div className='flex items-center'> <FaChevronDown className='mr-2'/>Greater Insights</div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"><div className='flex items-center'> <FaChevronDown className='mr-2'/>Stay Organized</div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
      </tr>
      <tr>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"><div className='flex items-center'> <FaChevronDown className='mr-2'/>Premium Support</div></td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> </td>
         <td className="px-8 py-4 border border-gray-300 text-left text-sm"> <FaCheckCircle style={{color:colors.primary}} /></td>
      </tr>
    </tbody>
    </table>


      </div>
      
    </div>
  );
}
