import styled from "styled-components";

export const Button = styled.button`
    font-size: 20px;
    color: white;
    background-color: black;
    width: 200px;
    padding: 8px 10px;
    font-weight: 500;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in;
    &:hover {
        color: black;
        background-color: white;
        border: 1px solid black;
        transition: 0.3s ease-in;
    }
`

export const OutlineButton = styled(Button)`
    color: black;
    background-color: white;
   
    border: 1px solid black;
    &:hover {
        color: white;
        background-color: black;
    }
`