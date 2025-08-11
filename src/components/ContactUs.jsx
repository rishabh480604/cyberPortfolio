import React from 'react'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
const ContactUs = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  
  const contactFormHandler=(e)=>{
    e.preventDefault();
    
    if(!name || !subject || !message){
      alert("Please fill all the fields to connect.");

      return;
    }
      // const body = encodeURIComponent(`I am ${name}. ${message}`);
      // const to = 'your-email@example.com';
  
      // window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      const sender = encodeURIComponent(name);
      const sub=encodeURIComponent(subject);
      const to = 'rishabh480604@gmail.com';
      // const subject = encodeURIComponent();
      const body = encodeURIComponent(`Dear Sahil Borse,\n${message} \n \nWarm Regards \n${sender}`);

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${sub}&body=${body}`;

      window.open(gmailUrl, '_blank');
    

  }
  // useEffect(()=>{
  //   const backFunction = (e)=>{
  //     if(e.key ==='Backspace'){
  //       e.preventDefault();
  //       navigate("/");
  //     }

  //   }

  //   window.addEventListener('keydown',backFunction);
  //   return ()=> window.removeEventListener('keydown',backFunction);

  // },[navigate]);
  
  return (
    <div className="flex justify-center items-center  font-[courier_new] h-[90vh] ">
      <div className="m-0 sm:m-[5%] bg-[#111] rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.4)] overflow-hidden w-screen h-fit">      
        {/* Title bar */}
        <div 
          className="h-10 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] grid grid-cols-[auto_1fr_auto] items-center px-[10px] text-[#ccc] w-screen text-[clamp(0.8rem,1vw+0.5rem,1.5rem)] font-bold" >
          <div className="flex gap-[6px]">
            <div className="w-[12px] h-[12px] rounded-full bg-[#ff5f56]"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-[#ffbd2e]"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-[#27c93f]"></div>

          </div>
          <div className="text-center">Connect With Me</div>
          {/* <div className="w-[54px]"></div> */}

        </div>
       

      <div className=' text-2xl rounded-3xl font-bold text-center flex-col items-center min-w-xl '>
        <h1 className=' text-4xl w-full py-2 text-gray-300/80'></h1>
        {/* <div className=''> */}
        <input type="text" name="name" placeholder='  Name' onChange={(e)=>setName(e.target.value)} value={name} className='border-green-700 border-2 rounded-xl text-2xl bg-green-600/20 text-gray-300/80 w-11/12 p-2 m-2'/>
        {/* </div> */}
        {/* <div className=''> */}
        <input type="text" name="subject" placeholder=' Subject' onChange={(e)=>setSubject(e.target.value)}  value={subject} className='border-green-700 border-2 rounded-xl text-2xl bg-green-600/20 text-gray-300/80 w-11/12 p-2 m-2'/>
        {/* </div> */}
        {/* <div className='w-full py-2'> */}
        <textarea rows="8" cols="100%"  type="text"  placeholder=' Message' onChange={(e)=>{setMessage(e.target.value)}}  value={message} className='border-green-700 border-2 rounded-xl text-2xl bg-green-600/20 text-gray-300/80 w-11/12 p-2 m-2'></textarea>
        {/* </div> */}
        <div className='w-full'>
        <button type="submit" className='border-green-700 border-2 rounded-xl text-2xl bg-green-600/40 p-2 text-gray-300/80 ' onClick={contactFormHandler}>Connect</button>
        
        
        </div>
        
        

      </div>
        
    </div>
    </div>
  )
}

export default ContactUs
