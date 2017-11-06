import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expenses</h1>
    <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expenses</NavLink>
    <NavLink to="/help" exact activeClassName="is-active">Help</NavLink>
  </header>
)

export default Header;