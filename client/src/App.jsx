import React from 'react'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Header from './Components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />

    </Routes>
    </BrowserRouter>
  )
}
