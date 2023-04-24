import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './pages/login';
import ChatPage from './pages/chats';
import RegisterPage from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/' element={<LoginScreen />} />
        <Route path='/signup' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
