import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import style from './App.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <LoginPage/>
       
      </Provider>
    );
  }
}

export default App;