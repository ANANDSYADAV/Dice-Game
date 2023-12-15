import styled from 'styled-components'

const ScoreContainer = styled.div`
    width: 10%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 40px;
    h1 {
        font-size: 50px;
    }
    p {
        font-size: 20px;
    }
    @media screen and (width < 600px) {
      width: 100%;
    }
`;

function TotalScore({ currentScore }) {

  return (
    <ScoreContainer>
        <h1>{currentScore}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore