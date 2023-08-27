import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from '../Components/Header/Header.js'
import Footer from '../Components/Footer/Footer.js'
import Home from '../Components/Pages/Home/Home.js'
import Plans from '../Components/Pages/Plans/Plans.js'
import Courses from '../Components/Pages/Courses/Courses.js'

function LayoutRoots() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/plans' element={<Plans/>}/>
            <Route path='/courses' element={<Courses/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoots

