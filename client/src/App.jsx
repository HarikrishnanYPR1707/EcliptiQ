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
import Template from "./pages/Template";
import Information from "./pages/Information";
import KeyWords from "./pages/KeyWords";
import {
  userProfileUrlContext,
  userEmailContext,
  isUserLoginContext,
} from "./Contexts/userDataContext";
import { currentResumeContext } from "./Contexts/ResumeContext";
import { useState } from "react";
import UserProfile from "./pages/UserProfile";

const App = () => {
  const [user, setUser] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [currentResumeId, setCurrentResumeId] = useState();
  const [userProfileUrlLink, setUserProfileUrlLink] = useState();
  return (
    <>
      <userProfileUrlContext.Provider
        value={{ userProfileUrlLink, setUserProfileUrlLink }}
      >
        <currentResumeContext.Provider
          value={{ currentResumeId, setCurrentResumeId }}
        >
          <isUserLoginContext.Provider value={{ isLogin, setIsLogin }}>
            <userEmailContext.Provider value={{ user, setUser }}>
              <Router>
                <Navbar />
                <div className="mx-auto w-full max-w-[1550px] stopper:px-0">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/templates" element={<Template />} />
                    <Route
                      path="/information/:resumeId"
                      element={<Information />}
                    />
                    <Route path="/keyword" element={<KeyWords />} />
                    <Route
                      path="/profile/:userName"
                      element={<UserProfile />}
                    />
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
            </userEmailContext.Provider>
          </isUserLoginContext.Provider>
        </currentResumeContext.Provider>
      </userProfileUrlContext.Provider>
    </>
  );
};

export default App;

// border border-purple-500 px-6 sm:border-red-500 md:border-blue-500 lg:border-green-500 xl:border-amber-500 2xl:border-rose-500 stopper:border-white
