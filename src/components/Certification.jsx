import React from 'react'
import TerminalTheme from './TerminalTheme'
import { useNavigate} from 'react-router';
import { useEffect } from 'react';

const Certification = () => {

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
      <a href="https://drive.google.com/file/d/1vddQnbKuTrobmWn2TrCwG9Uj-WTOuPbo/view?usp=drive_link">
        <TerminalTheme 
          heading='TryHackMe SOC Level 1 Learning Path Certification'  
          textAlign='text-left' 
          initialLines={
            ["DESCRIPTION",
             "  • Gained foundational skills in threat detection, incident response, and security monitoring essential for SOC analyst roles.",
             "  • Developed practical experience in analyzing security alerts and managing cybersecurity incidents in real-time."
            ]}
        />
      </a>

      <a href="https://drive.google.com/file/d/1vddQnbKuTrobmWn2TrCwG9Uj-WTOuPbo/view?usp=drive_link">
      <TerminalTheme 
          heading='Google Cybersecurity Professional Certification'  
          textAlign='text-left' 
          initialLines={
            ["DESCRIPTION",
             "  • Acquired comprehensive knowledge of cybersecurity principles including risk management, network security, and incident response.",
             "  • Hands-on experience with industry tools and techniques, preparing for entry-level cybersecurity positions."
            ]}
        />
      </a>
      
    </div>
  )
}

export default Certification
