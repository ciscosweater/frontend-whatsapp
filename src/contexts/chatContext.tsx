import { createContext, useState, ReactNode } from "react";
import socket from "socket.io-client";

const io = socket('http://localhost:4000');

export interface ChatContextType {
    message: string;
    setMessage: (message: string) => void;
    handleMessage: (name: string) => void;
    lastMessage: any;
    setLastMessage: any;
}

export const ChatContext = createContext<ChatContextType>({
    message: '',
    setMessage: () => { },
    handleMessage: () => { },
    lastMessage: { name: null, message: "Nenhuma mensagem por aqui ainda :)" },
    setLastMessage: () => { }
});

export function ChatStore({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState<string>('');
    const [lastMessage, setLastMessage] = useState<any>({ name: null, message: "Nenhuma mensagem por aqui ainda :)" });


    const handleMessage = (name: any) => {
        if (message) {
            io.emit("sendMessage", { message, name });
            setMessage('');
        }
    };

    return (
        <ChatContext.Provider value={{ message, setMessage, handleMessage, lastMessage, setLastMessage }}>
            {children}
        </ChatContext.Provider>
    );
};