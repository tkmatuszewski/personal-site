import styled from "styled-components";
import React, {useRef} from "react";

const NavigationBtnStyled = styled.button`
  background: transparent;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-size: 2.5vh;
  font-weight: bold;
  border: none;
  position: relative;
  z-index: 1;
  color: inherit;
  flex-grow: 0;

  &:before {
    content: "";
    width: 0;
    height: 2px;
    background: black;
    transition: 0.4s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover:before {
    width: 100%;
  }
  &:hover:after {
    height: 2vh;
  }
`;

const NavigationBtn =({showMenu, setShowMenu})=> {
    
  const menuBtn = useRef();
  
    return (
        <NavigationBtnStyled ref={menuBtn} onClick={() => setShowMenu(!showMenu)}>
        Menu
        </NavigationBtnStyled>
    )
}



export default NavigationBtn