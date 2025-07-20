import  { useState } from "react";

// Dummy data, इसे अपनी props या state से डायनामिक भी बना सकते हैं
const tabData = [
  {
    key: 'all',
    label: 'All Assessments (5)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" x2="8" y1="13" y2="13"/>
        <line x1="16" x2="8" y1="17" y2="17"/>
        <line x1="10" x2="8" y1="9" y2="9"/>
      </svg>
    ),
  },
  {
    key: 'drafts',
    label: 'Drafts & In Progress (1)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <line x1="10" x2="10" y1="15" y2="9"/>
        <line x1="14" x2="14" y1="15" y2="9"/>
      </svg>
    ),
  },
  {
    key: 'completed',
    label: 'Completed (4)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  }
];

export default function HistoricalAssessmentTabs() {
  const [activeTab, setActiveTab] = useState('all');

  // यहां हर tab का content अलग है, details नीचे दी हैं:
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] border-[var(--theme-border)] shadow">
      {/* Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
        <h4 className="leading-none flex items-center gap-2 font-bold text-[var(--theme-foreground)] font-['Cairo',sans-serif]">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[var(--theme-primary)]">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
          </svg>
          Assessment History & Drafts
        </h4>
      </div>
      {/* Tabs Bar */}
      <div className="px-6 w-full">
        <div className="bg-muted text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-3 mb-6">
          {tabData.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={
                "flex flex-1 items-center gap-2 justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] transition-[color,box-shadow] " +
                (activeTab === tab.key
                  ? "bg-card text-foreground shadow font-bold"
                  : "text-foreground/80 hover:text-[var(--theme-primary)]")
              }
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="space-y-4">
          {activeTab === 'all' && (
            <AllAssessmentsContent />
          )}
          {activeTab === 'drafts' && (
            <DraftsContent />
          )}
          {activeTab === 'completed' && (
            <CompletedContent />
          )}
        </div>
      </div>
    </div>
  );
}

// नीचे तीनों tab के अलग-अलग content component हैं:

const AllAssessmentsContent = () => (
  <>
    {/* Card 1 Example */}
    <div className="bg-[var(--theme-card)] p-4 rounded-lg border border-[var(--theme-border)] hover:shadow-md cursor-pointer transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <button className="inline-flex items-center justify-center rounded-md p-1 h-6 w-6 hover:bg-accent hover:text-accent-foreground transition-all focus-visible:ring-[3px]">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
            <h4 className="font-semibold font-['Cairo',sans-serif] text-[var(--theme-foreground)]">
              Q3 2024 GMP Compliance Assessment
            </h4>
            <span className="rounded-md border px-2 py-0.5 font-medium w-fit text-xs flex items-center gap-1 bg-green-100 text-green-800 border-green-200">
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Completed
            </span>
            <span className="rounded-md border px-2 py-0.5 font-medium w-fit text-xs flex items-center gap-1 bg-secondary text-secondary-foreground border-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              2 Iterations
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Date: </span>
              <span className="text-[var(--theme-foreground)] font-semibold">15/09/2024</span>
            </div>
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Score: </span>
              <span className="text-green-600 font-bold">92%</span>
            </div>
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Findings: </span>
              <span className="text-[var(--theme-foreground)] font-semibold">3</span>
            </div>
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Assessor: </span>
              <span className="text-[var(--theme-foreground)] font-semibold">Dr. Sarah Johnson</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <ActionButtons />
        </div>
      </div>
    </div>
    {/* ऐसे ही बाकी Cards भी छोटे-छोटे सेक्शन की तरह add करें... */}
    <div className="bg-[var(--theme-card)] p-4 rounded-lg border border-[var(--theme-border)] hover:shadow-md cursor-pointer transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <button className="inline-flex items-center justify-center rounded-md p-1 h-6 w-6 hover:bg-accent hover:text-accent-foreground transition-all focus-visible:ring-[3px]">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
            <h4 className="font-semibold font-['Cairo',sans-serif] text-[var(--theme-foreground)]">
              Q3 2024 GMP Compliance Assessment
            </h4>
            <span className="rounded-md border px-2 py-0.5 font-medium w-fit text-xs flex items-center gap-1 bg-green-100 text-green-800 border-green-200">
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Completed
            </span>
            <span className="rounded-md border px-2 py-0.5 font-medium w-fit text-xs flex items-center gap-1 bg-secondary text-secondary-foreground border-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              2 Iterations
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Date: </span>
              <span className="text-[var(--theme-foreground)] font-semibold">15/09/2024</span>
            </div>
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Score: </span>
              <span className="text-green-600 font-bold">92%</span>
            </div>
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Findings: </span>
              <span className="text-[var(--theme-foreground)] font-semibold">3</span>
            </div>
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Assessor: </span>
              <span className="text-[var(--theme-foreground)] font-semibold">Dr. Sarah Johnson</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <ActionButtons />
        </div>
      </div>
    </div>
  </>
);

