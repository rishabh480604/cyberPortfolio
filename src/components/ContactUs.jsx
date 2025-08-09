import React from 'react'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
const ContactUs = () => {

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
        <h1 className='text-white text-8xl'>Skills</h1>
    </div>
  )
}

export default ContactUs
