import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BkElr from "./components/resumeTemplates/banking/BkElr";
import BkJlr from "./components/resumeTemplates/banking/BkJlr";
import BkSlr from "./components/resumeTemplates/banking/BkSlr";
import DaElr from "./components/resumeTemplates/da/DaElr";
import DaJlr from "./components/resumeTemplates/da/DaJlr";
import DaSlr from "./components/resumeTemplates/da/DaSlr";
import SdeElr from "./components/resumeTemplates/sde/SdeElr";
import SdeJlr from "./components/resumeTemplates/sde/SdeJlr";
import SdeSlr from "./components/resumeTemplates/sde/SdeSlr";
import Home from "./pages/Home";
import Information1 from "./pages/Information1";
import Template from "./pages/Template";
import Information from "./pages/Information";
// import { useState } from "react";
// import { InformationContext } from "./Contexts/InformationContext";

const App = () => {
  // const [userResumeData, setUserResumeData] = useState({
  //   personalDetails: {
  //     jobTitle: "",
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //   },
  //   professionalSummary: "",
  //   education: {
  //     college: "",
  //     degree: "",
  //     startDate: "",
  //     endDate: "",
  //     description: "",
  //   },
  //   experience: {
  //     jobTitle: "",
  //     employer: "",
  //     startDate: "",
  //     endDate: "",
  //     description: "",
  //   },
  //   socialLink: {
  //     link1: {
  //       label: "",
  //       link: "",
  //     },
  //     link2: {
  //       label: "",
  //       link: "",
  //     },
  //     link3: {
  //       label: "",
  //       link: "",
  //     },
  //     link4: {
  //       label: "",
  //       link: "",
  //     },
  //   },
  //   skills: {
  //     skill1: "",
  //     skill2: "",
  //     skill3: "",
  //     skill4: "",
  //     skill5: "",
  //     skill6: "",
  //   },
  //   language: {
  //     lang1: "",
  //     lang2: "",
  //     lang3: "",
  //   },
  // });

  return (
    <>
      {/* <InformationContext.Provider
        value={{ userResumeData, setUserResumeData }}
      > */}
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
            <Route path="/templates/bk/jlr" element={<BkJlr />} />
            <Route path="/templates/bk/slr" element={<BkSlr />} />
            <Route path="*" element={<div>404 Page</div>} />
          </Routes>
        </div>
      </Router>
      {/* </InformationContext.Provider> */}
    </>
  );
};

export default App;

// border border-purple-500 px-6 sm:border-red-500 md:border-blue-500 lg:border-green-500 xl:border-amber-500 2xl:border-rose-500 stopper:border-white
