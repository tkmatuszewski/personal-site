import styled from "styled-components";
import React, { useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeaderStyled = styled.header`
    position: fixed;
    top: 2.5vh;
    left: 4vw;

    width: 92vw;
    display: flex;
    justify-content: space-between;
    color: black;
    opacity: 0 ;
`;

const Header =({children})=> {

  gsap.registerPlugin(ScrollTrigger);
  const header = useRef();
  const tl = useRef();


  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(header.current, {
        alpha: "1",
        ease: "Power3.easeOut",
      })
      .to(header.current, {
        scrollTrigger: {
          trigger: "#about",
          start: "top top"
        },
        color: "white"
      })
      .to(header.current, {
        scrollTrigger: {
          trigger: "#about",
          start: "bottom top"
        },
        color: "white"
      })
      .to(header.current, {
        scrollTrigger: {
          trigger: "#about",
          start: "bottom top"
        },
        color: "black"
      });
  })
    return (
      <HeaderStyled ref={header}>
        {children}
      </HeaderStyled>
    )
}

export default Header