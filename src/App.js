import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import store from './store';
import LoginPage from './components/LoginPage';
import PrivateRoute from './common/route/PrivateRoute';
import HomePage from './components/HomePage';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute
            path="/home"
            component={HomePage}
          />
          <Redirect from= "/" to="/home"/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;