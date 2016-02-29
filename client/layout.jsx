import React from 'react';
import {AppNavbar} from './header.jsx';
import {FlashDisplay} from './messages.jsx';


export const AppLayout = ({content}) => (
  <div className="app-root">
    <header>
      <AppNavbar />
    </header>
    <FlashDisplay />
    {content()}
  </div>
);
