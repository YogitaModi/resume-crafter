import "./App.css";

import Resume from "./Resume";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import ProfileState from "./ProfileState";
import Display from "./Display";
// import DemoComponent from "./DemoComponent";

function App() {
  let [progress, setProgress] = useState(0);
  const setProgres = (progress) => {
    setProgress({ progress: progress });
  };
  return (
    <div className="App">
      <ProfileState>
        <Router>
          <Navbar />
          <LoadingBar height={3} color="#f11946" Progress={progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home setProgress={() => setProgres(progress)} />}
            />
            <Route
              exact
              path="/create-resume"
              element={<Resume setProgress={setProgres} />}
            />
            <Route exact path="/display-resume" element={<Display />} />
          </Routes>
        </Router>
      </ProfileState>
    </div>
  );
}

export default App;
