import './App.css'
import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import PortfollioContextProvider from './Store/PortfollioContextProvider'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import Home from './Components/Home'


function App() {



  return (
    <>
      <PortfollioContextProvider>
        <Navbar />
        <Home />
        <Intro />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </PortfollioContextProvider>
    </>
  )
}

export default App
