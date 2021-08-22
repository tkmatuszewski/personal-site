import styled from "styled-components";
import React from "react";

const IntroStyled = styled.section`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;

h1{
    font-family: 'Raleway', sans-serif;
    font-size: 10vh;
    font-weight: 100;
    color: white;

strong{
    font-weight: 700;
    }
}
`

const Intro =()=>{

return (
    <IntroStyled>
        <h1><strong>Tomasz</strong> Matuszewski</h1>
    </IntroStyled>
)
}
export default Intro;