import DetailedReportsAnalytics from "@/components/detailed-reports/DetailedReportsAnalytics"

const DetailedReports = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 py-12">
      <div className="w-full max-w-3xl">
        <DetailedReportsAnalytics />
        {/* Add other components or content related to Detailed Reports here */}
      </div>
    </div>
  )
}

export default DetailedReports
