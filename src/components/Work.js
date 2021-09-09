import styled from "styled-components";
import React from "react";

const WorkStyled = styled.section`
    
    ul {
        justify-self: flex-end;
        list-style-type: none;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        a {
            text-decoration: none;
            color: inherit;
            width: 100%;
        }
    }

    li {
        width: 100%;
        min-height: 20vh;
        font-family: 'Raleway', sans-serif;
        transition: 0.4s;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid lightgray;
        @media (max-width: 425px) {
            min-height: 15vh;
        }

        &:first-of-type {
            border-top: 1px solid lightgray;
        }

        span {
            color: gray;
            display: block;
            width: 15%;
        }
    }
    `

    const WorkCnt = styled.div`
        width: 80%;
        margin: 0 auto;
    `

    const Container = styled.div`    
        width: 80%;
        display: flex;
        justify-content: space-between;
    `
    
const ProjectTitle = styled.h3`
    width: 33%;
    font: 'Raleway, sans-serif'; 
    font-weight: bold;
    font-size : 4vh;
    text-decoration: none;
    color: darken(darkgrey, 10);
    @media (max-width: 768px) {
            font-size: 3vh;
        }
`

const WorkSign = styled.h2`
    margin-top: 15vh;
    font-size: 20vh;
    font-family: 'Raleway',sans-serif;
    font-weight: 700;
    opacity: 0.3;
    @media (max-width: 425px) {
        margin-top: 5vh;
        font-size: 10vh;
    }
    `
    


const Work = ()=> {
    return (
        <WorkStyled id="work">
            <WorkCnt>
            <WorkSign>Work.</WorkSign>
            <ul>
                <a href="">
                    <li>
                        <Container>
                            <ProjectTitle>
                                Babylab database
                            </ProjectTitle>
                            <span>Desktop app</span>
                        </Container>
                    </li>
                </a>
                <a href="">
                    <li>
                        <Container>
                            <ProjectTitle>
                                Surf School
                            </ProjectTitle>
                            <span>Website</span>
                        </Container>
                    </li>
                </a>
                <a href="">
                    <li>
                        <Container>
                            <ProjectTitle>
                                Comming soon
                            </ProjectTitle>
                            <span>In progress</span>
                        </Container>
                    </li>
                </a>
            </ul>
            </WorkCnt>
        </WorkStyled>
    )
}

export default Work;