import styled from "styled-components";

export const LoadingPage = () => {
    return(
        <Center>
            <Text>Loading...</Text>
        </Center>
    )
}

const Center = styled.div`
    width: 1920px;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    color: #4F63D2;
    font-size: 60px;
    font-weight: bold;
`;

