import styled from "styled-components";
import React from "react";



const LogoStyled = styled.div`
  font-size: 2vh;
  font-weight: 900;
  font-family: "Montserrrat", sans-serif;
  align-self: center;
  color: inherit;
  opacity: 1;
  line-height:1 ;

  a {
    text-decoration: none;
    color: inherit;
  }

  span {
    display: block;
  }
`;

const Logo = () => {
    
    return (
      <LogoStyled>
        <a href="#home">
          <span>TK</span>
          <span>MAT</span>
        </a>
      </LogoStyled>
    );
}

export default Logo;