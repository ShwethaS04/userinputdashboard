import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import store from '../../store';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        store.getState().isLoggedIn
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

export default PrivateRoute;