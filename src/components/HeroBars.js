import styled from "styled-components";
import React, { useEffect, useRef} from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroBarsCnt = styled.div`
min-height: 60vh;
display: flex;
`

const HeroBarsStyled = styled.ul`

        align-self: flex-end;
        width: 30%;
        margin-left: 10vw;
        list-style-type: none;
        z-index: 2;
        transform: translateY(-2vh);
`

const BarCnt = styled.li`
    width: 100%;
    color: black;
    opacity: 0;
    translate: transformX(15vw);
`

const HeroStrong = styled.strong`
    display: block;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 8vh;
`

const HeroBars = () => {

    const bar1 = useRef();
    const bar2 = useRef();
    const bar3 = useRef();
    const bar4 = useRef();

    const el = useRef();
    const q = gsap.utils.selector(el);

    useEffect(() => {
        gsap.to(q(".line"), { duration: "2", alpha: "1", x: "-=5vw", ease:"Power3.easeOut", delay :"0.5"})
        gsap.to(el.current,{scrollTrigger: {
            trigger: ".heroImg",
            start: "top-=100 center",
            end: "bottom top",
            scrub: true,
          }, y : "+=25vh", duration: "3", alpha: "1", ease: "circ.easeOut"});
        gsap.to(bar4.current, {scrollTrigger: {
            trigger: ".heroImg",
            start:"top-=100 center",
            end: "bottom top",
            scrub: true},duration: "1", color: "white", ease:"Power3.easeOut"});
     }, [q]);

    return (
        <HeroBarsCnt>
  `      <HeroBarsStyled ref={el}>
                <BarCnt ref={bar1} className="line">
                    <HeroStrong >Concept</HeroStrong>
                </BarCnt>
                <BarCnt ref={bar2} className="line">
                    <HeroStrong>Design</HeroStrong>
                </BarCnt>
                <BarCnt ref={bar3} className="line">
                    <HeroStrong>Code</HeroStrong>
                </BarCnt>
                <BarCnt ref={bar4} className="line">
                    <HeroStrong>Repeat.</HeroStrong>
                </BarCnt>
            </HeroBarsStyled>`
        </HeroBarsCnt>
    )
}


export default HeroBars;