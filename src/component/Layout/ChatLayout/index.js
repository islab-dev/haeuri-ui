import React from 'react';
import './chat-layout.css';
import { Outlet } from 'react-router-dom';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';

const ChatLayout = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="chat-layout">
      <ChatHeader />
      <div className="content">
        <Outlet />
      </div>
      <ChatFooter />
    </div>
  );
};

export default ChatLayout;
