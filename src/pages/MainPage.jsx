import axios from 'axios';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useEffect, useState } from 'react';
import { Doughnut } from "react-chartjs-2";
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import Header from "../components/Header";
import { LoadingPage } from "./LoadingPage";

ChartJS.register(ArcElement, Tooltip, Legend);

export const MainPage = () => {
    const { state } = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [advices, setAdvices] = useState({ first_advice: '', second_advice: '' });

    useEffect(() => {
        console.log('Current state:', state);

        if (!state || !state.name) {
            console.error('State or name is undefined');
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get('https://asdf.loca.lt/good', {
                    params: {
                        name: state.name,
                    },
                });
                const { ssang, ggo, jju, gge, first_advice, second_advice } = response.data;
                const colors = ["#5C7EBF", "#709FBF", "#8CC0E4", "#A4D5F6"];
                setData({
                    datasets: [
                        {
                            data: [ssang, ggo, jju, gge],
                            backgroundColor: colors,
                        },
                    ],
                });
                setAdvices({ first_advice, second_advice });
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [state]);

    if (loading) {
        return <LoadingPage />;
    }
    const colors = ["#5C7EBF", "#709FBF", "#8CC0E4", "#A4D5F6"];
    
    return (
        <>
            <Header />
            <MainContainer>
                <Main>
                    {data ? <Doughnut data={data} /> : <LoadingPage />}
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
                            {advices.first_advice}
                        </Content>
                    </Answer>
                </AnswerContainer>
                <AnswerContainer2>
                    <Answer2>
                        <TextBox2>
                            <Text>효과적인 금융생활</Text>
                        </TextBox2>
                        <Content>
                            {advices.second_advice}
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