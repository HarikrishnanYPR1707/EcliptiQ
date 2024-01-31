import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="mx-auto h-heightWithoutNavbar w-full max-w-[1550px] border border-purple-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<div>Template Page</div>} />
            {/* <Route path="/templates/Banking" element={<div>Template Page</div>} /> */}
            {/* <Route path="/templates/Banking/template1" element={<div>Template Page</div>} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
