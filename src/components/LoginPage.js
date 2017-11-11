import React from 'react';
import { connect } from 'react-redux';
import { startLogin, loginWithFacebook } from '../actions/auth';

export const LoginPage = ({startLogin, loginWithFacebook}) => (
  <div className="box-layout">
    <div className="box-layout__box">
    <h1 className='box-layout__title'>Expense App</h1>
    <p>Time to get your expenses under control</p>  
    <button className="button" onClick={startLogin}>Login With Google</button>
      <p>OR</p>
    <button className="button__facebook" onClick={loginWithFacebook}>Login With Facebook</button>
    
    </div>
  </div>
);

/* const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  loginWithFacebook: () => dispatch(loginWithFacebook())
}) */


export default connect(null, {startLogin, loginWithFacebook})(LoginPage);
