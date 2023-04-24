import { Container, ContentText, MessageContainer, MessageContainerDetail, MessageContent, UserName } from "./styles";

function ReceivedMessage(props: any) {
    return (
        <Container>
            <MessageContainer>
                <MessageContainerDetail />
                <UserName>{props.name}</UserName>
                <MessageContent>
                    <ContentText>{props.message}</ContentText>
                </MessageContent>
            </MessageContainer>
        </Container>
    );
};

export default ReceivedMessage;