import * as React from "react"
import GlobalFonts from '../fonts/fonts';
import GlobalStyle from "../components/GlobalStyle"
import HeroPage from "../components/HeroPage"
import Logo from "../components/Logo"
import HeroBackLight from "../components/HeroBackLight"
import Hamburger from "../components/Hamburger";

const IndexPage = () => {

  return (
    <main>
      <GlobalFonts/>
      <GlobalStyle/>
      <HeroPage>
        <Logo/>
        <Hamburger />
      </HeroPage>
      {/* <HeroBackLight/> */}
    </main>
  )
}

export default IndexPage
