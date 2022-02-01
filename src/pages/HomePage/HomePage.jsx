import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GameList from '../../components/GameList/GameList';

const HomePage = () => {
  return (
    <BrowserRouter>
        <Route path="/" component={GameList} exact />
    </BrowserRouter>
  );
};

export default HomePage;
