// ComplianceProfileKeyMetrics.tsx
import React from "react";

export default function ComplianceProfileKeyMetrics() {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] border-[var(--theme-border)] animate-slide-up shadow">
      {/* Card Header */}
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
        <h4 className="leading-none flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-ring)] rounded-lg flex items-center justify-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
              fill="none" stroke="currentColor" strokeWidth={2}
              strokeLinecap="round" strokeLinejoin="round"
              className="w-6 h-6 text-white">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <span className="text-lg font-semibold">Key Metrics</span>
        </h4>
      </div>
      {/* Card Content */}
      <div className="px-6 [&:last-child]:pb-6 space-y-4">
        {/* Total Assessments */}
        <div className="p-4 bg-[var(--theme-card)] rounded-lg border border-[var(--theme-border)]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" x2="8" y1="13" y2="13"/>
                <line x1="16" x2="8" y1="17" y2="17"/>
                <line x1="10" x2="8" y1="9" y2="9"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">
              Total Assessments
            </span>
          </div>
          <div className="text-3xl font-bold text-[var(--theme-foreground)]">0</div>
          <p className="text-xs text-[var(--theme-muted-foreground)]">
            Completed assessments
          </p>
        </div>
        {/* Average Score */}
        <div className="p-4 bg-[var(--theme-card)] rounded-lg border border-[var(--theme-border)]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-600">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">
              Average Score
            </span>
          </div>
          <div className="text-3xl font-bold text-[var(--theme-foreground)]">0%</div>
          <p className="text-xs text-[var(--theme-muted-foreground)]">
            Overall performance
          </p>
        </div>
        {/* Status */}
        <div className="p-4 bg-[var(--theme-card)] rounded-lg border border-[var(--theme-border)]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">Status</span>
          </div>
          <div className="text-xl font-bold text-green-600">Excellent</div>
          <p className="text-xs text-[var(--theme-muted-foreground)]">
            Compliance rating
          </p>
        </div>
        {/* Risk Level */}
        <div className="p-4 bg-[var(--theme-card)] rounded-lg border border-[var(--theme-border)]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-600">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                <path d="M12 9v4"/>
                <path d="M12 17h.01"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">Risk Level</span>
          </div>
          <div className="text-xl font-bold text-green-600">Low</div>
          <p className="text-xs text-[var(--theme-muted-foreground)]">
            Current risk assessment
          </p>
        </div>
      </div>
    </div>
  );
}
