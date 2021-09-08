import styled from "styled-components";
import React, {useRef, useEffect} from "react";
import gsap from "gsap";

const ContactStyled = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContactContainerStyled = styled.div`
  width: 75%;
  height: 80vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 60% 40%;
`;

const ContactStrongStyled = styled.div`
  grid-column: 1/2;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  align-self: end;
  color: 383838;
  
  div {
  width: 20%;
  height: 2px;
  background: darkgray;
  margin: 0 4% 0 1%;
  }
`;

const StrongRow = styled.span`
  display: flex;
  font-size: 8vh;
  align-items: center;
  opacity: 0;

  a {
    color: black;
    text-decoration: none;
    font-weight: 700;
    margin-left: 0.75rem;
    position: relative;
    z-index: 100;
  }
  a:after {
      content:"";
      width: 0;
      height: 0;
      background: gray;
      opacity: 0.3;
      position: absolute;
      bottom: 0%;
      left: 0%;
      z-index: 0;
      transition: 0.2s;
  }
  a:hover:after {
      height: 100%;
      width: 100%;
      padding: 0 5%;
  }
`;

const ContactDataContaier = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
  margin-top: 5%;
  opacity: 0;
`;

const ContactDataColumn = styled.div`
  width: 35%;
  height: 100%;
  padding: 1% 8%;

  &:nth-of-type(2) {
    border: 1px solid darkgray;
    border-top: none;
    border-bottom: none;
  }
`;

const ContactDataRow = styled.span`
  display: block;
  line-height: 1.5;
  letter-spacing: 0.1em;

  a {
    font-style: normal;
    text-decoration: none;
    color: black;
  }

  address span {
    font-style: normal;
  }
`;

const Contact = () => {

  const sline1 = useRef()
  const sline2 = useRef()
  const data = useRef()

  useEffect(() => {

    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          end: "center center",
          start: "top bottom",
          scrub: true,
        }
      });
    gsap.to(sline1.current, {scrollTrigger: {
      trigger: "#contact",
      end: "center center",
      start: "top bottom",
      scrub: true,
    }, duration:"1.5", x:"-=3vw", alpha: "1", ease: "circ.easeOut"});
    tl.to(sline2.current, { duration: "1.5" , x :"+=3vw", alpha: "1", ease: "circ.easeOut", delay : "0.7"})
    tl.to(data.current, { scrollTrigger: {
          trigger: "#contact",
          start: "center-=50 center",
          end: "bottom bottom",
          y:30,
          scrub: true,
        },
        duration: "2" , alpha: "1", ease: "circ.easeOut", delay : "0.7"})
  }, []);
  
    return (
        <ContactStyled id="contact">
            <ContactContainerStyled>
                <ContactStrongStyled>
                    <StrongRow ref={sline1}>Do you want to talk?</StrongRow>
                    <StrongRow ref={sline2}><div/>Get in <a href="mailto:tkmatuszewski@gmail.com">touch</a></StrongRow>
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
                    <ContactDataRow><a href="https://linkedin.com/in/matuszewski-tomasz" target="blank">Linkedin</a></ContactDataRow>
                    <ContactDataRow><a href="https://github.com/tkmatuszewski" target="blank">Github</a></ContactDataRow>
                    </ContactDataColumn>
                </ContactDataContaier>
            </ContactContainerStyled>
        </ContactStyled>
    )
}

export default Contact;