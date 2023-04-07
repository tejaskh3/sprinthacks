import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from '../landing/Landing';
// import Register from '../auth/Register';
// import Login from '../auth/Login';
import UserHome from './home/Home'
export default function Home() {
  return (
    <BrowserRouter>
    welcome to home router
      <Routes>
        <Route path='/userhome' element={<UserHome/>}></Route>
        {/* <Route path='register' element={<Register/>}></Route>
        <Route path='login' element={<Login/>}></Route> */}
      </Routes>
      </BrowserRouter>
  )
}
