import { ChatHeader, CurrentChat, CurrentChatContainer, CurrentChatInfo, CurrentChatTitle, ImageProfile } from "./styles";
import GroupImage from "../../assets/profissao-programador.jpg";
import { useEffect, useState } from "react";
import socket from 'socket.io-client';

const io = socket('http://localhost:4000');

function CurrentHeader() {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        io.on("usersUpdate", (users) => setUsersList(users));
    }, []);

    return (
        <ChatHeader>
            <CurrentChat>
                <ImageProfile src={GroupImage} alt="" />
                <CurrentChatContainer>
                    <CurrentChatTitle>Networking Profissão Programador</CurrentChatTitle>
                    <CurrentChatInfo>
                        {usersList.map((user: any, index) => (
                            <span>{user.name}{index + 1 < usersList.length ? ', ' : ''}</span>
                        ))}
                    </CurrentChatInfo>
                </CurrentChatContainer>
            </CurrentChat>
        </ChatHeader>
    );
};

export default CurrentHeader;