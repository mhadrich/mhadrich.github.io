import React from 'react'
import "./index.css"
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import ExternalLinks from './Components/ExternalLinks'

function App() {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <Hero />
      <ExternalLinks />
    </div>
  )
}

export default App