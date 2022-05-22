import styled from "styled-components";
import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutStyled = styled.section`
  min-height: 120vh;
  display: flex;
  justify-content: center;
  background: black;
  margin: 0 15%;

  .aboutContentCnt {
    width: 30vw;
    margin-left: 60%;
    @media (max-width: 1050px) {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

const AboutCnt = styled.div`
width: 85%;
color: white;
display: flex ;
flex-direction: column ;
justify-content: space-evenly ;
`
const AboutStrongCnt = styled.div`
opacity: 0;
`
const StrongRow = styled.strong`
  display: block;
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: clamp(4vmin, 7vmin, 7vmin);
`;
const AboutContent = styled.p`
  margin-bottom: 2rem;
  font-family: "Merriweather", serif;
  font-weight: light;
  font-size: 2.5vh;
  text-align: justify;
  opacity: 0;
  transform: translateX(-30px);
  &:first-of-type {
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 2rem ;
    color: orange;
    /* text-transform: uppercase ; */

  }

  .col {
    margin-bottom: 2rem;
  }
  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

const About = () => {

  const AboutHeader = useRef()
  const AboutMain = useRef()
  const cn = useRef();
  
  const q = gsap.utils.selector(cn);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(AboutMain.current, {
      scrollTrigger: {
        trigger: ".about",
        start: "top-400 bottom",
        end: "center bottom",
        scrub: 1,
      },
      margin: 0
    });
        
    gsap.to(q(".col"), {
      scrollTrigger: "#about",
      duration: "2",
      x: 0,
      alpha: "1",
      ease: "Power3.easeOut",
      stagger: 0.2,
    });


    gsap.to(AboutHeader.current, {
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "center center",
      },
      y: 30,
      fontSize: "10vh",
      duration: "1",
      alpha: "1",
      ease: "circ.easeOut",
    });
  });

    return (
      <div id="about">
        <AboutStyled ref={AboutMain} className="about">
          <AboutCnt>
            <AboutStrongCnt ref={AboutHeader} className="aboutHeader">
              <StrongRow>I'm Tomasz, aspiring frontend</StrongRow>
              <StrongRow> dev based in Warsaw.</StrongRow>
            </AboutStrongCnt>
            <div className="aboutContentCnt" ref={cn}>
              <AboutContent className="col">
                I am the Batman.
               </AboutContent>
              <AboutContent className="col">
              I really am. When the night comes and my daughter goes to sleep I start another life. As soon as my computer turns on I loose myself to the web development.
              </AboutContent>
              <AboutContent className="col">
                I design and write websites and apps with special care for
                aesthetics. It is my ambition to create some meaningful and eye
                pleasing digital products.
              </AboutContent>
              <AboutContent className="col">
                The is no time limit I can't spend on visual and functional improvement of my projects to make my work as engaging as possible.
              </AboutContent>
              <AboutContent className="col">
                Look... I think we agree the is world would be a better place with a batman on a full time job... so if you're looking for a developer don't hesitate to reach me!
              </AboutContent>
            </div>
          </AboutCnt>
        </AboutStyled>
      </div>
    );
}

export default About

