import styled from "styled-components";
import React, { useEffect, useRef} from "react";
import gsap from "gsap";

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    position: fixed;
    top:0;
    left:0;
    transform: translateY(3vh);
    color: black;
    background: white;
    border-bottom: 0.25px solid lightgray;
    z-index: 100;
`

const HeaderCnt = styled.div`
  width: 90%;
  height : 10vh;
  display: flex;
  justify-content:space-between;
  align-items: center;
`

const Header =({children})=> {

    const header =useRef();


    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#about",
              start: "top top",
              end: "center center",
              scrub: true,
            }
          });
        gsap.to(header.current, { duration:"1.5", y : "-=3vh", alpha: "1", ease: 
        "Power3.easeOut"});
        tl.to(header.current, { duration: "0.2" , ease: "circ.easeOut", backgroundColor: "transparent", border: "none", color: "white"})
        gsap.to(header.current, { scrollTrigger: {
          trigger: "#about",
          start: "center center",
          end: "top bottom",
          scrub: true,
        }, duration: "1.5" , ease: "circ.easeOut", backgroundColor: "black"})
      },
     []);
    return (
        <HeaderStyled ref={header}>
          <HeaderCnt>
            {children}
          </HeaderCnt>
        </HeaderStyled>
    )
}

export default Header