import styled from "styled-components";
import React from "react";

const FooterStyled = styled.footer`
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid darkgray;

  a {
    display: inline-block;
    width: 7%;
    font-family: "Merriweather", serif;
    font-size: 2vh;
    text-decoration: none;
    color: gray;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      color: black;
    }
  }
`;

const Footer = ()=> {
    return (
    <FooterStyled>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
    </FooterStyled>
    )
}

export default Footer;