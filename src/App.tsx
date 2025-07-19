import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Header from "./components/Hearder";
import { InitialCompanySetupModal } from "./pages/InitialCompanySetupModal";



function App() {

  return (
    <BrowserRouter>
    <Header />
      {/* <nav className="flex gap-4 p-4 bg-gray-100">
        <Link to="/initialCompanySetup" className="text-blue-500 hover:underline">InitialCompanySetup</Link>
        <Link to="/changeCompanyParameter" className="text-blue-500 hover:underline">Change Company Parameter</Link>
        <Link to="/about" className="text-green-500 hover:underline">About</Link>
      </nav> */}
      <div className="p-4">
        <Routes>
          <Route path="/initialCompanySetup" element={<InitialCompanySetupModal />} />
         
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
