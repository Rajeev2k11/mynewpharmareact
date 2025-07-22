import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Hearder";
import { InitialCompanySetupModal } from "./pages/InitialCompanySetupModal";
import TabsNav from "./components/TabsNav";
import AssessmentPage from "./pages/AssessmentPage";
import HistoricalAssessmentsPage from "./pages/HistoricalAssessmentsPage";
import ComplianceProfile from "./pages/ComplianceProfile";
import DetailedReports from "./pages/DetailedReports";
import { SettingsSidebar } from "./components/sidebar/SettingsSidebar";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { UserRoleManagement } from "./pages/UserRoleManagement";

function App() {
    const { isOpenSidebar} = useSelector((state: RootState) => state.companies);
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-gradient-to-br from-[var(--theme-background)] via-[var(--theme-secondary)] to-[var(--theme-accent)] flex flex-col">
        {/* Main Header + Tabs – sticks to top, always same width */}
        <header className="w-full shadow-sm backdrop-blur z-50">
          <div className="w-full max-w-full mx-auto ">
            <Header />
            {window.location.pathname === "/" && (
              <div className="mt-3 px-2" >
                <TabsNav /> 
              </div>
            )}
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 w-full bg-[#d2cdff4f]">
          <div className="w-full max-w-full mx-auto ">
            <Routes>
              <Route path="/" element={<AssessmentPage />} />
              <Route path="/historical-assessments" element={<HistoricalAssessmentsPage />} />
              <Route path="/compliance-profile" element={<ComplianceProfile />} />
              <Route path="/detailed-reports" element={<DetailedReports />} />
              <Route path="/initialCompanySetup" element={<InitialCompanySetupModal />} />
              <Route path="/userRoleManagement" element={<UserRoleManagement />} />
              <Route path="/about" element={<About />} />
              {/* Default redirect to assessment-rules (optional) */}
              {/* <Route path="*" element={<Navigate to="/assessment-rules" />} /> */}
            </Routes>
          </div>
        </main>
          {isOpenSidebar &&  <SettingsSidebar  />}
      </div>
    </BrowserRouter>
  );
}

export default App;
