import styled from "styled-components";
import React from "react";
import { Link } from "gatsby";

const WorkStyled = styled.section`
    min-height: 100vh;
    
    ul {
        list-style-type: none;
        min-height: 100%;
    }

    li {
        width: 50%;
        font-size: 14vh;
        border: 3px solid black;
        font-family: 'Raleway', sans-serif;
        transform: skew(30deg);
    }
    li: nth-of-type(2) {
        
    }
    

    a {
        transform: skew(-30deg);
        color: black;
        text-decoration: none;
    }
`

const Work = ()=> {
    return (
        <WorkStyled>
            <ul>
                <li><a href="">Babylab db</a></li>
                <li><a href="">Surf school </a></li>
                <li><a href="">Babylab db </a></li>
            </ul>
        </WorkStyled>
    )
}

export default Work;