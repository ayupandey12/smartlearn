import './App.css'
import { Button } from './components/ui/button'
import Authpage from './pages/auth'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
function App() {


  return (
    <div>
   <Routes>
    <Route path='/auth' element={<Authpage/>}/>
   </Routes>
    </div>
  )
}

export default App
