import React from "react";

const stats = [
  {
    value: "4",
    label: "Total Rules",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    ),
  },
  {
    value: "3",
    label: "Active Rules",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-green-600"
      >
        <circle cx={12} cy={12} r={10} />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "1",
    label: "Critical Rules",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-red-600"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
  {
    value: "4",
    label: "Categories",
    iconBg: "bg-[var(--theme-primary)]/10",
    iconColor: "text-[var(--theme-primary)]",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[var(--theme-primary)]"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
      </svg>
    ),
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 animate-slide-up animate-stagger-1">
      {stats.map((stat) => (
        <div
          key={stat.label}
          data-slot="card"
          className="bg-card text-card-foreground flex flex-col gap-3 xs:gap-4 sm:gap-6 
          rounded-lg xs:rounded-xl border bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] 
          border-[var(--theme-border)] transition-transform hover:scale-[1.02] sm:hover:scale-[1.03] 
          shadow-sm xs:shadow-md hover:shadow-lg sm:hover:shadow-xl duration-200"
        >
          <div data-slot="card-content" className="[&:last-child]:pb-3 xs:[&:last-child]:pb-4 sm:[&:last-child]:pb-6 p-2 xs:p-3 sm:p-4">
            <div className="flex items-center gap-2 xs:gap-3">
              <div className={`w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 ${stat.iconBg} rounded-md xs:rounded-lg flex items-center justify-center`}>
                {stat.svg}
              </div>
              <div>
                <div className="font-bold font-['Cairo',sans-serif] text-[var(--theme-foreground)] 
                  text-lg xs:text-xl sm:text-2xl">
                  {stat.value}
                </div>
                <div className="font-['Cairo',sans-serif] text-[var(--theme-muted-foreground)] 
                  text-xs xs:text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}