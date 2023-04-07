import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Landing from './components/landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/patient/home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        {/* need to be removed */}
        <Route path='home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
