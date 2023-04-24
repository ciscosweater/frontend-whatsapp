import { ErrorMessage, LoginScreenButton, LoginScreenContainer, LoginScreenContent, LoginScreenInput, LoginScreenLogo, SignUpLink } from "./styles";
import WppLogo from '../../assets/whatsapplogo.png';
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
    const { handleLogin, email, setEmail, password, setPassword } = useContext(UserContext)
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleClick = async () => {
        const success = await handleLogin(email, password);
        if (!success) {
            setError(true);
        } else {
            setError(false);
            navigate('/chat');
        }
    };

    return (
        <LoginScreenContainer>
            <LoginScreenContent>
                <LoginScreenLogo src={WppLogo} />
                <ErrorMessage error={error}>Confira as informações e tente novamente.</ErrorMessage>
                <LoginScreenInput error={error} placeholder="Insira seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <LoginScreenInput error={error} placeholder="Insira sua senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <LoginScreenButton onClick={() => handleClick()} >Entrar</LoginScreenButton>
                <SignUpLink onClick={() => navigate('/signup')}>Ou crie uma conta</SignUpLink>
            </LoginScreenContent>
        </LoginScreenContainer>
    );
};

export default LoginScreen;