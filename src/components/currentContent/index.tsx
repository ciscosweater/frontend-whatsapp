import { useContext, useEffect, useState } from "react";
import AlertMessage from "../alertMessage";
import ReceivedMessage from "../receivedMessage";
import UserMessage from "../userMessage";
import { ChatMessagesArea } from "./styles";
import { UserContext } from "../../contexts/userContext";
import socket from 'socket.io-client';

const io = socket('http://localhost:4000');

function CurrentContent() {

    const { name } = useContext(UserContext);

    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        io.on("joinMessage", (joinMessageToAdd: string) => setMessages((messages) => [...messages, joinMessageToAdd]));
        io.on("updateMessages", (messageToAdd: string) => setMessages((messages) => [...messages, messageToAdd]));
    }, []);

    return (
        <ChatMessagesArea>
            {messages.map((message: any, index) => {
                if (message.name === name) {
                    return (
                        <UserMessage message={message.message} />
                    )
                } else if (message.name === null) {
                    return (
                        <AlertMessage message={message.message} />
                    )
                } else {
                    return (
                        <ReceivedMessage message={message.message} name={message.name} />
                    )

                }
            })}
        </ChatMessagesArea>
    );
};

export default CurrentContent;