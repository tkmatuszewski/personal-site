import styled from "styled-components";
import React from "react";

const WorkStyled = styled.section`
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    
    ul {
        list-style-type: none;
        min-height: 100%;
        transform: translateX(-15%);
    }

    li {
        width: 80%;
        max-height: 34vh;
        display: flex;
        align-items: center;
        font-size: 8vh;
        font-weight: lighter;
        font-family: 'Raleway', sans-serif;
        transform: skew(-40deg);
        background: black;
        border-bottom: 1px solid darkgrey;
        transition: 0.4s;
        overflow: hidden;
        position:relative;
        display: flex;
    }
    li:nth-of-type(2) {
        width: 70%;
    }
    li:nth-of-type(3) {
        width: 60%;
        border-bottom: 3px solid black;
    }


    a {
        display: block;
        width: 50%;
        color: white;
        text-decoration: none;
        margin-left: 20vw;
        line-height: 33vh;
        /* transform: skew(40deg); */
        }
`
const HoverStyled = styled.div`
        width: 100%;
        height: 100%;
        background: black;
        background-position: 30%;
        /* background-position: 90%; */
        transform: skew(40deg);
        cursor: pointer;
        transition: 0.3;

        &:hover {
        height: 100%;
        background: url(${props => props.bg}) no-repeat;
        background-size: cover;
        background-position: 30%;
        }

        &:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(29deg, rgba(2,0,36,1) 0%, rgba(26,26,29,0.7777485994397759) 39%, rgba(0,0,0,1) 100%);
        }
    `
    
const WorkSign = styled.h2`
        font-size: 20vh;
        font-family: 'Raleway',sans-serif;
        font-weight: 700;
        color: lightgray;
        position: absolute;
        top:20%;
        right: 10%;
`


const Work = ()=> {
    return (
        <WorkStyled id="work">
            <WorkSign>Work</WorkSign>
            <ul>
                <li>
                    <HoverStyled bg={"https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80"}>
                        <a href="">Babylab db</a>
                    </HoverStyled>
                </li>  
                <li>
                    <HoverStyled bg={"https://images.unsplash.com/photo-1591159221879-be4e0e5026a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}>
                       <a href="">Surf school </a>
                    </HoverStyled>
                </li>
                <li>
                    <HoverStyled bg={"https://images.unsplash.com/photo-1564419320603-628d868a193f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=643&q=80"}>
                        <a href="">One more</a>
                    </HoverStyled>
                </li>
            </ul>
        </WorkStyled>
    )
}

export default Work;