const DraftsContent = () => (
  <div className="bg-[var(--theme-card)] p-4 rounded-lg border border-[var(--theme-border)] hover:shadow-md cursor-pointer transition-all duration-300">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h4 className="font-semibold font-['Cairo',sans-serif] text-[var(--theme-foreground)]">
            Q1 2025 Regulatory Compliance Review
          </h4>
          <span className="rounded-md border px-2 py-0.5 font-medium w-fit text-xs bg-orange-100 text-orange-800 border-orange-200">Draft</span>
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium text-xs text-foreground">65% Complete</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-[var(--theme-muted-foreground)]">Created: </span>
            <span className="text-[var(--theme-foreground)] font-semibold">20/12/2024</span>
          </div>
          <div>
            <span className="text-[var(--theme-muted-foreground)]">Modified: </span>
            <span className="text-[var(--theme-foreground)] font-semibold">1 day ago</span>
          </div>
          <div>
            <span className="text-[var(--theme-muted-foreground)]">Progress: </span>
            <span className="text-[var(--theme-foreground)] font-semibold">Step 3 of 5</span>
          </div>
          <div>
            <span className="text-[var(--theme-muted-foreground)]">Assessor: </span>
            <span className="text-[var(--theme-foreground)] font-semibold">Current User</span>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-[var(--theme-muted-foreground)]">Progress</span>
            <span className="text-[var(--theme-foreground)] font-semibold">65%</span>
          </div>
          <div className="w-full bg-[var(--theme-secondary)] rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300" style={{ width: "65%" }} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <DraftsButtons />
      </div>
    </div>
  </div>
);

const CompletedContent = () => (
  <>
    {/* Completed tab में सारी 'completed' cards दिखाइये, सिर्फ "Completed" badges के साथ */}
    {/* सभी Cards को AllAssessmentsContent के same card layout में show कीजिए */}
    {/* (repeat with only completed data/cards) */}

    <div className="bg-[var(--theme-card)] p-4 rounded-lg border border-[var(--theme-border)] hover:shadow-md cursor-pointer transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <button className="inline-flex items-center justify-center rounded-md p-1 h-6 w-6 hover:bg-accent hover:text-accent-foreground transition-all focus-visible:ring-[3px]">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
            <h4 className="font-semibold font-['Cairo',sans-serif] text-[var(--theme-foreground)]">
              Q3 2024 GMP Compliance Assessment
            </h4>
            <span className="rounded-md border px-2 py-0.5 font-medium w-fit text-xs flex items-center gap-1 bg-green-100 text-green-800 border-green-200">
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Completed
            </span>
            <span className="rounded-md border px-2 py-0.5 font-medium w-fit text-xs flex items-center gap-1 bg-secondary text-secondary-foreground border-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              2 Iterations
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Date: </span>
              <span className="text-[var(--theme-foreground)] font-semibold">15/09/2024</span>
            </div>
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Score: </span>
              <span className="text-green-600 font-bold">92%</span>
            </div>
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Findings: </span>
              <span className="text-[var(--theme-foreground)] font-semibold">3</span>
            </div>
            <div>
              <span className="text-[var(--theme-muted-foreground)] font-['Cairo',sans-serif]">Assessor: </span>
              <span className="text-[var(--theme-foreground)] font-semibold">Dr. Sarah Johnson</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <ActionButtons />
        </div>
      </div>
    </div>
  </>
);

// Action buttons groups
const ActionButtons = () => (
  <>
    <button className="inline-flex items-center gap-1.5 h-8 rounded-md px-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200 border hover:scale-105 transition-all text-sm font-medium">
      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
        <path d="M12 7v5l4 2"/>
      </svg>
      History
    </button>
    <button className="inline-flex items-center gap-1.5 h-8 rounded-md px-3 border bg-background text-foreground hover:bg-accent hover:text-accent-foreground text-sm font-medium">
      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth={2}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
      View
    </button>
    <button className="inline-flex items-center gap-1.5 h-8 rounded-md px-3 border bg-background text-foreground hover:bg-accent hover:text-accent-foreground text-sm font-medium">
      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
      Export
    </button>
    <button className="inline-flex items-center gap-1.5 h-8 rounded-md px-3 bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200 border hover:scale-105 transition-all text-sm font-medium">
      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth={2}><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
      Iterate
    </button>
  </>
);
const DraftsButtons = () => (
  <>
    <button className="inline-flex items-center gap-1.5 h-8 rounded-md px-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200 border hover:scale-105 transition-all text-sm font-medium">
      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
      History
    </button>
    <button className="inline-flex items-center gap-1.5 h-8 rounded-md px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 border hover:scale-105 transition-all text-sm font-medium">
      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth={2}><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Resume
    </button>
    <button className="inline-flex items-center gap-1.5 h-8 rounded-md px-3 bg-red-50 hover:bg-red-100 text-red-700 border-red-200 border hover:scale-105 transition-all text-sm font-medium">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
    </button>
  </>
);

