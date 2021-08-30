import styled from "styled-components";
import React from "react";

const AboutStyled = styled.section`
min-height: 100vh;
display: flex;
justify-content: center;
background: black;
`

const AboutCnt = styled.div`
width: 65%;
display: grid;
grid-template-columns: 60% 40%;
grid-template-rows: 1fr 1fr 1fr;
color: white;
`
const AboutStrongCnt = styled.div`
grid-column: 1/3;
grid-row: 1/2;
/* max-height: 30vh; */
/* max-width: 70%; */
margin-top: 15vh;
z-index: 10;
`
const StrongRow = styled.strong`
display: block;
width: 100%;
font-family: 'Raleway', sans-serif;
font-weight: 600;
font-size: 10vh;
`
const AboutContent = styled.p`
grid-column: 1/2;
align-self: center;
max-width: 75%;
font-family: 'Merriweather', serif;
font-size: 2.5vh;
letter-spacing: 0.15em;
`

const AboutImage = styled.div`
height: 70vh;
grid-column: 2/3;
grid-row:1/4;
align-self: center;
background: darkgrey;
z-index: 0;
`

const About = () => {

    return (
        <div id="about">
            <AboutStyled>
                <AboutCnt>
                    <AboutStrongCnt>
                        <StrongRow>I'm Tomasz,</StrongRow>
                        <StrongRow>a creative developer</StrongRow>
                        <StrongRow>based in Warsaw.</StrongRow>
                    </AboutStrongCnt>
                    <AboutImage/>
                    <AboutContent>
                    I design and write apps and websites with great care for aesthetics. It is my ambition to create some meaningful and eye pleasing digital products.  
                    Since I started my web development journey I try to constantly make even more engaging and performant stuff. 
                    </AboutContent>
                    <AboutContent>
                        At the moment I am available for hire. I'm ready to jump into an awsome project.
                    </AboutContent>
                </AboutCnt>
            </AboutStyled>
        </div>
    )
}

export default About

