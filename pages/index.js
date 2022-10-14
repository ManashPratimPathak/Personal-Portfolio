import React from 'react'
import Hero1 from '../components/Hero/Hero1'
import HamBurgerMenu from '../components/HamBurgerMenu/hamBurgerMenu'
import AboutMe from '../components/AboutMe/AboutMe'
import Skills from '../components/Skills/Skills'
import Index from '../components/Experience'
// import Experince from '../components/Experince/Experince'

export default function Home() {
  return (
    <>
    <HamBurgerMenu />
    <Hero1 />
    <AboutMe />
    <Skills />
    <Index />
    {/* <Experince /> */}
    </>
  )
}
