import styled from "styled-components";

export const ChatHeader = styled.div`
    width: 100%;
    height: 80px;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
`;

export const CurrentChat = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px solid #f0f2f5;
    border-bottom: 1px solid #f0f2f5;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
`;

export const ImageProfile = styled.img`
    width: 50px;
    height: auto;
    border-radius: 50%;
`;

export const CurrentChatContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CurrentChatTitle = styled.span`
    font-size: 18px;
`;

export const CurrentChatInfo = styled.span`
    color: #808080;
`;