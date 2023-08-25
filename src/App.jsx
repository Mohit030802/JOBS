import {  Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Estimate from "./components/Estimate"
import Details from "./components/Details"
import Navbar from "./components/Navbar"


function App() {


  return (
    <>
     <div>
      <div>
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Estimate" element={<Estimate />} />
        <Route path="/Details" element={<Details />} />
        
      </Routes>
     </div>
    </>
  )
}

export default App
