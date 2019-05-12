import { createStore, applyMiddleware } from 'redux';
import loginReducer from './common/session/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(
        loginReducer,
        composeWithDevTools(applyMiddleware(thunk))
      )
    : createStore(loginReducer,applyMiddleware(thunk));

export default store;