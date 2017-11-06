import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import HelpPage from '../components/HelpPage';
import EditExpense from '../components/EditExpense';
import NotFoundPage from '../components/NotFoundPage';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/create" component={AddExpense} />
      <Route exact path="/edit/:id" component={EditExpense} />
      <Route exact path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter;