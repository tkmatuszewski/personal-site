import styled from "styled-components";
import React, {useRef, useEffect} from "react";
import  gsap from "gsap";

const AboutStyled = styled.section`
min-height: 100vh;
display: flex;
justify-content: center;
background: black;
`

const AboutCnt = styled.div`
width: 50%;
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: repeat(4, 40vh );
grid-row-gap: 7vh;
color: white;
@media (max-width: 1000px) {
  width: 80%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 40vh);
  grid-row-gap: 0;
}
`
const AboutStrongCnt = styled.div`
grid-column: 1/3;
grid-row: 1/2;
margin-top: 15vh;
margin-bottom: 15vh;
z-index: 10;
opacity: 0;
@media (max-width: 1000px) {
  width: 75%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 40vh);
  grid-row-gap: 0;
}

`
const StrongRow = styled.strong`
  display: block;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 10vh;
  @media (max-width: 1000px) {
    font-size: 5vh;
      }
`
const AboutContent = styled.p`
  grid-column: 2/3;
  align-self: center;
  max-width: 100%;
  font-family: 'Merriweather', serif;
  font-size: 2.5vh;
  text-align: justify;
  letter-spacing: 0.15em;
  opacity: 0;
  transform: translateX(-10vw);
  @media (max-width: 1000px) {
    max-width: 100%;
    grid-column: 1/3;
    align-self: center;
      }

&:nth-of-type(1) {

  align-self: flex-end;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
}

&:nth-of-type(2) {
  grid-row: 3/4;
  grid-column: 1/2;
  transform: translateX(+7vw);
}

&:nth-of-type(3) {
  grid-row: 4/5;
  align-self: flex-start;
}
`

const About = () => {

    const AboutHeader = useRef()
    const AboutColumn1 = useRef()
    const AboutColumn2 = useRef()
    const AboutColumn3 = useRef()

      useEffect(() => {

        gsap.to(AboutHeader.current,{scrollTrigger: {
          trigger: ".About__AboutStrongCnt-eZoALK",
          start: "center bottom",
          end: "center center",
          scrub: true,
        }, x : "-=5vw", duration: "1",
        alpha: "1",
        ease: "circ.easeOut"});
        gsap.to(AboutColumn1.current, { scrollTrigger: {
            trigger: "#col1",
            start: "center bottom",
            end: "center center",
            scrub: true,
          }, duration: "1",
          x: "+=10vw",
          alpha: "1",
          ease: "circ.easeOut"});
        gsap.to(AboutColumn2.current, {  scrollTrigger: {
            trigger: "#col2",
            start: "center bottom",
            end: "center center",
            scrub: true,
          }, duration: "1",
          x: "-=7vw",
          alpha: "1",
          ease: "circ.easeOut"});
        gsap.to(AboutColumn3.current, { scrollTrigger: {
            trigger: "#col3",
            start: "center bottom",
            end: "center center",
            scrub: true,
          }, duration: "1",
          x: "+=8vw",
          alpha: "1",
          ease: "circ.easeOut"});
     }, []);

    return (
        <div id="about">
            <AboutStyled>
                <AboutCnt>
                    <AboutStrongCnt ref={AboutHeader} id ="aboutHeader">
                        <StrongRow>I'm Tomasz,</StrongRow>
                        <StrongRow>a creative developer</StrongRow>
                        <StrongRow>based in Warsaw.</StrongRow>
                    </AboutStrongCnt>
                    <AboutContent ref={AboutColumn1} id="col1">
                    I design and write websites and apps with special care for aesthetics.  
                    It is my ambition to create some meaningful and eye pleasing digital products.  
                    </AboutContent>
                    <AboutContent ref={AboutColumn2} id="col2">
                    Since I started my web development journey a while ago I continue to improve patterns,
                    technologies and techniques to make my work even more engaging and useful.
                    </AboutContent>
                    <AboutContent ref={AboutColumn3} id="col3">
                        I am currently available for hire so write me and lets make a team.
                    </AboutContent>
                </AboutCnt>
            </AboutStyled>
        </div>
    )
}

export default About

