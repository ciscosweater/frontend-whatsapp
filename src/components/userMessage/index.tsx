import { Container, ContentText, MessageContainer, MessageContainerDetail, MessageContent } from "./styles";

function UserMessage(props: any) {
    return (
        <Container>
            <MessageContainer>
                <MessageContainerDetail />
                <MessageContent>
                    <ContentText>{props.message}</ContentText>
                </MessageContent>
            </MessageContainer>
        </Container>
    );
};

export default UserMessage;