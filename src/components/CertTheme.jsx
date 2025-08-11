import React from 'react'

const CertTheme = ({badgSrc,name}) => {
    
  return (
    
    <div 
    className="relative overflow-hidden mb-5 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 group"
    >
  <img
    src={badgSrc}
    alt="Certificate"
    className="w-full h-ful object-cover"
  />
  <div
    className="
      absolute bottom-0 left-0 w-full
      bg-black bg-opacity-80
      p-2
      translate-y-full
      transition-transform duration-300 ease-in-out
      group-hover:translate-y-0
    "
  >
    <h4 
    className="text-white my-1  opacity-0 transition-opacity duration-300 group-hover:opacity-60 text-2xl"
    >
      {name}
    </h4>
  </div>
</div>
  )
}

export default CertTheme
