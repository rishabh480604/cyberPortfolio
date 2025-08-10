import React from "react";
import TerminalsGrid from "./components/ContactUs";
import "./App.css"; // Add grid/flex styles!
import { BrowserRouter, Routes, Route } from "react-router";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Exp from "./components/Exp";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Dashboard from "./components/Dashboard";
import { Outlet } from "react-router";
import MatrixRain from "./components/Matrix";
import TerminalHandler from "./components/TerminalHandler";
import TerminalAlerts from "./components/TerminalAlerts";
import ContactUs from "./components/ContactUs";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} >
          <Route index element={<TerminalHandler/>}/>
          <Route path="/skill" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Exp />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<ContactUs />} />

        </Route>
        
        {/* <Route path="about" element={<TerminalHandler />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
