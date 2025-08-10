import React from 'react'
import MatrixRain from './Matrix'

import { Outlet } from 'react-router'

import TaskbarFooter from './TaskbarFooter'
const Dashboard = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
    {/* Background animation */}
    <MatrixRain
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0
      }}
    />
    {/* Foreground centered content */}
    <div
      style={{
        position: 'absolute',
        top: '2%',

        // left: '50%',
        // transform: 'translate(0%, -100%)',
        zIndex: 1, // Ensures it stays above the canvas
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // minwidth: '100%',
        // overflowY: 'scroll',
        Height:'96%',
        width:'100%',
        

      }}
    >
      {/* <TerminalHandlr /> */}
      <Outlet/>
    </div>
    <TaskbarFooter/>
  </div>
  )
}

export default Dashboard
