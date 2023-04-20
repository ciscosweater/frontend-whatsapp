import React, {useEffect, useState} from 'react';
import { Background, CenterMessageContainer, ChatContainer, ChatHeader, ChatInput, ChatInputArea, ChatItem, ChatMessages, ChatMessagesArea, ChatOptions, ContactsList, Container, CurrentChat, CurrentChatContainer, CurrentChatInfo, CurrentChatTitle, ImageProfile, LastMessage, LeftMessageContainer, NeutralMessage, ReceivedMessage, RightMessageContainer, SendMessageIcon, SendedMessage, TitleChatContainer, TitleMessage } from './styles';
import GroupImage from './assets/profissao-programador.jpg';
import SendIcon from './assets/send.png';
import socket from 'socket.io-client';

const io = socket('http://localhost:4000');

function App() {

  const [name, setName] = useState<string>('');
  const [joined, setJoined] = useState<boolean>(false);
  const [usersList, setUsersList] = useState([]);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const [lastMessage, setLastMessage] = useState<any>({});
  
  useEffect(() => {
    io.on("usersUpdate", (users) => setUsersList(users));
    io.on("joinMessage", (joinMessageToAdd: string) => setMessages((messages) => [...messages, joinMessageToAdd]));
    io.on("updateMessages", (messageToAdd: string) => setMessages((messages) => [...messages, messageToAdd]));
  }, []);

  useEffect(() => {
    messages.length? setLastMessage(messages[messages.length - 1]) : setLastMessage({});
  }, [messages])

  const handleJoin = () => {
    if(name){
      io.emit("userJoin", name);
      setJoined(true);
    }
  };

  const handleMessage = () => {
    if(message){
      io.emit("sendMessage", {message, name});
      setMessage('');
    };
  };

  if(!joined){
    return (
      <div>
        <span>Digite seu nome</span>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => handleJoin()} >Entrar</button>
      </div>
    );
  };

  return (
    <Container>
      <Background></Background>
      <ChatContainer>
          <ContactsList>
            <ChatOptions></ChatOptions>
            <ChatItem>
              <ImageProfile src={GroupImage} alt="" />
              <TitleChatContainer>
                <TitleMessage>Networking Profissão Programador</TitleMessage>
                <LastMessage>
                  {
                  `${lastMessage.name? `${lastMessage.name}: ` : ''}${lastMessage.message}`
                  }
                </LastMessage>
              </TitleChatContainer>
            </ChatItem>
          </ContactsList>
          <ChatMessages>
            <ChatHeader>
              <CurrentChat>
                <ImageProfile src={GroupImage} alt="" />
                <CurrentChatContainer>
                  <CurrentChatTitle>Networking Profissão Programador</CurrentChatTitle>
                  <CurrentChatInfo>
                    {usersList.map((user: any, index) => (
                      <span>{user.name}{index + 1 < usersList.length? ', ' : ''}</span>
                    ))}
                    </CurrentChatInfo>
                </CurrentChatContainer>
              </CurrentChat>
            </ChatHeader>

            <ChatMessagesArea>
              {messages.map((message:any, index) => {
                if(message.name === name){
                  return (
                    <RightMessageContainer>
                      <SendedMessage>
                        <span key={index} >{message.name? `${message.name}: ` : ''}{message.message}</span>
                      </SendedMessage>
                    </RightMessageContainer>
                  )
                } else if(message.name === null){
                  return (
                  <CenterMessageContainer>
                    <NeutralMessage>
                      <span key={index} >{message.name? `${message.name}: ` : ''}{message.message}</span>
                    </NeutralMessage>
                  </CenterMessageContainer>
                  )
                } else {
                  return (
                    <LeftMessageContainer>
                      <ReceivedMessage>
                        <span key={index} >{message.name? `${message.name}: ` : ''}{message.message}</span>
                      </ReceivedMessage>
                    </LeftMessageContainer>
                  )
                
                }})}
            </ChatMessagesArea>

            <ChatInputArea>
              <ChatInput 
              placeholder='Mensagem' 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
              <SendMessageIcon 
              src={SendIcon} 
              onClick={() => handleMessage()}
              />
            </ChatInputArea>
          </ChatMessages>
      </ChatContainer>
    </Container>
  );
}

export default App;
