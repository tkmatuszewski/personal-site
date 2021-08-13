import * as React from "react"
import GlobalFonts from '../fonts/fonts';
import GlobalStyle from "../components/GlobalStyle"
import Hero from "../components/Hero"
import Logo from "../components/Logo"
import NavigationBtn from "../components/NavigationBtn"
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <GlobalFonts/>
      <GlobalStyle/>
      <Hero>
          <Logo>
            TM
          </Logo>
          <NavigationBtn/>
          <HeroBackLight/>
          <StaticImage></StaticImage>
      </Hero>
    </main>
  )
}

export default IndexPage
