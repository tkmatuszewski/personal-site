import styled from "styled-components";
import React, {useState, useRef, useEffect} from "react";
import { gsap } from "gsap";
 

const MenuPageStyled = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props => props.showMenu ?  'translateY(0)' : 'translateY(-100vh)'};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    z-index: 100;
    overflow: hidden;
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
        width: 120%;
    }

    .menuSide {
        font-size: 2vh;
        font-family: 'Raleway', sans-serif;
    }

`

const MenuItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
`

const Menu =({showMenu, setShowMenu})=> {

    const menuList = useRef();
    const menuItems = gsap.utils.selector();
    const [menuOption, setMenuOption]= useState(null);

    const handleMenuOption = (option) => {
        return setMenuOption(option)
    }
    useEffect(() => {
       gsap.to(menuItems.current, { duration:"1.5", delay: "1", alpha: "1", ease: 
       "Power1.easeOut"});
     }, []);

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <MenuPageStyled showMenu={showMenu}>
            <MenuPageCntStyled>
                <MenuCloseStyled onClick = {()=> setShowMenu(false)}/>
                <MenuCntStyled>
                    <MenuMainStyled ref={menuList}>
                        <a href="#home" 
                        onMouseEnter={()=> setShowMenu("home")}
                        onMouseLeave = {()=>handleMenuOption(null)}
                        onClick={()=>handleClick()}>Home</a>
                        <a href="#about" 
                        onMouseEnter={()=> handleMenuOption("about")}
                        onMouseLeave = {()=>handleMenuOption(null)}
                        onClick={()=>handleClick()}>About</a>
                        <a href="#work" 
                        onMouseEnter={()=> handleMenuOption("work")}
                        onMouseLeave = {()=>handleMenuOption(null)}
                        onClick={()=>handleClick()}>Work</a>
                        <a href="#contact" 
                        onMouseEnter={()=> handleMenuOption("contact")}
                        onMouseLeave = {()=>handleMenuOption(null)}
                        onClick={()=>handleClick()}>Contact</a>
                    </MenuMainStyled>
                </MenuCntStyled>
            </MenuPageCntStyled>
        </MenuPageStyled>
        )
}

export default Menu