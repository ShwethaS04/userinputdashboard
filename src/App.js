import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import style from './App.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <div className={style.app}>
        <header className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={style.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;