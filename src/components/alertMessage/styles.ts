import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 5px 0;
    justify-content: center;
`;

export const MessageContainer = styled.div`
    background-color: #e8e8e8;
    min-height: 20px;
    min-width: 60px;
    max-width: 40%;
    border-radius: 5px;
    position: relative;
    word-wrap: break-word;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const MessageContent = styled.div`
    padding: 5px 8px;
`;

export const ContentText = styled.span`
    font-size: 0.9em;
`;