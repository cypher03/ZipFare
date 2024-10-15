import React from 'react'
import './App.css'
import NavBar from './components/navBar.jsx'
import LandingPage from './components/landingPage.jsx'
import SignIn from './components/login.jsx'
import SignUp from './components/signup.jsx'
import Home from './components/home.jsx'
import UberStylePage from './components/RideRequest.jsx'

function App() {

  return (
    <>
    <NavBar/>
    <Home/>
    {/* <UberStylePage/> */}
    </>
  )
}

export default App
