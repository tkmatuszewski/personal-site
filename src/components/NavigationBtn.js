import styled from "styled-components";
import React from "react";

const NavigationBtnStyled=styled.button`
    grid-row: 1/2;
    grid-column: 2/3;
    justify-self: flex-end;
    align-self: center;
    height: 3.5vh;
    background: transparent;
    cursor: pointer;
    color: black;
    font-family: 'Merriweather', serif;
    font-size: 2.5vh;
    border: none;
    transition: 0.5s;
    position: relative;

    &:before {
        content: "";
        width: 0;
        height: 2px;
        background: black;
        transition: 0.4s;
        position: absolute;
        bottom: -2%;
        left: 0;
    }

    &:hover:before {
        width: 100%;
    }
    &:hover:after {
       height: 2vh;
    }
`

const NavigationBtn =({showMenu, setShowMenu})=> {
    return (
        <NavigationBtnStyled onClick={() => setShowMenu(!showMenu)}>
        Menu
        </NavigationBtnStyled>
    )
}



export default NavigationBtn