import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestingPage from './pages/workingonpage';
import { UserStore } from './contexts/userContext';
import { ChatStore } from './contexts/chatContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserStore>
    <ChatStore>
      <App />
    </ChatStore>
  </UserStore>
);
