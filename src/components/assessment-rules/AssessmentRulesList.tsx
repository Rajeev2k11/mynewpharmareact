
const rules = [
  {
    checked: true,
    disabled: false,
    opacity: "",
    badges: [
      {
        text: "GMP Compliance",
        color: "border-[var(--theme-primary)] text-[var(--theme-primary)]",
        bg: "",
        icon: null,
      },
      {
        text: "critical",
        color: "bg-red-100 text-red-800 border-red-200",
        bg: "bg-red-100",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4" // Increased from w-3 h-3 for better visibility
            aria-hidden="true"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        ),
      },
    ],
    title: "Verify batch record completeness and accuracy",
    desc: "Ensure all batch records are complete, accurate, and properly signed according to GMP requirements",
    titleColor: "text-[var(--theme-foreground)]",
    descColor: "text-[var(--theme-muted-foreground)]",
  },
  {
    checked: true,
    disabled: false,
    opacity: "",
    badges: [
      {
        text: "Quality Control",
        color: "border-[var(--theme-primary)] text-[var(--theme-primary)]",
        bg: "",
        icon: null,
      },
      {
        text: "major",
        color: "bg-orange-100 text-orange-800 border-orange-200",
        bg: "bg-orange-100",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4" // Increased from w-3 h-3 for better visibility
            aria-hidden="true"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        ),
      },
    ],
    title: "Review analytical method validation",
    desc: "Validate that all analytical methods meet regulatory requirements and are properly documented",
    titleColor: "text-[var(--theme-foreground)]",
    descColor: "text-[var(--theme-muted-foreground)]",
  },
  {
    checked: true,
    disabled: false,
    opacity: "",
    badges: [
      {
        text: "Documentation",
        color: "border-[var(--theme-primary)] text-[var(--theme-primary)]",
        bg: "",
        icon: null,
      },
      {
        text: "major",
        color: "bg-orange-100 text-orange-800 border-orange-200",
        bg: "bg-orange-100",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4" // Increased from w-3 h-3 for better visibility
            aria-hidden="true"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        ),
      },
    ],
    title: "Check SOP approval and version control",
    desc: "Verify SOPs are current, approved, and version controlled according to company procedures",
    titleColor: "text-[var(--theme-foreground)]",
    descColor: "text-[var(--theme-muted-foreground)]",
  },
  {
    checked: false,
    disabled: false,
    opacity: "opacity-60",
    badges: [
      {
        text: "Environmental Monitoring",
        color: "border-[var(--theme-primary)] text-[var(--theme-primary)]",
        bg: "",
        icon: null,
      },
      {
        text: "minor",
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
        bg: "bg-yellow-100",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4" // Increased from w-3 h-3 for better visibility
            aria-hidden="true"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        ),
      },
    ],
    title: "Assess environmental monitoring program",
    desc: "Review environmental monitoring procedures and data integrity",
    titleColor: "text-[var(--theme-muted-foreground)]",
    descColor: "text-[var(--theme-muted-foreground)]",
  },
];

export default function AssessmentRulesList() {
  function handleCheckboxChange(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] border-[var(--theme-border)] shadow animate-slide-up animate-stagger-3">
      {/* Header */}
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
        <div className="flex items-center justify-between">
          <h4 className="leading-none flex items-center gap-2 font-bold text-[var(--theme-foreground)] font-['Cairo',sans-serif]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[var(--theme-primary)]"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Current Assessment Rules
          </h4>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border bg-background border-[var(--theme-primary)] text-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/10 transition-all h-8 rounded-md gap-1.5 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mr-2"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Manual Rule
          </button>
        </div>
      </div>

      {/* Rule Card List */}
      <div className="px-6 pb-6 space-y-4">
        <div className="space-y-3">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className={`group bg-[var(--theme-card)] p-4 rounded-lg border border-[var(--theme-border)] transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${rule.opacity}`}
            >
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <div className="flex items-center pt-1">
                  <div className="relative inline-block">
                    <input
                      type="checkbox"
                      id={`rule-checkbox-${rule.checked}`}
                      checked={rule.checked}
                      onChange={() => handleCheckboxChange()}
                      className="peer absolute opacity-0 h-4 w-4"
                    />
                    <label
                      htmlFor={`rule-checkbox-${rule.checked}`}
                      className={`
      inline-flex items-center justify-center
      h-4 w-4 rounded-[4px] border shadow-xs
      bg-input-background 
      peer-checked:bg-primary
      peer-checked:border-primary
      peer-focus-visible:ring-[3px]
      peer-focus-visible:border-ring
      peer-focus-visible:ring-ring/50
      transition-all duration-300
      cursor-pointer
    `}
                    >
                      {rule.checked && (
                        <span className="text-xs font-medium text-primary-foreground"></span>
                      )}
                    </label>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {rule.badges.map((badge, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap text-xs font-['Cairo',sans-serif] mr-1 ${badge.color} flex items-center gap-1`}
                      >
                        {badge.icon && badge.icon}
                        {badge.text}
                      </span>
                    ))}
                  </div>
                  <h4
                    className={`font-semibold font-['Cairo',sans-serif] text-sm mb-1 transition-all duration-300 ${rule.titleColor}`}
                  >
                    {rule.title}
                  </h4>
                  <p
                    className={`font-normal font-['Cairo',sans-serif] text-xs ${rule.descColor}`}
                  >
                    {rule.desc}
                  </p>
                </div>
                {/* Delete Button */}
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-8 rounded-md gap-1.5 px-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-600 hover:text-red-700 hover:bg-red-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
