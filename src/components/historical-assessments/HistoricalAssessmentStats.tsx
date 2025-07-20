// HistoricalAssessmentStats.tsx
import React from "react";

const stats = [
  {
    value: "6",
    label: "Total Assessments",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-blue-600"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" x2="8" y1="13" y2="13"/>
        <line x1="16" x2="8" y1="17" y2="17"/>
        <line x1="10" x2="8" y1="9" y2="9"/>
      </svg>
    ),
  },
  {
    value: "4",
    label: "Completed",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-green-600"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    value: "2",
    label: "Draft & In Progress",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-orange-600"
      >
        <circle cx={12} cy={12} r={10}/>
        <line x1={10} x2={10} y1={15} y2={9}/>
        <line x1={14} x2={14} y1={15} y2={9}/>
      </svg>
    ),
  },
  {
    value: "90%",
    label: "Average Score",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-purple-600"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
];

export default function HistoricalAssessmentStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-slide-up animate-stagger-1">
      {stats.map((stat) => (
        <div
          key={stat.label}
          data-slot="card"
          className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] border-[var(--theme-border)] transition-transform hover:scale-[1.03] shadow-md hover:shadow-xl duration-200"
        >
          <div data-slot="card-content" className="[&:last-child]:pb-6 p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${stat.iconBg} rounded-lg flex items-center justify-center`}>
                {stat.svg}
              </div>
              <div>
                <div className="font-bold font-['Cairo',sans-serif] text-[var(--theme-foreground)] text-2xl">
                  {stat.value}
                </div>
                <div className="font-['Cairo',sans-serif] text-[var(--theme-muted-foreground)] text-sm">
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
