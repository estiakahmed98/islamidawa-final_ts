"use client";

import React, { useState } from "react";
import SidebarAdmin from "./SidebarAdmin";
import Sidebar from "./Sidebar";
import TreeExample from "./TreeExample"; // Assuming "TreeExample" is the correct import.

const ImpersonateSidebar: React.FC = () => {
  const [showUserSidebar, setShowUserSidebar] = useState(false);

  const toggleView = () => {
    setShowUserSidebar((prevState) => !prevState);
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar or Tree Example */}
      <div className="w-52 bg-slate-800 text-white">
        <TreeExample />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow bg-gray-100 relative">
        <button
          onClick={toggleView}
          className="absolute top-8 left-4 px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 focus:outline-none"
        >
          {showUserSidebar ? "Admin Mode" : "User Mode"}
        </button>
        {/* Display content here */}
        <div className="p-4">Main Content Area</div>
      </div>

      {/* User Sidebar */}
      {showUserSidebar && (
        <div className="w-52 bg-white border-l shadow-lg transition-transform duration-500">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default ImpersonateSidebar;
