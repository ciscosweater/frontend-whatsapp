import React, { useContext, useEffect, useState } from 'react';
import { Background, ChatContainer, ChatMessages, Container } from './styles';
import socket from 'socket.io-client';
import { ChatContext } from '../../contexts/chatContext';
import ContactsList from '../../components/contactsList';
import CurrentHeader from '../../components/currentHeader';
import CurrentContent from '../../components/currentContent';
import InputArea from '../../components/chatInput';

const io = socket('http://localhost:4000');

function ChatPage() {
    const { setLastMessage } = useContext(ChatContext);

    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        io.on("joinMessage", (joinMessageToAdd: string) => setMessages((messages) => [...messages, joinMessageToAdd]));
        io.on("updateMessages", (messageToAdd: string) => setMessages((messages) => [...messages, messageToAdd]));
    }, []);

    useEffect(() => {
        messages.length ? setLastMessage(messages[messages.length - 1]) : setLastMessage({});
    }, [messages, setLastMessage]);

    return (
        <Container>
            <Background />
            <ChatContainer>
                <ContactsList />
                <ChatMessages>
                    <CurrentHeader />
                    <CurrentContent />
                    <InputArea />
                </ChatMessages>
            </ChatContainer>
        </Container>
    );
};

export default ChatPage;