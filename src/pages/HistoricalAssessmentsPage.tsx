import HistoricalAssessmentStats from "@/components/historical-assessments/HistoricalAssessmentStats"
import HistoryDraft from "@/components/historical-assessments/HistoryDraft"

const HistoricalAssessmentsPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-200 flex flex-col gap-8 px-2">
      {/* Stats Section */}
      <div className="w-full mx-auto mt-6 px-2">
        <HistoricalAssessmentStats />
      </div>
      {/* Draft/History Tabs Section */}
      <div className="w-full mx-auto px-2">
        <HistoryDraft />
      </div>
    </div>
  )
}

export default HistoricalAssessmentsPage
