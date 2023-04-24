import UserMessage from "../../components/userMessage";
import { TestingPageContainer } from "./styles";

function TestingPage() {
    return (
        <TestingPageContainer>
            <UserMessage message="teste" />
        </TestingPageContainer>
    );
};

export default TestingPage;