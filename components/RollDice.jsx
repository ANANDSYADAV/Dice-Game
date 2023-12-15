import { useState } from "react";
import styled from "styled-components"

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    img {
        height: 150px;
        width: 150px;
        cursor: pointer;
    }
`;

function RollDice({ currentDice, rollDice, selectedNumber }) {

    return (
        <DiceContainer>
            <div
            onClick={rollDice}>
                <img src={`/assets/images/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice