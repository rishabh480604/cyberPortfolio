import React from 'react'
import MatrixRain from './Matrix'
import TerminalAlerts from './TerminalAlerts'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

const Skills = () => {

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
    <div className="flex justify-center items-center w-full h-[90vh] ">
      <div
        className="
          w-full max-w-6xl h-full
          grid grid-cols-1 md:grid-cols-2 
          grid-rows-2 md:grid-rows-2
          gap-4
        "
      >
        <div className="flex items-center justify-center w-full">
          <TerminalAlerts
            words={['Wazuh', 'Velociraptor', 'OpenCTI', 'TheHive', 'Cortex', 'MISP']}
            heading="Security Tools"
          />
        </div>
  
        <div className="flex items-center justify-center w-full m-3">
          <TerminalAlerts
            heading="Digital Forensics"
            words={['Volatility', 'REMnux', 'Flare VM']}
          />
        </div>
  
        <div className="flex items-center justify-center">
          <TerminalAlerts
            heading="Log Analysis & Threat Detection"
            words={['ELK Stack', 'Sysmon', 'Winlogbeat']}
          />
        </div>
  
        <div className="flex items-center justify-center">
          <TerminalAlerts
            heading="Network Security"
            words={['pfSense', 'IDS', 'IPS']}
          />
        </div>
      </div>
    </div>
  );
}
  

export default Skills
