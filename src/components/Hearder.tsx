import React from "react";
import svgPaths from "../import/svg-ai243ivdh2";
import { setIsOpenSidebar } from "@/features/companies/companiesSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";

const Header: React.FC = () =>{ 
  const dispatch = useDispatch<AppDispatch>();
  return(

  <header className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
    <div className="flex items-center space-x-3">
      {/* Left Logo (Auryis) */}
      <span className="flex items-center">
        <div className="w-10 h-10 mr-2">
          <svg
            className="block size-full logo-themed"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 911 1054"
          >
            <g clipPath="url(#clip0_themed_logo)" id="Group_Themed_Logo">
              <path
                d={svgPaths.p35bbea00}
                fill="var(--logo-primary)"
                id="Vector_Primary"
                className="transition-all duration-500 ease-in-out"
                style={{ fill: "var(--theme-primary)" }}
              />
              <path
                d={svgPaths.p14fefe80}
                fill="var(--logo-secondary)"
                id="Vector_Secondary"
                className="transition-all duration-500 ease-in-out"
                style={{ fill: "var(--theme-primary)" }}
              />
              <path
                d={svgPaths.p1c304b00}
                fill="var(--logo-accent)"
                id="Vector_Accent"
                className="transition-all duration-500 ease-in-out"
                style={{ fill: "var(--theme-primary)" }}
              />
            </g>
            <defs>
              <clipPath id="clip0_themed_logo">
                <rect fill="white" height="1054" width="911" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className="text-2xl font-bold text-gray-800">Auryis</span>
      </span>
    </div>

    <div className="flex items-center space-x-4">
      {/* Settings Button */}
      <button  
      onClick={() => dispatch(setIsOpenSidebar(true))}
      style={{ backgroundColor: "#fff" }} className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
        Settings
      </button>
      {/* Pfizer Avatar */}
      <span className="w-10 h-10 rounded-full bg-white border flex items-center justify-center shadow">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/54/Pfizer_logo_2021.png"
          alt="Pfizer"
          className="w-7 h-7 object-contain"
        />
      </span>
    </div>
  </header>
)};

export default Header;
