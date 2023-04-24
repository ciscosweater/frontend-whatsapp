import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 5px 0;
    justify-content: flex-end;
`;

export const MessageContainer = styled.div`
    background-color: #d9fdd3;
    min-height: 20px;
    min-width: 60px;
    max-width: 40%;
    border-radius: 10px;
    position: relative;
    word-wrap: break-word;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const MessageContainerDetail = styled.div`
    position: absolute;
    top: 0;
    right: -10px;
    width: 4px;
    height: 0px;
    border-top: 15px solid #d9fdd3;
	border-right: 15px solid transparent;
    z-index: 0;
`;

export const MessageContent = styled.div`
    padding: 7px 10px;
    z-index: 1;
`;

export const ContentText = styled.span`
    font-size: 1em;
    z-index: 1;
`;