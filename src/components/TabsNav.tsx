// src/components/TabsNav.tsx

import { tabs } from "@/data/tabs";
import React from "react";
import { NavLink } from "react-router-dom";


export default function TabsNav() {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="
        flex bg-[var(--theme-card)] rounded-2xl p-2 gap-17 shadow-lg border border-[var(--theme-border)]
        w-full max-w-full mx-auto justify-center
      ">
        {tabs.map((tab, index) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === '/'}
            className={({ isActive }) => `
              px-2 lg:px-3 xl:px-6 py-3 xl:py-4 h-auto rounded-xl transition-all duration-300 relative group
              min-w-[120px] lg:min-w-[140px] xl:min-w-[180px] flex-col items-center flex
              ${isActive 
                ? 'bg-[#4f45b6] text-white shadow-xl transform scale-105' 
                : 'text-black hover:bg-gray-100 hover:shadow-md hover:scale-102'
              }
            `}
            style={({ isActive }) => ({
              boxShadow: isActive ? '0 8px 25px -8px rgba(79, 69, 182, 0.4)' : undefined
            })}
          >
            {({ isActive }) => {
              // Clone the icon element and apply color directly
              const coloredIcon = tab.icon && React.cloneElement(tab.icon, {
                className: `${tab.icon.props.className || ''} transition-colors duration-300`,
                style: {
                  ...(tab.icon.props.style || {}),
                  color: isActive ? 'white' : '#4f45b6'
                }
              });

              return (
                <>
                  <div className="flex flex-col items-center gap-1 xl:gap-2 w-full">
                    {coloredIcon}
                    <div className="text-center w-full">
                      <div className={
                        `transition-all duration-300 leading-tight text-xs xl:text-sm ${
                          isActive ? 'font-bold' : 'font-medium'
                        }`
                      }>
                        <div style={{ color: isActive ? 'white' : 'black' }}>
                          {tab.label}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Badge */}
                  {tab.badge && (
                    <span className="
                      rounded-md border font-medium w-fit whitespace-nowrap shrink-0 
                      absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-1.5
                      xl:px-2 py-0.5 xl:py-1 h-5 xl:h-6 min-w-[20px] xl:min-w-[24px] flex items-center justify-center
                      animate-pulse shadow-lg
                    " style={{ fontSize: 10, fontWeight: "bold" }}>
                      {tab.badge}
                    </span>
                  )}
                  {/* Active dot */}
                  {isActive && (
                    <div 
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#4f45b6" }}
                    />
                  )}
                </>
              );
            }}
          </NavLink>
        ))}
      </div>
    </div>
  );
}