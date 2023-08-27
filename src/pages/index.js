import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ChatLayout from '../component/Layout/ChatLayout';

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
