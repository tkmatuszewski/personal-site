import styled from "styled-components";
import React from "react";

const MenuPageStyled = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props => props.showMenu ?  'translateX(0)' : 'translateX(-100%)'};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
`

const MenuClosePageStyled = styled.button`
    grid-row: 1/2;
    grid-column: 2/3;
    justify-self: right;
    position: relative;
    width: 4vh;
    height: 4vh;
    background-color: transparent;
    border: none;
    cursor: pointer;

&:before,
&:after {
  content: "";
  width: 100%;
  height: 2px;
  background: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
&:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
`;

const MenuPageCntStyled = styled.div`
  width: 94%;
  height: 93%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4vh 1fr;
`

const MenuCntStyled = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;
    justify-self: end;
    align-items: center;
    display: flex;
    align-items: center;
`

const MenuMainStyled = styled.nav`
    
    a {
        display: block;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        font-size: 12vh;
        text-decoration: none;
        color: black;
        cursor: pointer;
        position: relative;
    }

    a:before {
        content: "";
        width: 0;
        height: 3px;
        background: black;
        transition: 0.4s;
        position: absolute;
        bottom: -0.25rem;
        left: 0;

    }

    a:hover:before {
        width: 150%;
    }
`

const Menu =({showMenu, setShowMenu})=> {




    return (
        <MenuPageStyled showMenu={showMenu}>
            <MenuPageCntStyled>
                <MenuClosePageStyled onClick = {()=> setShowMenu(false)}/>
                <MenuCntStyled>
                    <MenuMainStyled>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Work</a>
                        <a href="">Contact</a>
                    </MenuMainStyled>
                </MenuCntStyled>
            </MenuPageCntStyled>
        </MenuPageStyled>
        )
}

export default Menu