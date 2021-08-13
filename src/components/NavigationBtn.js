import styled from "styled-components";

const NavigationBtn=styled.button`
    grid-column: 2/3;
    grid-row:2/3;
    justify-self: flex-end;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.25px solid white;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    position: relative;

    &:before {
        content: "";
        width: 1px;
        height: 0.5rem;
        background-color: white;
        position: absolute;
        transform: translate(-50%, -50%);
        // display: none;
        transition: 1s;
    }
    &:after {
        content: "";
        width: 1px;
        height: 0.5rem;
        background-color: white;
        position: absolute;
        // display: none;
        transition: 1s;
        tranform: translate(-50%,-50%)rotate(90deg);
    }
`
export default NavigationBtn