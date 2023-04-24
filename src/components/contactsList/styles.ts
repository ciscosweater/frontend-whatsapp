import styled from "styled-components";

export const Container = styled.div`
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
    justify-content: center;
    box-sizing: border-box;
    padding: 0 10px;
    cursor: pointer;
    transition: 0.1s;

    :hover {
        background-color: #dcdcdc;
    }
`;

export const ChatItem = styled.div`
    box-sizing: border-box;
    padding: 10px;
    max-height: 80px;
    border-top: 1px solid #f0f2f5;
    border-bottom: 1px solid #f0f2f5;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s;
    max-width: 100%;
    white-space: nowrap; /* Evita que o texto quebre em linhas */
    overflow: hidden; /* Oculta o texto que ultrapassa a largura da div */
    text-overflow: ellipsis; /* Adiciona as reticências ao texto cortado */

    :hover {
        background-color: #f5f5f5;
    }
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
    max-width: 100%;
    word-wrap: break-word;
    max-width: 100%;
    white-space: nowrap; /* Evita que o texto quebre em linhas */
    overflow: hidden; /* Oculta o texto que ultrapassa a largura da div */
    text-overflow: ellipsis; /* Adiciona as reticências ao texto cortado */
`;

export const TitleMessage = styled.span`
    font-size: 1em;
    font-weight: 600;
`;

export const LastMessage = styled.span`
    color: #808080;
    font-size: 0.9em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
`;