import styled from "styled-components";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const WorkStyled = styled.section`
  font-family: "Raleway", sans-serif;
  min-height: 100vh;

  ul {
    justify-self: flex-end;
    list-style-type: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;

    a {
      text-decoration: none;
      color: inherit;
      width: 100%;
    }
  }

  li {
    width: 100%;
    color: black;
    font-family: "Raleway", sans-serif;
    font-size: 2vh;
    transition: 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 1rem 0;

    &:nth-of-type(2) {
      border: 1px solid lightgray;
    }

    span {
      color: gray;
      display: block;
      width: 15%;
      @media (max-width: 435px) {
        width: auto;
        padding: 0.5rem;
      }
    }
  }
`;

    const WorkCnt = styled.div`
      width: 80%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: column;
    `;

    const Container = styled.div`
      width: 95%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-family: "Merriweather", serif;
      }

      @media (max-width: 435px) {
        flex-direction: column ;
        align-items: flex-start ;
        span {
          width: auto;
        }
      }
    `;

const WorkSign = styled.div`
  margin-top: 15vh;
  height: 20vmin;
  font-weight: 700;
  opacity: 0.6;
  overflow: hidden;

  .work__name {
    font-size: 20vmin;
    transform: translateY(20vmin);
    background: linear-gradient(to bottom, orange, violet);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;
    


const Work = () => {
    
    gsap.registerPlugin(ScrollTrigger);
    const workTitle = useRef();

    useEffect(() => {
        gsap.to(workTitle.current, {
          scrollTrigger: {
            trigger: ".work__list",
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
            y: 0,
            ease: 'Power4.out'
        });  
    },[])

    return (
      <WorkStyled id="work">
        <WorkCnt>
          <WorkSign>
            <h2 ref={workTitle} className="work__name">
              Work.
            </h2>
          </WorkSign>
          <ul className="work__list">
            <a href="">
              <li>
                <Container>
                  <strong>Babylab database</strong>
                  <span>Desktop app</span>
                </Container>
              </li>
            </a>
            <a href="https://slideweb.gatsbyjs.io/">
              <li>
                <Container>
                  <strong>Slide.</strong>
                  <span>Website</span>
                </Container>
              </li>
            </a>
            <a href="">
              <li>
                <Container>
                  <strong>Movie Database</strong>
                  <span>Responsive app</span>
                </Container>
              </li>
            </a>
          </ul>
        </WorkCnt>
      </WorkStyled>
    );
}

export default Work;
