import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Template from "./pages/Template";
import Information from "./pages/Information";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="mx-auto w-full max-w-[1550px] border border-purple-500 px-6 sm:border-red-500 md:border-blue-500 lg:border-green-500 xl:border-amber-500 2xl:border-rose-500 stopper:border-white stopper:px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<Template />} />
            <Route path="/information" element={<Information />} />
            {/* <Route path="/templates/Banking" element={<div>Template Page</div>} /> */}
            {/* <Route path="/templates/Banking/template1" element={<div>Template Page</div>} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

// lksajdlfkjlkjalksjdf
