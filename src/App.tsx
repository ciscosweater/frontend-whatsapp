import React from 'react';
import { Background, ChatContainer, ChatItem, ChatOptions, ContactsList, Container, ImageProfile, LastMessage, TitleChatContainer, TitleMessage } from './styles';
import Image from './assets/profissao-programador.jpg'

function App() {
  return (
    <Container>
      <Background></Background>
      <ChatContainer>
          <ContactsList>
            <ChatOptions></ChatOptions>
            <ChatItem>
              <ImageProfile src={Image} alt="" />
              <TitleChatContainer>
                <TitleMessage>Networking Profissão Programador</TitleMessage>
                <LastMessage>Cisco: Bom dia!</LastMessage>
              </TitleChatContainer>
            </ChatItem>
          </ContactsList>
      </ChatContainer>
    </Container>
  );
}

export default App;
