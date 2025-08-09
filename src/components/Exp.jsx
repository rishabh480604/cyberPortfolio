import React from 'react'
import TerminalTheme from './TerminalTheme'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
const Exp = () => {
  
  const navigate=useNavigate();
  useEffect(()=>{
    const backFunction = (e)=>{
      if(e.key ==='Backspace'){
        e.preventDefault();
        navigate("/");
      }

    }

    window.addEventListener('keydown',backFunction);
    return ()=> window.removeEventListener('keydown',backFunction);

  },[navigate]);

  return (
    <div>
      <div lassName="flex flex-col items-center w-full max-h-[80vh] ">
      <TerminalTheme heading='Cybersecurity Intern, Elevate Labs, Remote' textAlign='text-left' initialLines={
        ["• Completed daily cybersecurity tasks covering vulnerability analysis, threat detection, and log monitoring during the first 2 weeks                  ",
         "• Engineered a custom Cyber Threat Intelligence Dashboard using Flask and MongoDB to visualize real-time threat data from open-source APIs            ",
         "• Developed a Web Application Vulnerability Scanner with automated detection for XSS, SQLi, and CSRF using payload injection and regex-based matching.",
         "• Integrated scan results and intelligence into exportable formats (CSV, PDF) with a reporting interface for visibility and analysis.                 ",
         "• Demonstrated end-to-end development, reporting, and UI implementation for both tools with documented outputs and screenshots.                       "
        ]}
      />
                            
    </div>
    </div>
  )
}

export default Exp
