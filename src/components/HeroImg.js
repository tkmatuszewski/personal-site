import styled from "styled-components";
import React, {useRef, useEffect} from "react";
import gsap from "gsap";

const HeroImgStyled = styled.div`
    width: 100%;
    height: 80vh;
    background: url("https://images.unsplash.com/photo-1541599468348-e96984315921?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80") no-repeat;
    background-size: cover;
    background-position-y: center;
    transform: translateY(5vh);
    margin-top: 5vh;
    opacity: 0;
`

const HeroImg = () => {
    const img = useRef();

    useEffect(() => {
        gsap.to(img.current, {duration: "1",y : "-=5vh", alpha: "1", ease:"Power3.easeOut"});
    }, []);
    return (
        <HeroImgStyled ref={img}/>
    )
}

export default HeroImg;