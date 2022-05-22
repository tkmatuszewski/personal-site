import styled from "styled-components";
import React, { useEffect, useRef} from "react";
import { gsap } from "gsap/all";

const HeroPageStyled = styled.section`
  background: white;
  height: 130vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const HeroTextStyled = styled.ul`
  width: 85%;
  list-style-type: none;
  margin-bottom: 35vh;

  .line {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .text {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    line-height: 1;
    position: absolute;
    color: black;
    text-transform: uppercase;
  }

  .color {
    color: orange;
  }

  .text,
  .line {
    font-size: 10vw;
    height: 10vw;
  }
`;

const SwitchWordStyled = styled.button`
  background: transparent;
  border: none;
  font-size: 10vw;
  height: 10vw;
  cursor: pointer;
`;


const SwitchWord = ({handleMouseEnter, handleMouseLeave}) => {
  
  const switchWord = useRef();

  useEffect(() => {
    gsap.to(switchWord.current, {
      y: 0,
      ease: "power4.out",
      duration: 1,
      delay: 1.5,
    });
  });

  return (
    <div className="line">
      <SwitchWordStyled className ="text color" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={switchWord}>fun.</SwitchWordStyled>
    </div>
  );
}

const HeroPage = () => {

  const hero = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);

  const handleMouseEnter = () => {

    return gsap.to(hero.current, {
      background: `radial-gradient(circle, #ee82ee, #e9a7fc, #e8c7ff, #efe4ff, #ffffff)`,
      ease: "Power4.easeOut",
    });
  };
  
  const handleMouseLeave = () => {
    return gsap.to(hero.current, {
      background: "white",
      ease: "Power4.easeOut",
    });
  };

  useEffect(() => {
       gsap.from(q(".text"), {
         y: 500,
         ease: "power4.out",
         delay: 0.5,
         stagger: 0.2,
         duration: 1
       });
     }, [q]);

  return (
    <HeroPageStyled id="home" ref={hero}>
      <HeroTextStyled ref={el}>
        <li className="line">
          <span className="text">Development</span>
        </li>
        <li className="line">
          <span className="text">with a drop of</span>
        </li>
        <SwitchWord handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
      </HeroTextStyled>
    </HeroPageStyled>
    );
}

export default HeroPage;