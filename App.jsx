import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalPf from './PersonalPf'
import Skills from './Skills'
import Projects from './Projects'
import Information from './Information'
import Footer from './Footer'

function App() {
  return(
 <>
    <PersonalPf></PersonalPf>
    <Skills></Skills>
  <Projects></Projects>
  <Information></Information>
  <Footer></Footer>
    </>
)}

export default App
