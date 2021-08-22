import styled from "styled-components";
import React from "react";

const LogoStyled = styled.h1`
    font-size : 3vh;
    font-weight : 900;
    color : white;
    font-family: 'Raleway', sans-serif;
    grid-column: 2/3;
    grid-row: 2/3;
    transition: 0.5s;
`
function Logo ({introState}) {

  
    const handleLogoContent =(state)=> {
        let content = "Tomasz Matuszewski"
        if(!state) {
           content = "TM"
        }
        return content;
    }

    return (
    <LogoStyled>
        {handleLogoContent(introState)}
    </LogoStyled>
    )
}

export default Logo;