// AssessmentConfiguration.tsx

export default function AssessmentConfiguration() {
  return (
    <div className="[&:last-child]:pb-6 p-6 bg-card-content rounded-xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-primary)] rounded-xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}
            strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <line x1="10" x2="8" y1="9" y2="9" />
          </svg>
        </div>
        <div>
          <h3
            className="text-xl font-bold"
            style={{
              fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
              color: "var(--theme-foreground)",
            }}
          >
            Assessment Configuration
          </h3>
          <p
            style={{
              fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
              fontWeight: 400,
              color: "var(--theme-muted-foreground)",
            }}
          >
            Configure audit parameters and assessment criteria
          </p>
        </div>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Compliance Standards */}
        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-[var(--theme-card)] border-[var(--theme-border)] hover:shadow-lg transition-all">
          <div className="[&:last-child]:pb-6 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round"
                  className="w-6 h-6 text-blue-600">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h4
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
                    color: "var(--theme-foreground)",
                  }}
                >
                  Compliance Standards
                </h4>
              </div>
            </div>
            <p
              className="text-xs"
              style={{
                fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
                fontWeight: 400,
                color: "var(--theme-muted-foreground)",
              }}
            >
              Configure FDA, EMA, and other regulatory compliance standards
            </p>
          </div>
        </div>
        {/* Risk Thresholds */}
        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-[var(--theme-card)] border-[var(--theme-border)] hover:shadow-lg transition-all">
          <div className="[&:last-child]:pb-6 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round"
                  className="w-6 h-6 text-green-600">
                  <path d="M3 3v18h18"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <div>
                <h4
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
                    color: "var(--theme-foreground)",
                  }}
                >
                  Risk Thresholds
                </h4>
              </div>
            </div>
            <p
              className="text-xs"
              style={{
                fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
                color: "var(--theme-muted-foreground)",
                fontWeight: 400,
              }}
            >
              Set critical, major, and minor risk level thresholds
            </p>
          </div>
        </div>
        {/* AI Parameters */}
        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-[var(--theme-card)] border-[var(--theme-border)] hover:shadow-lg transition-all">
          <div className="[&:last-child]:pb-6 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round"
                  className="w-6 h-6 text-purple-600">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
                    color: "var(--theme-foreground)",
                  }}
                >
                  AI Parameters
                </h4>
              </div>
            </div>
            <p
              className="text-xs"
              style={{
                fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
                color: "var(--theme-muted-foreground)",
                fontWeight: 400,
              }}
            >
              Configure AI analysis sensitivity and processing options
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
