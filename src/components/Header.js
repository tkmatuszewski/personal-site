import styled from "styled-components";
import React, { useEffect, useRef} from "react";
import gsap from "gsap";

const HeaderStyled = styled.header`
    height : 15vh;
    width: 100%;
    display: grid;
    grid-template-columns: 5% 90% 5%;
    opacity: 0;
    position: fixed;
    top:0;
    left:0;
    transform: translateY(3vh);
    background: white;
    z-index: 100;
`
const Header =({children})=> {

    const header =useRef();
    useEffect(() => {
        gsap.to(header.current, { duration:"1.5", y : "-=3vh", alpha: "1", ease: 
        "Power3.easeOut"});
      }, []);
    return (
        <HeaderStyled id="home" ref={header}>
            {children}
        </HeaderStyled>
    )
}

export default Header