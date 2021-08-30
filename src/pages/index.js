import React, {useState, useEffect} from "react";
import GlobalFonts from '../fonts/fonts';
import GlobalStyle from "../components/GlobalStyle"
import HeroPage from "../components/HeroPage"
import Logo from "../components/Logo"
import Hamburger from "../components/Hamburger";
import HeroBars from "../components/HeroBars";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About"
import Work from "../components/Work";
import Header from "../components/Header";

const IndexPage = () => {

  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(!intro);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalFonts/>
      <GlobalStyle/>
      <Header>
          <Logo introSatus={intro}/>
          <Hamburger />
        </Header>
      <main>
        <HeroPage>
          <HeroBars/>
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
