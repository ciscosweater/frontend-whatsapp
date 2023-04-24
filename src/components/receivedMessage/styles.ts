import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 5px 0;
    justify-content: flex-start;
`;

export const MessageContainer = styled.div`
    background-color: #fff;
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
    left: -10px;
    width: 5px;
    height: 0px;
    border-top: 15px solid #fff;
	border-left: 15px solid transparent;
    z-index: 0;
`;

export const UserName = styled.span`
    color: #445c51;
    margin-left: 10px;
    font-size: 0.8em;
    font-weight: 700;
    padding-right: 15px;
`;

export const MessageContent = styled.div`
    padding: 7px 10px;
    margin-top: -7.5px;
`;

export const ContentText = styled.span`
    font-size: 1em;
`;