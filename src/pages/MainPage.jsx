import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import Header from "../components/Header";

ChartJS.register(ArcElement, Tooltip, Legend);

export const MainPage = () => {
    const data = {
        datasets: [
            {
                data: [20, 20, 20, 20],
                backgroundColor: ["#5C7EBF", "#709FBF", "#8CC0E4", "#A4D5F6"],
            },
        ],
    };

    const Options = {};

    return(
        <>
            <Header/>
            <MainContainer>
                <Main>
                    <Doughnut data={data} options={Options}></Doughnut>
                </Main>
                <ListSquareContainer>
                    <ListContainer>
                        <Square/>
                        <Font>생활비</Font>
                    </ListContainer>
                    <ListContainer>
                        <Square/>
                        <Font>고정비</Font>
                    </ListContainer>
                    <ListContainer>
                        <Square/>
                        <Font>저축비</Font>
                    </ListContainer>
                    <ListContainer>
                        <Square/>
                        <Font>재테크</Font>
                    </ListContainer>
                </ListSquareContainer>
            </MainContainer>
            <AnswerCenter>
                <AnswerContainer>
                    <Answer>
                        <TextBox>
                            <Text>
                                효과적인 금융생활
                            </Text>
                        </TextBox>
                    </Answer>
                </AnswerContainer>
            </AnswerCenter>
        </>
    )
}

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 100px 0 0 0;
`

const Main = styled.div`
    display: flex;
    align-items: center;
    width: 305px;
`;

const ListSquareContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Font = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #5C7EBF;
`;

const Square = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: #5C7EBF;
    margin: 0 20px 0 0;
`

const ListContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0 0 0;
`;

const AnswerCenter = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px;
`

const AnswerContainer = styled.div`
    width: 1478px;
    height: 355.51px;
    display: flex;
    align-items: end;
`;

const Answer = styled.div`
    width: 1478px;
    height: 335.51px;
    border: 1px solid black;
    border-radius: 15px;
`;

const TextBox = styled.div`
    position: absolute;
    background-color: white;
    left: 300px;
    top: 520px;
    width: 253px;
    height: 39px;
    display: flex;
    justify-content: center;
`;

const Text = styled.div`
    font-weight: bold;
    font-size: 28px;
    color: #5163D2;
`;