
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Preloader from './components/Preloader/Preloader'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Timeline from './components/Timeline/Timeline'

function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    })

    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 3000)

    return () => clearTimeout(timer)
    

  }, [])


  return (
    <>
    {showPreloader ? <Preloader /> : null}
    {!showPreloader && (
        <>
        <NavBar/>
        <Hero/>
        <About/>
        <Skills/>
        <Services/>
       <Timeline/>
        <Projects/>
        <Contact/>
        <Footer/>
        <ScrollToTop/>
        </>
  )}
  </>
  )
}

export default App
