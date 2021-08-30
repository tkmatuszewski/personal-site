import styled from "styled-components";
import React, { useEffect, useRef} from "react";
import { gsap } from "gsap/all";

const HeroBarsStyled = styled.div`
        grid-row: 1/3;
        grid-column: 1/4;
        align-self: bottom;
        justify-self: right;
        width: 100%;
        background: white;
        display: flex;
        justify-content: flex-end;
        overflow: hidden;
`

const BarCnt = styled.div`
    background: black;
    height: auto;
    padding: 0 3%;
    margin: 0.5%;
    opacity: 1;
    z-index: 1;
`

const HeroStrong = styled.strong`
    display: block;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 5vh;
    align-self: center;
    color: white;
    margin: 0 auto;
    margin-top: 30vh;
`

const HeroBars = () => {

    const bar1 = useRef();
    const bar2 = useRef();
    const bar3 = useRef();
    const bar4 = useRef();
    const bar5 = useRef();

    const generateRandom = ()=> {
        const number= Math.floor(Math.random() * 11);
        return String(-number+"vh")
    }

    useEffect(() => {
        gsap.to(bar1.current, {duration: "1", y: generateRandom(), ease:"Power3.easeOut", delay: "1"})
        gsap.to(bar2.current, {duration: "1", y: generateRandom(), ease:"Power3.easeOut", delay: "1"})
        gsap.to(bar4.current, {duration: "1", y: generateRandom(), ease:"Power3.easeOut", delay: "1"})
        gsap.to(bar5.current, {duration: "1", y: generateRandom(), ease:"Power3.easeOut", delay: "1"})
        gsap.to(bar3.current, {duration: "1", y: "+=15vh", ease:"Power3.easeOut", delay: "1"});
     }, []);

    return (
        <HeroBarsStyled>
            <BarCnt>
                <HeroStrong ref={bar1}>I</HeroStrong>
            </BarCnt>
            <BarCnt>
                 <HeroStrong ref={bar2}>am</HeroStrong>
            </BarCnt>
            <BarCnt>
                <HeroStrong ref={bar3}>diffrent</HeroStrong>
            </BarCnt>
            <BarCnt>
                <HeroStrong ref={bar4}>type</HeroStrong>
            </BarCnt>
            <BarCnt>
                <HeroStrong ref={bar4}>of</HeroStrong>
            </BarCnt>
            <BarCnt>
                <HeroStrong ref={bar5}>dev.</HeroStrong>
            </BarCnt>
        </HeroBarsStyled>
    )
}


export default HeroBars;