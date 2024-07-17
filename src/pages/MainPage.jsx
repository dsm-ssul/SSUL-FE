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

    const options = {};

    const colors = ["#5C7EBF", "#709FBF", "#8CC0E4", "#A4D5F6"];

    return(
        <>
            <Header/>
            <MainContainer>
                <Main>
                    <Doughnut data={data} options={options}></Doughnut>
                </Main>
                <ListSquareContainer>
                    {["생활비", "고정비", "저축비", "재테크"].map((label, index) => (
                        <ListContainer key={index}>
                            <Square color={colors[index]} />
                            <Font>{label}</Font>
                        </ListContainer>
                    ))}
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
                <AnswerContainer2>
                    <Answer2>
                        <TextBox2>
                            <Text>
                                효과적인 금융생활
                            </Text>
                        </TextBox2>
                    </Answer2>
                </AnswerContainer2>
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
    background-color: ${({ color }) => color};
    margin: 0 20px 0 0;
`;

const ListContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0 0 0;
`;

const AnswerCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`;

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

const AnswerContainer2 = styled.div`
    margin-top: 100px;
    width: 1478px;
    height: 590px;
    display: flex;
    align-items: end;
`;

const Answer2 = styled.div`
    width: 1478px;
    height: 553px;
    border: 1px solid black;
    border-radius: 15px;
`;

const TextBox2 = styled.div`
    position: absolute;
    background-color: white;
    left: 300px;
    top: 1000px;
    width: 253px;
    height: 39px;
    display: flex;
    justify-content: center;
`;
