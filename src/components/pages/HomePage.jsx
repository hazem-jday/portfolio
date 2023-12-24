import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import Experience from "./homepage-comps/Experience"
import CertificateSlider from './homepage-comps/CertificateSlider'
import Education from './homepage-comps/Education'

const HomePage = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <Experience />
            <MyProjects />
            <Techs />
            <Education />
            <Contact />
        </>
    )
}

export default HomePage