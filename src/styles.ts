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

export const LoginScreenContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${BackgroundImage});
`;

export const LoginScreenContent = styled.div`
    max-width: 80%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #e8e8e8;
    border: 1px solid #dacdbe;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const LoginScreenLogo = styled.img`
    max-width: 70%;
    width: 400px;
    height: auto;
    margin-top: 80px;
`;

export const LoginScreenText = styled.span`
    font-size: 1em;
    font-weight: 450;
    color: #31271c;
    margin-top: 10px;
    margin-bottom: -30px;
`;

export const LoginScreenInput = styled.input`
    padding: 15px 10px;
    border: none;
    outline: none;
    max-width: 70%;
    width: 250px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    font-size: 1.1em;
    color: #624e37;
    margin: 10px 0px 20px;
    background-color: #dcdcdc;
    border-bottom: 3px solid #445c51;
`;

export const LoginScreenButton = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: #446c51;
    color: #fff;
    font-weight: bold;
    font-size: 0.9em;
    margin-bottom: 80px;
    transition: 0.2s;
    
    :hover {
        background-color: #588d69;
    }
`;