import React from 'react'
import TerminalTheme from './TerminalTheme'
import { useNavigate} from 'react-router';
import { useEffect } from 'react';
import CertTheme from './CertTheme';
import { badgesList } from '../assets/database';
import { certificationsList } from '../assets/database';
import Badges from './Badges';


// const certificationsList = [[googleCyberSecurity,"Google Cybersecurity Professional"],
//         [googleCyberSecurity,"Google DevOps Professional"],
//         [googleCyberSecurity,"Google AIML Professional"],
//         [googleCyberSecurity,"Google AWS Professional"]
// ];// //src name
// const badgeList = [
//   "7c13c3cf-3d24-4481-8813-8de4ef6fccc3",
//   "5d374e85-914b-4a26-8fc9-7594e649b9a6",
//   "97423953-40fb-47e3-80a6-415f3894fa50",
//   "265725d5-29b6-420a-bccd-641442538f88",
// ]

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
    
    <div className='overflow-y-scroll w-full max-h-[93vh] m-auto'>
      
     
    <section id="certifications" className=" w-2/3 w-min-[400px] mx-auto">
  <div className="container mx-auto ">
    <div className="section-title mb-8">
      <h2 className=" text-xl relative after:content-[''] after:inline-block after:w-[120px] after:h-px after:bg-[#4ceb95] after:my-[4px] after:mx-[10px]">Certifications & Badges</h2>
      <p className="gap-x-6 gap-y-0 text-3xl font-bold">BADGES</p>

    </div>
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-1">
  {badgesList.map((id) => (
    <Badges key={id} id={id} />
  ))}
</div>
      
        <p className="gap-x-6 gap-y-6 text-3xl font-bold my-4 ">CERTIFICATIONS</p>

    <div
      className="
        grid gap-5
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2
      "
    >
      {certificationsList.map(([src, title], index) => (
        <CertTheme badgSrc={src} name={title} />

      ))}
      

      


      {/* Copy this block for each certificate */}

    </div>
  </div>


  
    {/* <div class="grid grid-cols-2 gap-5 max-md:grid-cols-1 overflow-y-scroll max-h-[95vh] w-full"> 
   <!-- Certificate 1 -->
   <div class="relative overflow-hidden rounded-lg group">
     <img src="../../public/images/Certificate/analystJr.png"
  //        alt="Certificate 1"
  //        class="w-full transition-transform duration-300 group-hover:scale-105" />

  //   <div class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 
  //               opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
  //     <h4 class="text-sm md:text-base">Google Cybersecurity Professional</h4>
  //   </div>
  // </div>

   <!-- Certificate 2 --> 
  // <div class="relative overflow-hidden rounded-lg group">
  //   <img src="../../public/images/Certificate/analystJr.png"
  //        alt="Certificate 2"
  //        class="w-full transition-transform duration-300 group-hover:scale-105" />

  //   <div class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 
  //               opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
  //     <h4 class="text-sm md:text-base">Data Analyst Associate</h4>
  //   </div>
  // </div>

  // <div class="relative overflow-hidden rounded-lg group">
  //   <img src="../../public/images/Certificate/analystJr.png"
  //        alt="Certificate 2"
  //        class="w-full transition-transform duration-300 group-hover:scale-105" />

  //   <div class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 
  //               opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
  //     <h4 class="text-sm md:text-base">Data Analyst Associate</h4>
  //   </div>
  // </div>

  // <div class="relative overflow-hidden rounded-lg group">
  //   <img src="../../public/images/Certificate/analystJr.png"
  //        alt="Certificate 2"
  //        class="w-full transition-transform duration-300 group-hover:scale-105" />

  //   <div class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 
  //               opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
  //     <h4 class="text-sm md:text-base">Data Analyst Associate</h4>
  //   </div>
  // </div>
      {/* <a href="https://drive.google.com/file/d/1vddQnbKuTrobmWn2TrCwG9Uj-WTOuPbo/view?usp=drive_link">
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
      
    // </div>*/}
    </section>
    </div>
  )
}

export default Certification
