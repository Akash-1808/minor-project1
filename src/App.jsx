import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Login } from './pages/login'
import { Signup } from './pages/signup'
import { Calculator } from './pages/calculator'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
