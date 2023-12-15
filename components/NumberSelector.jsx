import { useState } from 'react'
import styled from "styled-components"

const Box = styled.div`
    height: 50px;
    width: 50px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
    @media screen and (width < 600px) {
        width: 40px;
        height: 40px;
    }
`;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    width: 80%;

    .flex {
        display: flex;
        gap: 24px;
    }
    p {
        font-size: 24px;
        font-weight: 700;
    }
    .error {
        color: red;
    }
    @media screen and (width < 600px) {
      width: 90%;
      align-items: center;
      .flex {
        gap: 10px;
      }
    }
`;

function NumberSelector({ error, setError, selectedNumber, setSelectedNumber }) {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className="flex">
                {arrNumber.map((value, index) =>
                    <Box
                        isSelected={value === selectedNumber}
                        onClick={() => numberSelectorHandler(value)}
                        key={index}>{value}
                    </Box>
                )}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector