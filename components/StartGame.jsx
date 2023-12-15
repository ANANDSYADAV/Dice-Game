import styled from 'styled-components'
import { Button } from './ButtonStyled';

const Container = styled.div`
    width: 80vw;
    margin: 8px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media screen and (width < 600px) {
       img {
        width: 400px;
        height: 100%;
       }
    }
`;

const Text = styled.div`
    font-size: 50px;
    color: black;
    font-weight: 700;
`;

const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    @media screen and (width < 600px) {
        margin-top: 30px;
       align-items: center;
    }
`;

function StartGame({ toggle }) {
  return (
    <Container>
        <img src="/assets/images/dices.png" alt="dices" />
        <InnerDiv>
            <Text>Dice Game</Text>
            <Button onClick={toggle}>Play Now</Button>
        </InnerDiv>
    </Container>
  )
}

export default StartGame;