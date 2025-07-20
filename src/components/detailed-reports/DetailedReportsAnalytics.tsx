// DetailedReportsAnalytics.tsx
import React from "react";

export default function DetailedReportsAnalytics() {
  return (
    <div className="[&:last-child]:pb-6 p-8 text-center">
      <h3
        className="text-xl mb-2 font-bold"
        style={{
          fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
          color: "var(--theme-foreground)"
        }}
      >
        Detailed Reports Analytics
      </h3>
      <p
        style={{
          fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)',
          fontWeight: 400,
          color: "var(--theme-muted-foreground)"
        }}
      >
        Advanced audit reports and comprehensive analytics dashboard
      </p>
    </div>
  );
}
