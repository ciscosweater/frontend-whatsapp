import styled from "styled-components";
import BackgroundImage from './assets/background.png'

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
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
`;

export const ChatHeader = styled.div`
    width: 100%;
    height: 80px;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
`;

export const ChatItem = styled.div`
    box-sizing: border-box;
    padding: 20px;
    border-top: 1px solid #f0f2f5;
    border-bottom: 1px solid #f0f2f5;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CurrentChat = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px solid #f0f2f5;
    border-bottom: 1px solid #f0f2f5;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ImageProfile = styled.img`
    width: 50px;
    height: auto;
    border-radius: 50%;
`;

export const TitleChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const CurrentChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const TitleMessage = styled.span`
    font-size: 18px;
`;

export const CurrentChatTitle = styled.span`
    font-size: 18px;
`;

export const LastMessage = styled.span`
    color: #808080;
`;

export const CurrentChatInfo = styled.span`
    color: #808080;
`;

export const ChatMessages = styled.div`
    flex: 1;
    background-image: url(${BackgroundImage});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ChatMessagesArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
`;

export const ChatInputArea = styled.div`
    width: 100%;
    height: 70px;
    background-color: #f0f2f5;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ChatInput = styled.input`
    width: 90%;
    background-color: #fff;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 4px 20px;
    font-size: 16px;
`;

export const SendMessageIcon = styled.img`
    width: 30px;
    height: auto;
    cursor: pointer;
`;

export const RightMessageContainer = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 2px 0;
    justify-content: flex-end;
`;

export const LeftMessageContainer = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 2px 0;
    justify-content: flex-start;
`;

export const CenterMessageContainer = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 2px 0;
    justify-content: center;
`;

export const SendedMessage = styled.div`
    background-color: #d9fdd3;
    padding: 10px;
    border-radius: 5px;
`;

export const ReceivedMessage = styled.div`
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
`;

export const NeutralMessage = styled.div`
    background-color: #dacdbe;
    border: .5px solid #c8b49d;
    padding: 10px;
    border-radius: 5px;
`;