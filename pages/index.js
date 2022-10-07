import styles from '../styles/Home.module.css'
import Hero from '../components/Hero/Hero'
import HamBurgerMenu from '../components/HamBurgerMenu/hamBurgerMenu'
import AboutMe from '../components/AboutMe/AboutMe'

export default function Home() {
  return (
    <>
    <HamBurgerMenu />
    <Hero />
    <AboutMe />
    </>
  )
}
