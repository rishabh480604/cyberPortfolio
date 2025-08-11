import React from 'react'
import { useNavigate } from 'react-router'
import { useEffect } from 'react';
// import TerminalTheme from './TerminalTheme';
import ProjectTheme from './ProjectTheme';
import { projectsList } from '../assets/database';

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
      {projectsList.map((project, index) => (
        <ProjectTheme
          key={index}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
          projectScreenshot={project.projectScreenshot}
          projectUrl={project.projectUrl}
        />
      ))}
      

    

      



      

    </div>
  )
}

export default Projects
