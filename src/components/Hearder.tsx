import React from "react";
import { ArrowLeft, Search, Bell, Settings } from "lucide-react";

const Header: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-[#fcfbff] px-6 py-4 shadow-sm w-full">
      {/* Left: Back Button + Logo + Headings */}
      <div className="flex items-center gap-4">
        {/* Back Button */}
        <button className="border rounded-lg px-4 py-2 flex items-center text-gray-600 hover:bg-gray-100 transition">
          <ArrowLeft size={20} className="mr-1" />
          Back
        </button>
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="w-10 h-10 ml-2" />
        {/* Headings */}
        <div>
          <div className="text-2xl font-bold leading-none">Update Company Setup</div>
          <div className="text-sm text-gray-500 -mt-1">
            Update your pharmaceutical company information
          </div>
        </div>
      </div>
      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center px-8">
        <div className="relative w-[400px]">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition text-gray-700"
            placeholder="Search assessments, reports..."
          />
        </div>
      </div>
      {/* Right: Notification, Settings, User Info, Company Logo */}
      <div className="flex items-center gap-4">
        {/* Notification bell with red dot */}
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-500" />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </div>
        {/* Settings */}
        <Settings className="w-6 h-6 text-gray-500" />
        {/* User Info */}
        <div className="flex flex-col items-end mr-2">
          <span className="font-medium text-gray-800 text-sm">Nancy Moore</span>
          <span className="text-xs text-gray-500">Quality Manager</span>
        </div>
        {/* Company Logo */}
        <img src="/pfizer-logo.png" alt="Pfizer" className="h-7 ml-2" />
      </div>
    </nav>
  );
};

export default Header;
