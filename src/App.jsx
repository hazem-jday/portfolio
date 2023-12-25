import ParticlesBackground from "./components/ParticlesBackground"
import { HashRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./components/pages/AboutPage"
import HomePage from "./components/pages/HomePage"
import SocialLinks from "./components/SocialLinks"
import GeneralFooter from "./components/GeneralFooter"
import AllProjectsPage from "./components/pages/AllProjectsPage"
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <HashRouter>

      <ParticlesBackground />
      <SocialLinks />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about-me" element={<AboutPage />}/>

        <Route path="/projects" element={<AllProjectsPage />}/>
      </Routes>

      <GeneralFooter />
        
      
      </HashRouter>

  )
}

export default App
