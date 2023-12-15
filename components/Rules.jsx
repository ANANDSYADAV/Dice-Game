import styled from "styled-components"

const RulesContainer = styled.div`
    width: 80%;
    margin: 10px auto;
    background-color: #FBF1F1;
    padding: 20px;
    h2 {
        font-size: 20px;
    }
`;

function Rules() {
    return (
        <RulesContainer>
            <div className="text">
                <h2>How to play dice game</h2>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>If you get wrong guess then 2 point will be dedcuted </p>
            </div>
        </RulesContainer>
    )
}

export default Rules