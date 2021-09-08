import styled from "styled-components";
import React from "react";



const LogoStyled = styled.h1`
    grid-row: 1/2;
    grid-column: 2/3;
    font-size : 2vh;
    font-weight : 900;
    font-family: 'Raleway', sans-serif;
    align-self: center;
    opacity: 1;

    span {
        display: block;
    }
`
const Logo = () => {
    
    return (
    <LogoStyled>
       <span>Tomasz</span>
       <span>Matuszewski</span>
    </LogoStyled>
    )
}

export default Logo;