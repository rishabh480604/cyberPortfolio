import React, { useRef, useEffect } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Make canvas full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to display
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()-_=+[]{}|;:,.<>?/';
    const fontSize = 25;
    const columns = Math.floor(canvas.width / fontSize);

    // Array of drops (y position for each column)
    const drops = Array(columns).fill(1);

    function draw() {
      // Black BG with translucent alpha to create fading effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = '#0F0'; // Matrix green

      for (let i = 0; i < columns; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset to top at random
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33); // ~30fps

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} style={{
        display: 'block',
        width: '100vw',
        height: '100vh',
      }} />;
};

export default MatrixRain;
