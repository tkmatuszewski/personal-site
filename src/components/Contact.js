import styled from "styled-components";
import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ContactStyled = styled.section`
    width: 100%;
    min-height: 120vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, orange, violet) ;

    .container {
      width: 85%;
    }
`
const ContactStrongStyled = styled.div`
  font-family: "Raleway", sans-serif;

  div {
    width: 20%;
    height: 2px;
    background: white;
    margin-right: 2%;
  }

  .row {
    display: flex;
    font-size: 9vw;
    align-items: center;
    opacity: 0;
    color: white;

    &:first-of-type {
      transform: translateX(-50vw);
    }
    &:last-of-type {
      transform: translateX(50vw);
    }

    a {
      color: #f1e924;
      text-decoration: none;
      font-weight: lighter;
    }

    button {
      position: relative;
      overflow: hidden;
      height: 9vw;
      line-height: 9vw;
      border: none;
      background: none;
    }

    span {
      display: block;
      font-size: 9vw;
      color: white;
      text-align: start;
    }
  }
`;

const ContactDataContaier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Raleway", sans-serif;
  opacity: 0;
  margin-top: 20vh;
`

const ContactDataColumn = styled.div`
  width: 33%;
  height: 100%;
  color: white;
  font-weight: 500;
  font-size: 1.2rem ;
  text-align: center ;

  @media (max-width: 1196px) {
    width: 100%;
    margin-top: 10%;
    text-align: center;
  }

  &:nth-of-type(2) {
    border: 1px solid white;
    border-top: none;
    border-bottom: none;
      @media (max-width: 1196px) { 
      border: none;
    }
  }

    a {
      font-style: normal;
      text-decoration: none;
      color: white;
    }
`;

const ContactDataRow = styled.span`
  display: block;
  line-height: 1.5;
  letter-spacing: 0.1em;

  address span {
    font-style: normal;
  }
`;

const Contact = () => {

  gsap.registerPlugin(ScrollTrigger);
  const contactStrong = useRef()
  const mailMe = useRef()
  const data = useRef()

  const s = gsap.utils.selector(contactStrong);
  const m = gsap.utils.selector(mailMe);

  const handleMouseEnter = () => {
    gsap.to(m(".mail__me"), {
      y: "-9vw",
      ease: "Power4.out",
      duration: .3
    })
  }
  const handleMouseLeave = () => {
    gsap.to(m(".mail__me"), {
      y: 0,
      ease: "Power4.out",
      duration: 0.3,
    });
  };


  useEffect(() => {

    gsap.to(s(".row"), {scrollTrigger: {
      trigger: "#contact",
      end: "center center",
      start: "top bottom",
      scrub: true,
    }, duration: "5", x: "0", alpha: "1", ease: "circ.easeOut"
    });

    gsap.to(data.current, {
      scrollTrigger: {
          trigger: "#contact",
          start: "center center",
          end: "bottom bottom"
        },
      duration: "1",
      alpha: 1,
      y: -30,
      ease: "circ.easeOut"
    })
  }, []);
  
    return (
      <ContactStyled id="contact">
        <div className="container">
          <ContactStrongStyled ref={contactStrong}>
            <span className="row">Do you want to talk?</span>
            <span className="row">
              <div />
              <button ref={mailMe} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="mail__me">Get in touch</span>
                <span className="mail__me">
                  <a href="mailto:tkmatuszewski@gmail.com">Write me!</a>
                </span>
              </button>
            </span>
          </ContactStrongStyled>
          <ContactDataContaier ref={data}>
            <ContactDataColumn>
              <ContactDataRow>Tomasz Matuszewski</ContactDataRow>
              <ContactDataRow>Frontend Developer</ContactDataRow>
            </ContactDataColumn>
            <ContactDataColumn>
              <address>
                <ContactDataRow>tkmatuszewski@gmail.com</ContactDataRow>
                <ContactDataRow>Warsaw, Poland</ContactDataRow>
              </address>
            </ContactDataColumn>
            <ContactDataColumn>
              <ContactDataRow>
                <a
                  href="https://linkedin.com/in/matuszewski-tomasz"
                  target="blank"
                >
                  Linkedin
                </a>
              </ContactDataRow>
              <ContactDataRow>
                <a href="https://github.com/tkmatuszewski" target="blank">
                  Github
                </a>
              </ContactDataRow>
            </ContactDataColumn>
          </ContactDataContaier>
        </div>
      </ContactStyled>
    );
}

export default Contact;