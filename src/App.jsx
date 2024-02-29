import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Template from "./pages/Template";
import Information from "./pages/Information";
import Information1 from "./pages/Information1";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="mx-auto w-full max-w-[1550px] stopper:px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<Template />} />
            {/* <Route path="/information" element={<Information />} /> */}
            <Route path="/information" element={<Information1 />} />
            <Route
              path="/sampleTemplate"
              element={
                <div className="flex h-screen items-center justify-center text-5xl font-black">
                  sampleTemplate
                </div>
              }
            />
            <Route path="/templates/sde/slr" element={<div>Template-1</div>} />
            {/* <Route path="/templates/Banking/template1" element={<div>Template Page</div>} /> */}
            <Route path="*" element={<div>404 Page</div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

// border border-purple-500 px-6 sm:border-red-500 md:border-blue-500 lg:border-green-500 xl:border-amber-500 2xl:border-rose-500 stopper:border-white
