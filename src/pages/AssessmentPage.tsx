import AssessmentConfiguration from '@/components/assessment-rules/AssessmentConfiguration'
import AssessmentRulesConfig from '@/components/assessment-rules/AssessmentRulesConfig'
import AssessmentRulesList from '@/components/assessment-rules/AssessmentRulesList'
import StatsCards from '@/components/assessment-rules/StatsCards'


const AssessmentPage = () => {
  return (
    <>
    <div className="min-h-screen w-full  flex flex-col gap-8 ">
      {/* Stats Section */}
      <div className="w-full max-w-full mx-auto mt-6 px-2">
        <StatsCards />
      </div>
      {/* Config Section */}
      <div className="w-full  mx-auto px-2">
        <AssessmentRulesConfig />
      </div>
      {/* Rules List */}
      <div className="w-full mx-auto px-2">
        <AssessmentRulesList />
      </div>
      {/* Assessment Configuration (bottom) */}
      <div className="w-full mx-auto px-2">
        <AssessmentConfiguration />
      </div>
    </div>
   
    </>
  )
}

export default AssessmentPage
