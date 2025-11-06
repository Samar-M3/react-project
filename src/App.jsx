import React from 'react'

import Home from './pages/Home'
import Header from './components/Header'
import { Routes, Route } from 'react-router'
import About from './pages/About'
import Protected from './HOC/Protected'
import Login from './pages/Login'
import Services from './pages/Services'

function App() {
  return (
    <div >
      <Protected>
      <Header/>
      {/* <Home/> */}
     <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/services' element={<Services/>}/>
     </Routes>
     </Protected>
    </div>
  )
}

export default App
