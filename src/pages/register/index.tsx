import { useContext, useState } from "react";
import WppLogo from '../../assets/whatsapplogo.png';
import { ErrorMessage, ScreenButton, ScreenContainer, ScreenContent, ScreenInput, ScreenLogo, ScreenText } from "./styles";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const { handleRegister, name, setName, email, setEmail, password, setPassword } = useContext(UserContext)

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleClick = async () => {
        const success = await handleRegister(email, password);

        if (!success) {
            console.log('nao registrou');
            setError(true);

        } else {
            console.log('registrou');
            setError(false);
            navigate('/login');
        }
    };

    return (
        <ScreenContainer>
            <ScreenContent>
                <ScreenLogo src={WppLogo} />
                <ScreenText>Digite seu nome</ScreenText>
                <ScreenInput error={error} value={name} onChange={(e) => setName(e.target.value)} />
                <ScreenText>Digite seu email</ScreenText>
                <ScreenInput error={error} value={email} onChange={(e) => setEmail(e.target.value)} />
                <ScreenText>Crie uma senha</ScreenText>
                <ScreenInput type="password" error={error} value={password} onChange={(e) => setPassword(e.target.value)} />
                <ErrorMessage error={error}>Confira as informações e tente novamente.</ErrorMessage>
                <ScreenButton onClick={() => handleClick()} >Entrar</ScreenButton>
            </ScreenContent>
        </ScreenContainer>
    );
};

export default RegisterPage;