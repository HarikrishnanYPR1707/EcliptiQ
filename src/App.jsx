import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Template from "./pages/Template";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="stopper:px-0 mx-auto h-heightWithoutNavbar w-full max-w-[1550px] border border-purple-500 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<Template />} />
            {/* <Route path="/templates/Banking" element={<div>Template Page</div>} /> */}
            {/* <Route path="/templates/Banking/template1" element={<div>Template Page</div>} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
