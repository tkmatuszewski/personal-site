import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import javascript from "../images/javascript.png";
import react from "../images/react.png"
import html from "../images/html.png"
import css from "../images/css.png"
import git from "../images/git.png"
import firebase from "../images/firebase.png";
import figma from "../images/figma.png";
import sass from "../images/sass.png";
import npm from "../images/npm.png";
import gatsby from "../images/gatsby.png";
import webpack from "../images/webpack.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const SkillsStyled = styled.section`
    width: 90%;
    min-height: 70vh;
    margin: 0 auto;
`

const SkillsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 5vh;
  margin-top: 10vh;
  @media (max-width: 500px) {
    padding: 0 ;
  }
`;
const SkillStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  opacity: 0;

  img {
    flex-grow:1;
    @media (max-width: 1000px) {
      width: 75px;
      height: 75px;
    }
    @media (max-width: 500px) {
      width: 50px;
      height: 50px;
    }
  }

  .skill__name {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    margin-top: 1rem;
    font-size: 2vmin;
  }
`;

const Skill = ({src, name, alt}) => {
  return (
    <SkillStyled className="skill">
      <img width="100" height="100" src={src} alt={alt} />
      <span className="skill__name">{name}</span>
    </SkillStyled>
  );
}

const Skills = () => {

      const skillsList = useRef();
      const q = gsap.utils.selector(skillsList);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.to(q(".skill"), {
      scrollTrigger: {
        trigger: ".skill",
        start: "top center"
      },
        duration: 2,
        opacity: 0.3,
        ease: "power4.out",
        stagger: 0.1
    });
  });
  
    return (
      <SkillsStyled>
        <SkillsList ref={skillsList}>
          <Skill src={javascript} name={"javascript"} alt={"javascript logo"} />
          <Skill src={react} name={"react"} alt={"react logo"} />
          <Skill src={gatsby} name={"gatsby"} alt={"gatsby logo"} />
          <Skill src={git} name={"git"} alt={"git logo"} />
          <Skill src={html} name={"html5"} alt={"html5 logo"} />
          <Skill src={css} name={"css3"} alt={"css3 logo"} />
          <Skill src={sass} name={"sass"} alt={"sass logo"} />
          <Skill src={webpack} name={"webpack"} alt={"webpack logo"} />
          <Skill src={npm} name={"npm"} alt={"npm logo"} />
          <Skill src={firebase} name={"firebase"} alt={"firebase logo"} />
          <Skill src={figma} name={"figma"} alt={"figma logo"} />
        </SkillsList>
      </SkillsStyled>
    );
}

export default Skills