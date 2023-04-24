import { Container, MessageContainer, MessageContent, ContentText } from "./styles";

function AlertMessage(props: any) {
    return (
        <Container>
            <MessageContainer>
                <MessageContent>
                    <ContentText>{props.message}</ContentText>
                </MessageContent>
            </MessageContainer>
        </Container>
    );
};

export default AlertMessage;