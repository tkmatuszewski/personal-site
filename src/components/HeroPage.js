import styled from "styled-components";
import React from "react";

const HeroPageStyled = styled.section`
    min-height : 80vh;
    margin-top: 20vh;
    background : white;
    display: grid;
    grid-template-columns: 5% 90% 5%;
`

const HeroPage = ({children})=> {
    return (
        <HeroPageStyled>
            {children}
        </HeroPageStyled>
    )
}

export default HeroPage