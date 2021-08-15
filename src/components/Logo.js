import styled from "styled-components";
import React from "react";

const LogoStyled = styled.h1`
    font-size : 1.5rem;
    font-weight : 900;
    color : white;
    font-family: 'Raleway', sans-serif;
    grid-column: 2/3;
    grid-row: 2/3;
`
function Logo () {
    return <LogoStyled>TM</LogoStyled>
}

export default Logo;