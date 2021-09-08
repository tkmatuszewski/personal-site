import styled from "styled-components";
import React from "react";

const HeroPageStyled = styled.section`
    background : white;
`

const HeroPage = ({children})=> {
    return (
        <HeroPageStyled id="home">
            {children}
        </HeroPageStyled>
    )
}

export default HeroPage