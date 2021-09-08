import styled from "styled-components";
import React, {useRef} from "react";

const NavigationBtnStyled=styled.button`
    grid-row: 1/2;
    grid-column: 2/3;
    justify-self: flex-end;
    align-self: center;
    height: 3.5vh;
    background: transparent;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-size: 2.5vh;
    border: none;
    transform: translateX(-50%);
    position: relative;
    color: inherit;
    z-index: 1;

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
    
    const menuBtn= useRef()

    return (
        <NavigationBtnStyled ref={menuBtn} onClick={() => setShowMenu(!showMenu)}>
        Menu
        </NavigationBtnStyled>
    )
}



export default NavigationBtn