import styled from "styled-components";
import React from "react";
 

const MenuPageStyled = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.96);
    position: fixed;
    top: 0;
    left: 0;
    transform: ${props => props.showMenu ?  'translateY(0)' : 'translateY(-100vh)'};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    z-index: 1000;
    @media (max-width: 1000px) {
        height: 100vh;
    }
`

const MenuCloseStyled = styled.button`
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
  background: white;
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
  width: 95vw;
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

        transform: translateX(+5vw);
        color: white;
        @media (max-width: 1000px) {
            font-size: 8vh;
      }
    }

    a:before {
        content: "";
        width: 0;
        height: 3px;
        background: white;
        transition: 0.4s;
        position: absolute;
        bottom: -0.25rem;
        left: 0;
    }

    a:hover:before {
        width: 120%;
    }

    .menuSide {
        font-size: 2vh;
        font-family: 'Raleway', sans-serif;
    }
`
const Menu =({showMenu, setShowMenu})=> {

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <MenuPageStyled showMenu={showMenu}>
            <MenuPageCntStyled>
                <MenuCloseStyled onClick = {()=> setShowMenu(false)}/>
                <MenuCntStyled>
                    <MenuMainStyled>
                        <a className="menuItem" href="#home" onClick={()=>handleClick()}>Home</a>
                        <a className="menuItem" href="#about" onClick={()=>handleClick()}>About</a>
                        <a className="menuItem" href="#work" onClick={()=>handleClick()}>Work</a>
                        <a className="menuItem" href="#contact" onClick={()=>handleClick()}>Contact</a>
                    </MenuMainStyled>
                </MenuCntStyled>
            </MenuPageCntStyled>
        </MenuPageStyled>
        )
}

export default Menu