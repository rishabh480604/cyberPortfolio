import React, { useState, useEffect, useRef } from "react";

const TerminalAlerts = ({
  words = ["alpha", "beta", "gamma", "delta"],
  gridSize = 20,
  spawnInterval = 200, // 0.2s
  displayTime = 2000,  // 2s
  heading = "Terminal — Alerts Monitor",
}) => {
  const [alerts, setAlerts] = useState([]);
  const [terminalSize, setTerminalSize] = useState({ width: 0, height: 0 });
  const terminalRef = useRef(null);
  const wordIndex = useRef(0);
  const alertId = useRef(0);

  // Measure terminal size
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

  const spawnAlert = () => {
    const padding = 10;
    const titleBarHeight = 40;
    const cols = Math.floor((terminalSize.width - padding * 2) / gridSize);
    const rows = Math.floor((terminalSize.height - titleBarHeight - padding * 2) / gridSize);
    const col = Math.floor(Math.random() * cols);
    const row = Math.floor(Math.random() * rows);
    const x = padding + col * gridSize;
    const y = titleBarHeight + padding + row * gridSize;

    const word = words[wordIndex.current % words.length];
    wordIndex.current += 1;

    alertId.current += 1;
    return {
      id: alertId.current,
      word,
      position: { x, y },
    };
  };

  useEffect(() => {
    if (terminalSize.width === 0 || terminalSize.height === 0) return;
    const interval = setInterval(() => {
      const newAlert = spawnAlert();
      setAlerts((prev) => [...prev, newAlert]);
      setTimeout(() => {
        setAlerts((prev) => prev.filter((a) => a.id !== newAlert.id));
      }, displayTime);
    }, spawnInterval);

    return () => clearInterval(interval);
  }, [terminalSize]);

  return (
    <div
      ref={terminalRef}
      style={{
        // minWidth:"400px",
        // minHeight:"300px",
        width: "100%",
        height: "100%",
        backgroundColor: "#111",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        overflow: "hidden",
        fontFamily: "'Courier New', monospace",
        position: "relative",
        // margin: "3% 3%",
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
          fontSize: "clamp(0.8rem, 1vw + 0.5rem, 1.5rem)",
          fontWeight: "bold",
        }}
      >
        {/* Left: buttons */}
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56" }}></div>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e" }}></div>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f" }}></div>
        </div>

        {/* Center: heading */}
        <div style={{ textAlign: "center" }}>{heading}</div>

        {/* Right: space for symmetry */}
        <div style={{ width: "54px" }}></div>
      </div>

      {/* Terminal body */}
      <div style={{ position: "absolute", inset: 0 }}>
        {alerts.map(({ id, word, position }) => (
          <div
            key={id}
            style={{
              position: "absolute",
              left: position.x,
              top: position.y,
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              border: "1px solid #00ff88",
              borderRadius: "4px",
              padding: "4px 8px",
              color: "#00ff88",
              fontSize: "14px",
              boxShadow: "0 0 8px #00ff88",
              textShadow: "0 0 4px #00ff88",
              whiteSpace: "nowrap",
              animation: "fadeInOut 2s ease forwards",
            }}
          >
            {word}
            <span style={{ animation: "blink 1s infinite" }}>_</span>
          </div>
        ))}
      </div>

      {/* CSS animations */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: scale(0.9); }
            10% { opacity: 1; transform: scale(1); }
            90% { opacity: 1; }
            100% { opacity: 0; transform: scale(0.95); }
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default TerminalAlerts;
