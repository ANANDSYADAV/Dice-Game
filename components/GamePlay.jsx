import { useState } from 'react'
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice";
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { Button, OutlineButton } from './ButtonStyled'
import Rules from './Rules';

const MainContainer = styled.main`
    padding-top: 10px;
    .top-section {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .bottom-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
    }
    .bottom-buttons Button {
        margin-top: 10px;
    }
    @media screen and (width < 600px) {
        .top-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }
    }
`;

function GamePlay() {
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [currentScore, setCurrentScore] = useState(0);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    // Generate number having both min and max inclusive
    const RandomNumberGenerator = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number!");
            return;
        }
        setError("");

        const randomNumber = RandomNumberGenerator(1, 6);
        setCurrentDice(randomNumber);

        if (selectedNumber === randomNumber) {
            setCurrentScore((prev) => prev + randomNumber);
        } else {
            setCurrentScore((prev) => prev - 1);
        }

        setSelectedNumber();
    }

    return (
        <MainContainer>
            <div className="top-section">
                <TotalScore currentScore={currentScore} />
                <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} selectedNumber={selectedNumber} />
            <div className='bottom-buttons'>
                <OutlineButton
                    onClick={() => setCurrentScore(0)}
                    className='reset-score-btn'>Reset Score</OutlineButton>
                <Button
                    onClick={() => setShowRules((prev) => !prev)}
                >Toggle Rules</Button>
            </div>

            {
                showRules ? <Rules /> : ''
            }
        </MainContainer>
    )
}

export default GamePlay