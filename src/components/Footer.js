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
        <a>Home</a>
        <a>About</a>
        <a>Work</a>
        <a>Contact</a>
    </FooterStyled>
    )
}

export default Footer;