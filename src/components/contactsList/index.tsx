import { ChatItem, ChatOptions, Container, ImageProfile, LastMessage, TitleChatContainer, TitleMessage } from "./styles";
import GroupImage from '../../assets/group-image.jpg';
import { useContext } from "react";
import { ChatContext } from "../../contexts/chatContext";
import { UserContext } from "../../contexts/userContext";
import socket from 'socket.io-client';
import { useNavigate } from "react-router-dom";

const io = socket('http://localhost:4000');

function ContactsList() {
    const { lastMessage } = useContext(ChatContext);
    const { name, setLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const handleDisconnect = () => {
        io.emit("userDisconnect", name);
        setLogin(false);
        navigate('/');
    };

    return (
        <Container>
            <ChatOptions onClick={handleDisconnect} >SAIR</ChatOptions>
            <ChatItem>
                <ImageProfile src={GroupImage} alt="" />
                <TitleChatContainer>
                    <TitleMessage>Chat Geral</TitleMessage>
                    {lastMessage && (
                        <LastMessage>
                            {lastMessage ? `${lastMessage.name ? `${lastMessage.name}: ` : ''}${lastMessage.message}` : 'Sem mensagens.'}
                        </LastMessage>
                    )}
                </TitleChatContainer>
            </ChatItem>
        </Container>
    );
};

export default ContactsList;