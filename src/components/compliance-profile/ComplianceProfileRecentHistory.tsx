// ComplianceProfileRecentHistory.tsx
import React from "react";

export default function ComplianceProfileRecentHistory() {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] border-[var(--theme-border)] animate-slide-up">
      {/* Header */}
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
        <h4 className="leading-none flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-ring)] rounded-xl flex items-center justify-center p-2">
            <svg
              width={24}
              viewBox="0 0 24 24"
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-white"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
          </div>
          <div>
            <h3
              className="text-xl font-bold mb-0"
              style={{
                fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
                color: "var(--theme-foreground)"
              }}
            >
              Recent Assessment History
            </h3>
            <p
              className="mb-0"
              style={{
                fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
                fontWeight: 400,
                color: "var(--theme-muted-foreground)"
              }}
            >
              Latest pharmaceutical compliance assessments
            </p>
          </div>
        </h4>
      </div>
      {/* Card Content */}
      <div className="px-6 [&:last-child]:pb-6">
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-[var(--theme-muted)] rounded-full flex items-center justify-center mx-auto mb-6 opacity-50">
            <svg
              width={48}
              height={48}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-[var(--theme-muted-foreground)]"
            >
              <rect width={20} height={5} x={2} y={4} rx={2}></rect>
              <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"></path>
              <path d="M10 13h4"></path>
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-[var(--theme-foreground)] mb-3">No Assessments Yet</h4>
          <p className="text-[var(--theme-muted-foreground)] text-lg mb-6">
            Start your first pharmaceutical assessment to see comprehensive results and analytics here
          </p>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-ring)] hover:shadow-lg transition-all duration-300"
          >
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mr-2"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" x2="8" y1="13" y2="13"></line>
              <line x1="16" x2="8" y1="17" y2="17"></line>
              <line x1="10" x2="8" y1="9" y2="9"></line>
            </svg>
            Launch First Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
