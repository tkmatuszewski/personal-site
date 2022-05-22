import React, {useState} from "react";
import GlobalFonts from '../fonts/fonts';
import GlobalStyle from "../components/GlobalStyle"
import Hero from "../components/Hero";
import Logo from "../components/Logo"
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About"
import Work from "../components/Work";
import Header from "../components/Header";
import NavigationBtn from "../components/NavigationBtn";
import Menu from "../components/Menu";
import Skills from "../components/Skills";

const IndexPage = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <GlobalFonts/>
      <GlobalStyle/>
      <Menu showMenu = {showMenu} setShowMenu = {setShowMenu}/>
        <Header>
            <Logo/>
            <NavigationBtn showMenu = {showMenu} setShowMenu = {()=>setShowMenu(!showMenu)}/>
        </Header>
        <main>
          <Hero/>
          <About />
          <Skills/>
          <Work/>
          <Contact/>
        </main>
        <Footer/>
    </>
  )
}

export default IndexPage
