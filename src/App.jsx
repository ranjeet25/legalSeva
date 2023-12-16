import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  // console.log(tweet);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
