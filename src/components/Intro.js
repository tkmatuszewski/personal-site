import styled from "styled-components";
import React from "react";

const IntroStyled = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-size : 3vh;
    font-weight : 900;
    color: white;

strong{
    font-weight: 700;
    }
}
`

const Intro =()=>{

return (
    <IntroStyled>
        <strong>Tomasz</strong> Matuszewski
    </IntroStyled>
)
}
export default Intro;