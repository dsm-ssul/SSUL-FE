import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import Header from "../components/Header";

ChartJS.register(ArcElement, Tooltip, Legend);

export const MainPage = () => {
    const data = {
        datasets: [
            {
                data: [40, 35, 15, 10],
                backgroundColor: ["#5C7EBF", "#709FBF", "#8CC0E4", "#A4D5F6"],
            },
        ],
    };
    const colors = ["#5C7EBF", "#709FBF", "#8CC0E4", "#A4D5F6"];

    return (
        <>
            <Header />
            <MainContainer>
                <Main>
                    <Doughnut data={data}/>
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
                            <Text>효과적인 금융생활</Text>
                        </TextBox>
                        <Content>
                            20대 초반의 경우, 생활비와 고정비 비중이 높은 편입니다. 이는 독립 초기 단계에서 필수적인 지출이 많기 때문입니다. 저축 비율을 25%로 설정한 것은 장기적인 재무 안정성을 위해 중요하며, 자산증식에도 10%를 할당하여 미래를 위한 투자를 시작하는 것이 좋습니다. 이 비율은 안정적인 재무 관리와 미래 준비의 균형을 맞추는 데 도움이 될 것입니다.
                        </Content>
                    </Answer>
                </AnswerContainer>
                <AnswerContainer2>
                    <Answer2>
                        <TextBox2>
                            <Text>효과적인 금융생활</Text>
                        </TextBox2>
                        <Content>
                            20대 초반의 월급 230만원 수준을 고려할 때, 저축과 자산증식을 위한 전략은 다음과 같습니다. 먼저, 저축의 경우 단기와 장기 목표를 동시에 고려해야 합니다. 단기 목표를 위해서는 6개월에서 1년 만기의 단기 정기예금을 활용하고, 장기 목표를 위해서는 2-3년 만기의 적금 상품을 선택하는 것이 좋습니다. 이를 통해 유동성과 수익성을 동시에 확보할 수 있습니다. 자산증식의 경우, 초기에는 위험을 최소화하면서 안정적인 수익을 추구해야 합니다. 따라서 국내 우량 기업의 주식에 소액으로 분산 투자하는 방식을 추천합니다. 또한, 월 10만원 정도로 인덱스 펀드에 정기적으로 투자하는 것도 좋은 방법입니다. 이러한 전략은 장기적으로 복리 효과를 누릴 수 있게 해주며, 시간이 지남에 따라 투자 금액을 점진적으로 늘려갈 수 있습니다.
                        </Content>
                    </Answer2>
                </AnswerContainer2>
            </AnswerCenter>
        </>
    );
};


const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 100px 0 0 0;
`;

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
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
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

const Content = styled.div`
    font-size: 28px;
    font-weight: bold;
    width: 1288px;
`;
