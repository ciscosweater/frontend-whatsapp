import { createContext, useState, ReactNode } from "react";
import socket from "socket.io-client";
import api from "../api";

const io = socket('http://localhost:4000');

export interface UserContextType {
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    login: boolean;
    setLogin: (login: boolean) => void;
    handleLogin: (email: string, password: string) => Promise<boolean>;
    handleRegister: (email: string, password: string) => Promise<boolean>;
}

export const UserContext = createContext<UserContextType>({
    name: '',
    setName: () => { },
    email: '',
    setEmail: () => { },
    password: '',
    setPassword: () => { },
    login: false,
    setLogin: () => { },
    handleLogin: (email, password) => Promise.resolve(false),
    handleRegister: (email, password) => Promise.resolve(false)
});

export function UserStore({ children }: { children: ReactNode }) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [login, setLogin] = useState<boolean>(false);

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await api.post('/user/sign-in', { email, password });
            setName(response.data.name)
            io.emit("userJoin", response.data.name);
            return true;
        } catch (error) {
            console.log('Não foi possível fazer o login', error);
            return false;
        }
    };

    const handleRegister = async (email: string, password: string) => {
        try {
            await api.post('/user/sign-up', { name, email, password });
            console.log('Cadastro efetuado com sucesso.');
            return true;
        } catch (error) {
            console.log('Nao foi possivel fazer o cadastro.', error);
            return false;
        }
    };

    return (
        <UserContext.Provider value={{ name, setName, email, setEmail, password, setPassword, login, setLogin, handleRegister, handleLogin }}>
            {children}
        </UserContext.Provider>
    );
};