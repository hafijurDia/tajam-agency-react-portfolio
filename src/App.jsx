import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Layout from './components/layouts/Layout'
import About from './sections/About'
import Home from './sections/Home'
import Promo from './sections/Promo'
import Services from './sections/Services'
import Teams from './sections/Teams'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import FeaturedTeam from './sections/FeaturedTeam'
import ScrollBottom from './components/ScrollBottom'
import GlobalStyles from './styles/GlobalStyle'

// import "../node_modules/slick-carousel/slick/slick.css"; 
// // import "../node_modules/slick-carousel/slick/slick-theme.css";


function App() {

  return (
      <Layout>
        <GlobalStyles />
        <Home />
        <About />
        <Promo />
        <Services />
        <Teams />
        <Projects />
        <FeaturedTeam />
        <Contact />
        <ScrollBottom />
      </Layout>
  )
}

export default App
