import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BkElr from "./components/resumeTemplates/banking/BkElr";
import BkJlr from "./components/resumeTemplates/banking/BkJlr";
import DaElr from "./components/resumeTemplates/da/DaElr";
import DaJlr from "./components/resumeTemplates/da/DaJlr";
import DaSlr from "./components/resumeTemplates/da/DaSlr";
import SdeElr from "./components/resumeTemplates/sde/SdeElr";
import SdeJlr from "./components/resumeTemplates/sde/SdeJlr";
import SdeSlr from "./components/resumeTemplates/sde/SdeSlr";
import Home from "./pages/Home";
import Information1 from "./pages/Information1";
import Template from "./pages/Template";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="mx-auto w-full max-w-[1550px] stopper:px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<Template />} />
            <Route path="/information" element={<Information1 />} />
            <Route path="/templates/sde/elr" element={<SdeElr />} />
            <Route path="/templates/sde/jlr" element={<SdeJlr />} />
            <Route path="/templates/sde/slr" element={<SdeSlr />} />
            <Route path="/templates/da/elr" element={<DaElr />} />
            <Route path="/templates/da/jlr" element={<DaJlr />} />
            <Route path="/templates/da/slr" element={<DaSlr />} />
            <Route path="/templates/bk/elr" element={<BkElr />} />
            {/* <Route path="/templates/bk/jlr" element={<DaJlr />} /> */}
            <Route path="/templates/bk/slr" element={<BkJlr />} />
            <Route path="*" element={<div>404 Page</div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

// border border-purple-500 px-6 sm:border-red-500 md:border-blue-500 lg:border-green-500 xl:border-amber-500 2xl:border-rose-500 stopper:border-white
