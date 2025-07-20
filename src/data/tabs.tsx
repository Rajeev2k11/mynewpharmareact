// src/data/tabs.tsx

export const tabs = [
  {
    name: "Assessment Rules",
    path: "/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 xl:w-6 xl:h-6 transition-all duration-300 group-hover:scale-110">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" x2="8" y1="13" y2="13"/>
        <line x1="16" x2="8" y1="17" y2="17"/>
        <line x1="10" x2="8" y1="9" y2="9"/>
      </svg>
    ),
    label: <>Assessment Rules<br className="xl:hidden" /><span className="hidden xl:inline"> Management</span></>,
    // desc: <>Configure comprehensive assessment rules and compliance criteria</>,
    badge: null,
  },
  {
    name: "Historical Assessments",
    path: "/historical-assessments",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 xl:w-6 xl:h-6 transition-all duration-300 group-hover:scale-110 text-[var(--theme-primary)]">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: <>Historical Assessments<br className="xl:hidden" /><span className="hidden xl:inline"> Archive</span></>,
    // desc: <>View complete assessment history and past assessment results</>,
    badge: 2,
  },
  {
    name: "Compliance Profile",
    path: "/compliance-profile",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 xl:w-6 xl:h-6 transition-all duration-300 group-hover:scale-110 text-[var(--theme-primary)]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: <>Compliance Profile<br className="xl:hidden" /><span className="hidden xl:inline"> Dashboard</span></>,
    // desc: <>Comprehensive compliance status and regulatory overview</>,
    badge: null,
  },
  {
    name: "Detailed Reports",
    path: "/detailed-reports",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 xl:w-6 xl:h-6 transition-all duration-300 group-hover:scale-110 text-[var(--theme-primary)]">
        <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
      </svg>
    ),
    label: <>Detailed Reports<br className="xl:hidden" /><span className="hidden xl:inline"> Analytics</span></>,
    // desc: <>Advanced assessment reports and comprehensive analytics</>,
    badge: null,
  },
];
