import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import TerminalTheme from './TerminalTheme'


const Education = () => {
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
    <div className="flex flex-col items-center  max-h-[96vh] overflow-y-scroll overflow-x-hidden">
      {/* <h1 className='text-white text-8xl'>Education</h1> */}
      <TerminalTheme heading='Undergraduate Degree — Computer Science & Engineering      ' 
              initialLines={["Vellore Institute of Technology, Amaravati, Andhra Pradesh ",
                             "Bachelor's Degree in Computer Science             2021-2025"]}
      />
      <TerminalTheme heading='Class 12 — Higher Secondary Education                      ' 
              initialLines={["Pace Junior Science College, Mumbai                        ",
                             "Senior Secondary Certification in Science         2019-2021"]}
      />
      <TerminalTheme heading='Class 10 — Secondary Education                             ' 
              initialLines={["Pace Junior Science College, Mumbai                        ",
                             "Higher Secondary Certification in Science         2018-2019"]}
      />
                          
    </div>
  )
}

export default Education
