import React, {useState} from "react";
import GlobalFonts from '../fonts/fonts';
import GlobalStyle from "../components/GlobalStyle"
import HeroPage from "../components/HeroPage"
import Logo from "../components/Logo"
import HeroBars from "../components/HeroBars";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About"
import Work from "../components/Work";
import Header from "../components/Header";
import HeroImg from "../components/HeroImg";
import NavigationBtn from "../components/NavigationBtn";
import Menu from "../components/Menu";

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
          <HeroPage>
            <HeroBars/>
            <HeroImg/>
          </HeroPage>
          <About/>
          <Work/>
          <Contact/>
        </main>
        <Footer/>
    </>
  )
}

export default IndexPage
