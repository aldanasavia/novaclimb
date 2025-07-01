import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos'
import './App.css'

function App() {
  

  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/nosotros" element = {<QuienesSomos />} />
        </Routes>
    </Router>
  
    </>
  )
}

export default App
