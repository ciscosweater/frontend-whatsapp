import { useContext } from "react";
import { ChatInputArea, SendMessageIcon, ChatInput } from "./styles";
import { ChatContext } from "../../contexts/chatContext";
import { UserContext } from "../../contexts/userContext";
import SendIcon from "../../assets/send.png";

function InputArea() {

    const { name } = useContext(UserContext);
    const { message, setMessage, handleMessage } = useContext(ChatContext);

    return (
        <ChatInputArea>
            <ChatInput
                placeholder='Mensagem'
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
            />
            <SendMessageIcon
                src={SendIcon}
                onClick={() => handleMessage(name)}
            />
        </ChatInputArea>
    );
};

export default InputArea;