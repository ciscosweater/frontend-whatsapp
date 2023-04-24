import styled from "styled-components";
import BackgroundImage from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #e2e1de;
`;

export const Background = styled.div`
    background-color: #445c51;
    height: 25%;
    width: 100%;
    position: absolute;
    top: 0;
`;

export const ChatContainer = styled.div`
    width: 95%;
    max-width: 1800px;
    height: 95%;
    background-color: #fff;
    position: absolute;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const ChatMessages = styled.div`
    flex: 1;
    background-image: url(${BackgroundImage});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 70%;
`;