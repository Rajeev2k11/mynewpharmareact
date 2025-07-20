// ComplianceProfileMainCard.tsx
import React from "react";

export default function ComplianceProfileMainCard() {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-gradient-to-br from-[var(--theme-card)] via-[var(--theme-secondary)] to-[var(--theme-accent)] border-[var(--theme-border)] shadow-2xl animate-slide-up">
      {/* Header */}
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 pb-6">
        <h4 className="leading-none flex items-center gap-4">
          <div className="w-15 h-15 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-ring)] rounded-2xl flex items-center justify-center shadow-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}
              fill="none" stroke="currentColor" strokeWidth={2}
              strokeLinecap="round" strokeLinejoin="round"
              className="w-8 h-8 text-white">
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              <path d="M10 6h4" />
              <path d="M10 10h4" />
              <path d="M10 14h4" />
              <path d="M10 18h4" />
            </svg>
          </div>
          <div>
            <h2
              className="text-3xl mb-2 font-bold"
              style={{
                fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
                color: "var(--theme-foreground)"
              }}
            >
              Company Compliance Profile
            </h2>
            <p
              className="text-lg"
              style={{
                fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
                fontWeight: 400,
                color: "var(--theme-muted-foreground)"
              }}
            >
              Comprehensive pharmaceutical assessment management and compliance tracking
            </p>
          </div>
        </h4>
      </div>
      {/* Overview Section */}
      <div className="px-6 space-y-8 [&:last-child]:pb-6">
        <div className="space-y-6">
          {/* Overview Heading */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}
                fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                strokeLinejoin="round" className="w-8 h-8 text-blue-600">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[var(--theme-foreground)]">Company Overview</h3>
          </div>
          {/* Company Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="flex items-center justify-between p-4 bg-[var(--theme-card)] rounded-lg border border-[var(--theme-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      className="w-6 h-6 text-purple-600">
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                      <path d="M10 6h4"/>
                      <path d="M10 10h4"/>
                      <path d="M10 14h4"/>
                      <path d="M10 18h4"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">Company Name</span>
                </div>
                <span className="text-sm font-semibold text-[var(--theme-foreground)]">Auryis Pharmaceuticals</span>
              </div>
              {/* Row 2 */}
              <div className="flex items-center justify-between p-4 bg-[var(--theme-card)] rounded-lg border border-[var(--theme-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      className="w-6 h-6 text-green-600">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">Industry</span>
                </div>
                <span className="text-sm font-semibold text-[var(--theme-foreground)]">Pharmaceutical</span>
              </div>
              {/* Row 3 */}
              <div className="flex items-center justify-between p-4 bg-[var(--theme-card)] rounded-lg border border-[var(--theme-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      className="w-6 h-6 text-blue-600">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" x2="22" y1="12" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">Region</span>
                </div>
                <span className="text-sm font-semibold text-[var(--theme-foreground)]">Global Operations</span>
              </div>
            </div>
            <div className="space-y-4">
              {/* Row 4 */}
              <div className="flex items-center justify-between p-4 bg-[var(--theme-card)] rounded-lg border border-[var(--theme-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      className="w-6 h-6 text-orange-600">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">Team Size</span>
                </div>
                <span className="text-sm font-semibold text-[var(--theme-foreground)]">250+ Employees</span>
              </div>
              {/* Row 5 */}
              <div className="flex items-center justify-between p-4 bg-[var(--theme-card)] rounded-lg border border-[var(--theme-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      className="w-6 h-6 text-red-600">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">Compliance</span>
                </div>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap bg-green-100 text-green-800">Active</span>
              </div>
              {/* Row 6 */}
              <div className="flex items-center justify-between p-4 bg-[var(--theme-card)] rounded-lg border border-[var(--theme-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      className="w-6 h-6 text-indigo-600">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">Established</span>
                </div>
                <span className="text-sm font-semibold text-[var(--theme-foreground)]">2018</span>
              </div>
            </div>
          </div>
        </div>
        {/* Compliance Progress Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                strokeLinejoin="round" className="w-6 h-6 text-green-600">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[var(--theme-foreground)]">Compliance Progress</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Progress 1: FDA */}
            <div className="p-6 bg-[var(--theme-card)] rounded-xl border border-[var(--theme-border)] hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      className="w-6 h-6 text-blue-600">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[var(--theme-foreground)]">FDA Compliance</span>
                </div>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap bg-green-100 text-green-800">92%</span>
              </div>
              <div role="progressbar" aria-valuemax={100} aria-valuemin={0} className="bg-primary/20 relative w-full overflow-hidden rounded-full h-3 mb-2">
                <div className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: "translateX(-8%)" }} />
              </div>
              <p className="text-xs text-[var(--theme-muted-foreground)]">Excellent compliance with FDA regulations</p>
            </div>
            {/* Progress 2: EMA */}
            <div className="p-6 bg-[var(--theme-card)] rounded-xl border border-[var(--theme-border)] hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      className="w-6 h-6 text-purple-600">
                      <circle cx="12" cy="8" r="6"></circle>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[var(--theme-foreground)]">EMA Compliance</span>
                </div>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap bg-green-100 text-green-800">88%</span>
              </div>
              <div role="progressbar" aria-valuemax={100} aria-valuemin={0} className="bg-primary/20 relative w-full overflow-hidden rounded-full h-3 mb-2">
                <div className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: "translateX(-12%)" }} />
              </div>
              <p className="text-xs text-[var(--theme-muted-foreground)]">Strong compliance with European standards</p>
            </div>
            {/* Progress 3: Quality Standards */}
            <div className="p-6 bg-[var(--theme-card)] rounded-xl border border-[var(--theme-border)] hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      className="w-6 h-6 text-yellow-600">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-[var(--theme-foreground)]">Quality Standards</span>
                </div>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap bg-green-100 text-green-800">95%</span>
              </div>
              <div role="progressbar" aria-valuemax={100} aria-valuemin={0} className="bg-primary/20 relative w-full overflow-hidden rounded-full h-3 mb-2">
                <div className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: "translateX(-5%)" }} />
              </div>
              <p className="text-xs text-[var(--theme-muted-foreground)]">Outstanding quality management system</p>
            </div>
            {/* Progress 4: Security Standards */}
            <div className="p-6 bg-[var(--theme-card)] rounded-xl border border-[var(--theme-border)] hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      className="w-6 h-6 text-red-600">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-[var(--theme-foreground)]">Security Standards</span>
                </div>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap bg-yellow-100 text-yellow-800">85%</span>
              </div>
              <div role="progressbar" aria-valuemax={100} aria-valuemin={0} className="bg-primary/20 relative w-full overflow-hidden rounded-full h-3 mb-2">
                <div className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: "translateX(-15%)" }} />
              </div>
              <p className="text-xs text-[var(--theme-muted-foreground)]">Good security compliance, room for improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
