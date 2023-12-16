import './App.css'
import Home from './Pages/Home';
import Legal from './Pages/Legal';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  // console.log(tweet);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/legal" element={<Legal></Legal>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
