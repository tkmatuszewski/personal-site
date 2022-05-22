import styled from "styled-components";
import React from "react";

const FooterStyled = styled.footer`

  width: 100%;
  display: flex;
  flex-direction: column ;
  background: black;

  .footer__cnt {
    display: flex;
     @media (max-width: 768px) {
              display: none;
        }
  }

  .footer__logo {
    font-size: 2.5vh;
    font-weight: 900;
    font-family: "Montserrrat", sans-serif;
    color: white;
    opacity: 1;
    line-height:1 ;
    padding: 1rem 0;

    span {
      display:block ;
    }
  }

  .footer__col__name {
    padding: 1rem 0 ;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    color: white;
  }

  .footer__col {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding: 1rem 2rem;
    border-right: 1px solid #2F2F33;
  }

    a {
      font-family: "Raleway", sans-serif;
      font-size: 1.1rem ;
      text-decoration: none;
      font-weight: strong;
      text-align: center;
      color: gray;
      position: relative;
      cursor: pointer;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: white;
      }
      transition: 0.5s;
      &:hover {
        color: white;
      }
      a:hover:after {
        width: 120%;
      }
    }
  }

  .footer__copyright {
    font-family: "Merriweather", serif;
    font-weight: light;
    font-size: 1.1rem;
    color: gray;
    border-top: 1px solid #2F2F33 ;
    text-align: center;
    padding:0.5rem ;
  
`;



const ThankYou = styled.span`
  display: block;
  font-family: "Merriweather", serif;
  font-weight: light;
  font-size: 3vh;
  color: gray;
`


const Footer = ()=> {
    return (
      <FooterStyled>
        <div className="footer__cnt">
          <div className="footer__col">
            <div className="footer__logo">
              <span>TK</span>
              <span>MAT</span>
            </div>
            <ThankYou>Thank you for visit!</ThankYou>
          </div>
          <div className="footer__col">
            <span className="footer__col__name">Site map</span>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__col">
            <span className="footer__col__name">Contact</span>
            <a href="https://linkedin.com/in/matuszewski-tomasz" target="blank">
              Linkedin
            </a>
            <a href="https://github.com/tkmatuszewski" target="blank">
              Github
            </a>
          </div>
        </div>
        <div className="footer__copyright">&copy; tkmatuszewski 2022</div>
      </FooterStyled>
    );
}

export default Footer;