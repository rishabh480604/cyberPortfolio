import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaWindows, FaMailchimp , FaForward, FaBackward,FaBook} from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { social } from "../assets/database";
const TaskbarFooter = () => {
  const navigate= useNavigate();
  const [dateTime, setDateTime] = useState({ time: "", date: "" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      setDateTime({
        time: `${hours}:${minutes}`,
        date: `${day}-${month}-${year}`,
      });
    };
    updateTime();
    const timer = setInterval(updateTime, 1000); // update every second
    return () => clearInterval(timer);
  },[]);


  
  const links = [
    { icon: <FaInstagram size={30} />, url: social.instagram ,name: "Instagram" },
    { icon: <FaLinkedin size={30  } />, url: social.linkedIn , name: "LinkedIn" },
    { icon: <FaGithub size={30} />, url: social.gitHub , name: "GitHub" },
    { icon: <FaMailchimp size={30} />, url: social.mail , name: "Gmail" },
    { icon: <FaBook size={30}/>, url: social.resume, name: "Resume" } 

  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-700/30 grid grid-cols-3 items-center py-2 shadow-[0_-1px_5px_rgba(0,0,0,0.3)] z-[1000]">

  {/* Back Button - Left */}
  <div className="flex justify-start items-center pl-4">
  <button
      onClick={() => navigate("/")}
      className="text-white p-2 transition-transform duration-200 hover:scale-125 hover:text-[#0DDE11]"
    >
      <FaWindows size={28} />
    </button>

    <button
      onClick={() => window.history.back()}
      className="text-white p-2 transition-transform duration-200 hover:scale-125 hover:text-[#0DDE11]"
    >
      <FaBackward size={28} />
    </button>

    <button
      onClick={() => window.history.forward()}
      className="text-white p-2 transition-transform duration-200 hover:scale-125 hover:text-[#0DDE11]"
    >
      <FaForward size={28} />
    </button>
  </div>

  {/* Icons - Center */}
  <div className="flex justify-center items-center">
    {links.map((link, index) => (
      <a
      
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white p-3 transition-transform duration-200 hover:scale-150 hover:text-[#0DDE11] border border-gray-700 rounded-lg mx-0.5"
      >
        {link.icon}
      </a>
    ))}
    {hoveredIndex !== null && (
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded shadow-lg">
        {links[hoveredIndex].name}
      </div>
    )}
  </div>

  {/* Time - Right */}
  <div className="flex justify-end items-center pr-4">
    <div className="text-white font-mono text-sm leading-tight text-right">
      <span className="text-lg font-bold block text-center">{dateTime.time}</span>
      <span className="text-lg font-bold block">{dateTime.date}</span>
    </div>
  </div>

</footer>

  );
};

export default TaskbarFooter;
