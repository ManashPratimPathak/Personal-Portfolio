import React from 'react'
import Hero1 from '../components/Hero/Hero1'
import HamBurgerMenu from '../components/HamBurgerMenu/hamBurgerMenu'
import AboutMe from '../components/AboutMe/AboutMe'
import Skills from '../components/Skills/Skills'

export default function Home() {
  return (
    <>
    <HamBurgerMenu />
    <Hero1 />
    <AboutMe />
    <Skills />
    </>
  )
}
