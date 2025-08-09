import React, { useRef, useEffect, useState } from "react";

const TerminalTheme = ({ heading = "Education", initialLines = [], textAlign='text-center' }) => {
  const terminalRef = useRef(null);
  const [terminalSize, setTerminalSize] = useState({ width: 0, height: 0 });

  // Track size changes (optional if you want dynamic font scaling)
  useEffect(() => {
    const updateSize = () => {
      if (terminalRef.current) {
        const { offsetWidth, offsetHeight } = terminalRef.current;
        setTerminalSize({ width: offsetWidth, height: offsetHeight });
      }
    };
    updateSize();

    const observer = new ResizeObserver(updateSize);
    if (terminalRef.current) observer.observe(terminalRef.current);

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
      if (terminalRef.current) observer.unobserve(terminalRef.current);
    };
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{
        display: "flex",
        justifyContent: "center", // center horizontally
        alignItems: "center", // center vertically
        width:'full-screen',
        // minHeight: "fit", // full screen height
        // backgroundColor: "#111",
        fontFamily: "'Courier New', monospace",
      }}
    >
      <div className=" m-0 sm:m-[5%]"
        style={{
          backgroundColor: "#111",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          overflow: "hidden",
          width: "100vw",
          height: "fit-content",
        }}
      >
        {/* Title bar */}
        <div 
          style={{
            
            height: "40px",
            background: "linear-gradient(to bottom, #3a3a3a, #2a2a2a)",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            padding: "0 10px",
            color: "#ccc",
            width:"100vw",
            fontSize: "clamp(0.8rem, 1vw + 0.5rem, 1.5rem)",
            fontWeight: "bold",
          }}
        >
          <div style={{ display: "flex", gap: "6px" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56" }}></div>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e" }}></div>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f" }}></div>
          </div>
          <div style={{ textAlign: "center" }}>{heading}</div>
          <div style={{ width: "54px" }}></div>
        </div>
       

        {/* Terminal body */}
        <div
          style={{
            padding: "20px",
            color: "#00ff88",
            fontSize: "clamp(0.8rem, 0.8vw + 0.5rem, 1.2rem)",
            textAlign: "center", // center text inside terminal
            whiteSpace: "pre-wrap",
          }}
        >
          {initialLines.map((line, idx) => (
            <div class={textAlign} key={idx}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalTheme;
