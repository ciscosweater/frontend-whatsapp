import styled from "styled-components";
import BackgroundImage from '../../assets/background.png'

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
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e8e8e8;
    border: 1px solid #dacdbe;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const LoginScreenLogo = styled.img`
    max-width: 70%;
    width: 400px;
    height: auto;
    margin-bottom: 20px;
`;

export const LoginScreenText = styled.span`
    font-size: 1em;
    font-weight: 450;
    color: #31271c;
    margin-top: 10px;
`;

export const LoginScreenInput = styled.input<{ error: any }>`
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
    background-color: ${({ error }) => error ? '#ffe6e6' : '#dcdcdc'};
    border-bottom: ${({ error }) => error ? '3px solid #660000' : '3px solid #445c51'};
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

export const SignUpLink = styled.span`
    font-size: 0.9em;
    cursor: pointer;
    color: #445c51;
    margin-top: -70px;
    margin-bottom: 10px;

    :hover {
        color: #588d69;
    }
`;

export const ErrorMessage = styled.span<{ error: any }>`
    display: ${({ error }) => error ? 'flex' : 'none'};
    position: absolute;
    top: 125px;
    font-size: 0.8em;
    color: #660000;
    font-weight: bold;
`;