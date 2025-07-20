// ComplianceProfileQuickActions.tsx
import React from "react";

export default function ComplianceProfileQuickActions() {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] border-[var(--theme-border)] animate-slide-up shadow">
      {/* Card Header */}
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
        <h4 className="leading-none flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-ring)] rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
              fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              className="w-6 h-6 text-white">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <span className="text-lg font-semibold">Quick Actions</span>
        </h4>
      </div>
      {/* Card Content */}
      <div className="px-6 [&:last-child]:pb-6 space-y-3">
        <button className="inline-flex items-center whitespace-nowrap text-sm font-medium border bg-background text-foreground hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3 w-full justify-start transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
            fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            className="w-6 h-6 mr-2">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="text-sm">View Reports</span>
        </button>
        <button className="inline-flex items-center whitespace-nowrap text-sm font-medium border bg-background text-foreground hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3 w-full justify-start transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
            fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            className="w-6 h-6 mr-2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
          <span className="text-sm">Export Data</span>
        </button>
        <button className="inline-flex items-center whitespace-nowrap text-sm font-medium border bg-background text-foreground hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3 w-full justify-start transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
            fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            className="w-6 h-6 mr-2">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="text-sm">Configure</span>
        </button>
        <button className="inline-flex items-center whitespace-nowrap text-sm font-medium border bg-background text-foreground hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3 w-full justify-start transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
            fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            className="w-6 h-6 mr-2">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <span className="text-sm">Notifications</span>
        </button>
      </div>
    </div>
  );
}
