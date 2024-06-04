import { useState } from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Section from './Components/Section/Section'
function App() {

  return (
          <>
            <div id="container">
              <Navbar/>
              <Section/>
            </div>
          </>   
  )
}

export default App
