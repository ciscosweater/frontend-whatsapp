import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #e2e1de;
`;

export const Background = styled.div`
    background-color: #00a884;
    height: 20%;
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
`;

export const ContactsList = styled.div`
    width: 30%;
    height: 100%;
    border-right: 1px solid #e6e6e6;
`;

export const ChatOptions = styled.div`
    width: 100%;
    height: 80px;
    background-color: #f0f2f5;
`;

export const ChatItem = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px solid #f0f2f5;
    border-bottom: 1px solid #f0f2f5;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ImageProfile = styled.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
`;

export const TitleChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const TitleMessage = styled.span`
    font-size: 18px;
`;

export const LastMessage = styled.span`
    color: #808080;
`;