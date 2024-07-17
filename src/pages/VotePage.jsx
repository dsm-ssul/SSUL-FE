import styled from "styled-components"

import Header from "../components/Header"
import VotingComponent from "../components/Voting"

export const VotePage = () => {
    return(
        <>
            <Header/>
            <Center>
                <VotingComponent question= {"삼성전자 앞으로?"} options = {["더 오른다", "아니다"]} questionId="q1" initialVotes={{ "더 오른다": 4, "아니다": 2 }}/>
                <VotingComponent question= {"내 연봉 4000이상"} options = {["맞다", "아니다"]} questionId="q2" initialVotes={{ "맞다": 3, "아니다": 3 }}/>
            </Center>
        </>
    )
}


const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 840px;
`;