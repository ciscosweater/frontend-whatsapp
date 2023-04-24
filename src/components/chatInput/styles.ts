import styled from "styled-components";

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
    font-size: 0.9em;
`;

export const SendMessageIcon = styled.img`
    width: 25px;
    height: auto;
    cursor: pointer;
    transition: 0.1s;

    :hover {
        transform: scale(1.1);
    }
`;