import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './components/Content'


function App() {

  return (
    <><div>
    <BrowserRouter>
      <Navbar />
      <Content />
      <Footer />
    </BrowserRouter>
    </div>
    </>
  )
}

export default App;