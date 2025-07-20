import { useState } from "react";
import type { ChangeEvent } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AssessmentRulesConfig() {
  const [activeTab, setActiveTab] = useState<"upload" | "adhoc">("upload");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleTab = (tab: "upload" | "adhoc") => setActiveTab(tab);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] border-[var(--theme-border)] shadow animate-slide-up animate-stagger-2">
      {/* Header */}
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
        <h4 className="leading-none flex items-center gap-2 font-bold text-[var(--theme-foreground)] text-lg font-['Cairo',sans-serif]">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}
            strokeLinecap="round" strokeLinejoin="round"
            className="w-6 h-6 text-[var(--theme-primary)]">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <line x1="10" x2="8" y1="9" y2="9" />
          </svg>
          Assessment Rules Configuration
        </h4>
      </div>

      {/* Tabs */}
      <div className="px-6 w-full">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="bg-muted text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-2 lg:w-[400px] mb-6"
        >
          <button
            role="tab"
            aria-selected={activeTab === "upload"}
            type="button"
            tabIndex={0}
            className={classNames(
              "h-[calc(100%-1px)] flex-1 justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] flex items-center gap-2",
              activeTab === "upload" ?
                "bg-card text-foreground shadow font-bold"
                : "text-foreground/80 hover:text-[var(--theme-primary)]"
            )}
            onClick={() => handleTab("upload")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            Upload Rules
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "adhoc"}
            type="button"
            tabIndex={0}
            className={classNames(
              "h-[calc(100%-1px)] flex-1 justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] flex items-center gap-2",
              activeTab === "adhoc" ?
                "bg-card text-foreground shadow font-bold"
                : "text-foreground/80 hover:text-[var(--theme-primary)]"
            )}
            onClick={() => handleTab("adhoc")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
            </svg>
            Adhoc Prompt
          </button>
        </div>

        {/* Tabs Content */}
        <div className="flex-1 outline-none space-y-6 w-full">
          {activeTab === "upload" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Download Template */}
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-[var(--theme-border)]">
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
                  <h4 className="flex items-center gap-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor"
                      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[var(--theme-primary)]">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Download Template
                  </h4>
                  <p className="text-sm text-[var(--theme-muted-foreground)]">
                    Download the Excel template to define your business rules offline.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-full border border-[var(--theme-primary)] bg-background text-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/10 transition-all h-9 px-4 py-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor"
                      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <path d="M8 13h2"/>
                      <path d="M8 17h2"/>
                      <path d="M14 13h2"/>
                      <path d="M14 17h2"/>
                    </svg>
                    Download Excel Template
                  </button>
                </div>
              </div>
              {/* Upload File */}
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-[var(--theme-border)]">
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
                  <h4 className="flex items-center gap-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor"
                      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[var(--theme-primary)]">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" x2="12" y1="3" y2="15"/>
                    </svg>
                    Upload Rules File
                  </h4>
                  <p className="text-sm text-[var(--theme-muted-foreground)]">
                    Upload your completed Excel file to import business rules.
                  </p>
                </div>
                <div className="px-6 pb-6 space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="file-upload" className="flex items-center gap-2 text-sm leading-none font-semibold font-['Cairo',sans-serif] text-[var(--theme-foreground)]">
                      Select File
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".xlsx,.xls,.csv"
                      className="block w-full text-sm text-[var(--theme-foreground)] border border-[var(--theme-border)] rounded-lg cursor-pointer bg-[var(--theme-card)] focus:outline-none"
                      onChange={onFileChange}
                    />
                  </div>
                  <button
                    disabled={!selectedFile}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-full bg-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/90 text-[#A49ED9] h-9 px-4 py-2 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor"
                      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" x2="12" y1="3" y2="15"/>
                    </svg>
                    Process Upload
                  </button>
                </div>
              </div>
              {/* Instructions */}
              <div className="text-card-foreground flex flex-col gap-6 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-secondary)]/30 lg:col-span-2">
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
                  <h4 className="flex items-center gap-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor"
                      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[var(--theme-primary)]">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" x2="8" y1="13" y2="13"/>
                      <line x1="16" x2="8" y1="17" y2="17"/>
                      <line x1="10" x2="8" y1="9" y2="9"/>
                    </svg>
                    Template Instructions
                  </h4>
                </div>
                <div className="px-6 pb-6">
                  <div className="space-y-3 text-sm text-[var(--theme-muted-foreground)]">
                    {[1,2,3,4].map(i=>
                      <div className="flex items-start gap-2" key={i}>
                        <span className="font-semibold text-[var(--theme-primary)] min-w-[20px]">{i}.</span>
                        <span>
                          {i === 1 && "Download the Excel template above to get the correct format."}
                          {i === 2 && "Fill in the required columns: Category, Rule Name, Criticality (critical/major/minor), Description, and Enabled (TRUE/FALSE)."}
                          {i === 3 && "Save your file as Excel (.xlsx) or CSV (.csv) format."}
                          {i === 4 && <>Upload the file and click <b>&quot;Process Upload&quot;</b> to import your rules.</>}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "adhoc" && (
            <div className="w-full">
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-[var(--theme-border)]">
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
                  <h4 className="flex items-center gap-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor"
                      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[var(--theme-primary)]">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                      <path d="M5 3v4"/>
                      <path d="M19 17v4"/>
                      <path d="M3 5h4"/>
                      <path d="M17 19h4"/>
                    </svg>
                    AI-Powered Rule Generation
                  </h4>
                  <p className="text-sm text-[var(--theme-muted-foreground)]">
                    Describe what type of rules you need and our AI will generate comprehensive business rules for your assessment.
                  </p>
                </div>
                <div className="px-6 pb-6 space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm leading-none font-semibold font-['Cairo',sans-serif] text-[var(--theme-foreground)]">
                      Describe Your Requirements
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Example: I need rules for validating pharmaceutical manufacturing processes according to FDA guidelines, focusing on batch record integrity, equipment qualification, and personnel training..."
                      className="resize-none placeholder:text-muted-foreground flex w-full rounded-md border border-[var(--theme-border)] px-3 py-2 text-base outline-none focus-visible:ring-[3px] bg-[var(--theme-card)] min-h-[120px] focus:border-[var(--theme-primary)] transition-all duration-300"
                    />
                  </div>
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/90 text-[var(--theme-primary-foreground)] transition-all w-fit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor"
                      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    Generate Rules with AI
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
