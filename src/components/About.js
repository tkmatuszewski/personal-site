import styled from "styled-components";
import React from "react";

const AboutStyled = styled.section`
min-height: 100vh;
display: flex;
justify-content: center;
`

const AboutCnt = styled.div`
width: 80%;
`
const AboutStrongCnt = styled.div`
max-height: 30vh;
max-width: 70%;
margin-top: 15vh;
`
const StrongRow = styled.strong`
display: block;
width: 100%;
font-family: 'Raleway', sans-serif;
font-weight: 600;
font-size: 10vh;
`

const About = () => {
    return (
        <AboutStyled>
            <AboutCnt>
                <AboutStrongCnt>
                    <StrongRow>Hi! I'm Tomasz,</StrongRow>
                    <StrongRow>a creative developer</StrongRow>
                    <StrongRow>based in Warsaw.</StrongRow>

                </AboutStrongCnt>
            </AboutCnt>
        </AboutStyled>
    )
}

export default About

