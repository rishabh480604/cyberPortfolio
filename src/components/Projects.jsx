import React from 'react'
import { useNavigate } from 'react-router'
import { useEffect } from 'react';
import TerminalTheme from './TerminalTheme';
const Projects = () => {

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
    <div className='flex flex-col items-center max-h-[96vh] overflow-y-scroll overflow-x-hidden'>
      {/* <h1 className='text-white text-8xl'>Projects</h1> */}

      <TerminalTheme heading='Cyber Threat Intelligence Dashboard       ' 
              textAlign='text-left'
              initialLines={["DESCRIPTION",
                             "  • Engineered a real-time threat intelligence dashboard through integrating two APIs (VirusTotal, abuseIPDB), processing over 100 daily threat data points for enhanced cybersecurity monitoring.",
                             "  • Optimized data visualization through developing line graph displays with Python and Matplotlib, reducing rendering time by 50% for improved user accessibility.",
                             "  • Implemented data export functionality through coding CSV output capabilities, enabling analysis of 100+ threat records with malicious/benign tagging for actionable insights. "]}
      />

      <TerminalTheme heading='Honeypot-SentinelOne       ' 
              textAlign='text-left'
              initialLines={["DESCRIPTION",
              " • Deployed a honeypot VM on Azure to simulate real-world RDP attack scenarios and capture failed login attempts.   ",
              " • Parsed and enriched attack logs using PowerShell to extract IPs and threat data for automated threat intelligence.", 
              " • Integrated logs with Microsoft Sentinel to generate real-time alerts and support SIEM-driven detection workflows. "]}
      />

      



      

    </div>
  )
}

export default Projects
