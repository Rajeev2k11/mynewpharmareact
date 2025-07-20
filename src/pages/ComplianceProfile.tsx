import ComplianceProfileKeyMetrics from "@/components/compliance-profile/ComplianceProfileKeyMetrics"
import ComplianceProfileMainCard from "@/components/compliance-profile/ComplianceProfileMainCard"
import ComplianceProfileQuickActions from "@/components/compliance-profile/ComplianceProfileQuickActions"
import ComplianceProfileRecentHistory from "@/components/compliance-profile/ComplianceProfileRecentHistory"
import ComplianceProfileRiskMatrix from "@/components/compliance-profile/ComplianceProfileRiskMatrix"

const ComplianceProfile = () => {
  return (
    <div className="min-h-screen w-full bg-gray-200 flex flex-col gap-8">
      {/* Main Profile Card */}
      <div className="w-full mx-auto mt-6 px-2">
        <ComplianceProfileMainCard />
      </div>
      {/* Key Metrics + Quick Actions - Responsive Grid */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
        <ComplianceProfileKeyMetrics />
        <ComplianceProfileQuickActions />
      </div>
      {/* Risk Matrix */}
      <div className="w-full mx-auto px-2">
        <ComplianceProfileRiskMatrix />
      </div>
      {/* Recent Assessment History */}
      <div className="w-full mx-auto mb-3 px-2">
        <ComplianceProfileRecentHistory />
      </div>
    </div>
  )
}

export default ComplianceProfile
