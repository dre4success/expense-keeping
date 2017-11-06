import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import HelpPage from '../components/HelpPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <Switch>
      <Route />
    </Switch>
  </BrowserRouter>
)