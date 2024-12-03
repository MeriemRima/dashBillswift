// src/components/cards/ShortcutsCard.jsx
import React from "react";
import Image from "next/image";

// Assuming you have PNG icons locally
import InvoiceIcon from "../../../public/invoice.png";
import ExpenseIcon from "../../../public/expenses.png";
import DepositIcon from "../../../public/bankdepo.png";
import ChequeIcon from "../../../public/cheque.png";

const ShortcatsCard = () => {
  const shortcuts = [
    { icon: InvoiceIcon, label: "Create invoice" },
    { icon: ExpenseIcon, label: "Record expense" },
    { icon: DepositIcon, label: "Add bank deposit" },
    { icon: ChequeIcon, label: "Create cheque" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-gray-900 text-lg ">SHORTCUTS</h4>
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

      {/* Shortcuts */}
      <div className="grid grid-cols-4 gap-4 mb-24 mt-16">
        {shortcuts.map((shortcut, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full mb-2">
              <Image
                src={shortcut.icon}
                alt={shortcut.label}
                className="w-8 h-8"
              />
            </div>
            <p className="text-gray-600 text-sm">{shortcut.label}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-blue-500 text-sm hover:underline cursor-pointer">
        Show all
      </div>
    </div>
    
  );
};

export default ShortcatsCard;
